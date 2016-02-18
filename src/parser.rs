use nom::{digit, IResult};
use std::str;
use super::*;

/// Checks if a given character is part of a valid identifier.
///
/// A valid identifier character is anything between 0-9, a-z, A-Z, and a
/// hyphen. If the given character matches any one of those requirements,
/// `true` is returned. Otherwise, the character is not valid and `false`
/// is returned.
#[allow(dead_code)]
fn is_id_char(c: u8) -> bool {
    // 0-9
    (c >= 48 && c <= 57) ||

    // A-Z
    (c >= 65 && c <= 90) ||

    // a-z
    (c >= 97 && c <= 122) ||

    // hyphen (-)
    c == 45
}

/// Parses a collection of strings into a vector of `Identifier`s.
#[allow(dead_code)]
fn parse_ids(identifiers: Vec<&str>) -> Vec<Identifier> {
    let mut parsed = Vec::new();

    for identifier in identifiers {
        parsed.push(Identifier::from(identifier));
    }

    parsed
}

/// Parse a string as an `Identifier`.
#[allow(dead_code)]
named!(
    identifiers<&[u8], Vec<Identifier> >,
    map!(
        separated_list!(
            tag!("."),
            map_res!(
                take_while!(is_id_char),
                str::from_utf8
            )
        ),
        parse_ids
    )
);

/// Parses a string of pre-release identifiers into a vector of `Identifier`s.
#[allow(dead_code)]
named!(
    build<&[u8], Option<Vec<Identifier>> >,
    opt!(complete!(preceded!(tag!("+"), identifiers)))
);

/// Parses a string of build identifiers into a vector of `Identifier`s.
#[allow(dead_code)]
named!(
    prerelease<&[u8], Option<Vec<Identifier>> >,
    opt!(complete!(preceded!(tag!("-"), identifiers)))
);

/// Optionally parse pre-release and build identifiers.
#[allow(dead_code)]
named!(
    extensions<&[u8], (Option<Vec<Identifier>>, Option<Vec<Identifier>>)>,
    pair!(prerelease, build)
);

/// Parses a numeric string as a `u64`.
#[allow(dead_code)]
named!(
    number<&[u8], u64>,
    map_res!(
        map_res!(digit, str::from_utf8),
        |c| str::FromStr::from_str(c)
    )
);

/// Parses a numeric string preceded by a dot (.) as u64.
#[allow(dead_code)]
named!(
    next_number<&[u8], u64>,
    preceded!(char!('.'), number)
);

/// Parse a string as a `Version`.
#[allow(dead_code)]
named!(
    version<&[u8], Version>,
    chain!(
        major: number ~
        minor: next_number ~
        patch: next_number ~
        extensions: extensions,
        || {
            Version {
                major: major,
                minor: minor,
                patch: patch,
                pre: extensions.0.clone().unwrap_or(Vec::new()),
                build: extensions.1.clone().unwrap_or(Vec::new()),
            }
        }
    )
);

/// Enables parsing of strings as semantic version numbers.
///
/// ```
/// # use recital::version::Version;
/// let example: Version = "1.2.3-abc.456+def.789".parse().unwrap();
/// ```
impl str::FromStr for Version {
    type Err = String;

    fn from_str(s: &str) -> Result<Version, String> {
        match version(s.as_bytes()) {
            IResult::Done(remainder, version) => {
                if 0 == remainder.len() {
                    return Ok(version);
                }
            }

            _ => {}
        }

        Err(format!("Invalid version number: {}", s.to_string()))
    }
}

#[cfg(test)]
mod test {

    use nom::IResult;
    use super::{build, extensions, identifiers, is_id_char, next_number,
                number, parse_ids, prerelease, version};
    use super::super::*;
    use super::super::Identifier::*;

    macro_rules! parsed {
        ($a:expr) => {
            {
                IResult::Done(&[][..], $a)
            }
        }
    }

    #[test]
    fn test_build() {
        assert_eq!(build(b"+abc.123"),
                   parsed!(Some(vec![Alpha("abc".to_string()),
                                     Number(123)])));
    }

    #[test]
    fn test_extensions() {
        assert_eq!(extensions(b"-abc.123"),
                   parsed!((Some(vec![Alpha("abc".to_string()), Number(123)]),
                            None)));

        assert_eq!(extensions(b"+def.456"),
                   parsed!((None,
                            Some(vec![Alpha("def".to_string()),
                                      Number(456)]))));

        assert_eq!(extensions(b"-abc.123+def.456"),
                   parsed!((Some(vec![Alpha("abc".to_string()), Number(123)]),
                            Some(vec![Alpha("def".to_string()),
                                      Number(456)]))));
    }

    #[test]
    fn test_from_str() {
        assert_eq!("1.2.3-abc.456+def.789".parse::<Version>().unwrap(),
                   Version {
                       major: 1,
                       minor: 2,
                       patch: 3,
                       pre: vec![Alpha("abc".to_string()), Number(456)],
                       build: vec![Alpha("def".to_string()), Number(789)],
                   });
    }

    #[test]
    fn test_identifiers() {
        assert_eq!(identifiers(b"abc.123.xyz-890"),
                   parsed!(vec![Alpha("abc".to_string()),
                                Number(123),
                                Alpha("xyz-890".to_string())]));
    }

    #[test]
    fn test_is_id_char() {
        let mut matched = 0;

        for c in 0..255 {
            if is_id_char(c) {
                matched += 1;
            }
        }

        assert_eq!(63, matched);
    }

    #[test]
    fn test_next_number() {
        assert_eq!(next_number(b".123"), parsed!(123u64));
    }

    #[test]
    fn test_number() {
        assert_eq!(number(b"123"), parsed!(123u64));
    }

    #[test]
    fn test_parse_ids() {
        assert_eq!(parse_ids(vec!["abc", "123"]),
                   vec![Alpha("abc".to_string()), Number(123)]);
    }

    #[test]
    fn test_prerelease() {
        assert_eq!(prerelease(b"-abc.123"),
                   parsed!(Some(vec![Alpha("abc".to_string()),
                                     Number(123)])));
    }

    #[test]
    fn test_version() {
        assert_eq!(version(b"12.34.56-ab.78"),
                   parsed!(Version {
                       major: 12,
                       minor: 34,
                       patch: 56,
                       pre: vec![Alpha("ab".to_string()), Number(78)],
                       build: Vec::new(),
                   }));

        assert_eq!(version(b"12.34.56+cd.90"),
                   parsed!(Version {
                       major: 12,
                       minor: 34,
                       patch: 56,
                       pre: Vec::new(),
                       build: vec![Alpha("cd".to_string()), Number(90)],
                   }));

        assert_eq!(version(b"12.34.56-ab.78+cd.90"),
                   parsed!(Version {
                       major: 12,
                       minor: 34,
                       patch: 56,
                       pre: vec![Alpha("ab".to_string()), Number(78)],
                       build: vec![Alpha("cd".to_string()), Number(90)],
                   }));
    }

}
