//! Creates, parses, and manages semantic version numbers.
//!
//! The **version** module provides you with a set of structs, enums, and
//! macros to create a representation of a semantic version number. You have
//! the option of using the structs and enums directly
//!
//! ```
//! use recital::version::{Identifier, Version};
//!
//! let version = Version {
//!     major: 1,
//!     minor: 2,
//!     patch: 3,
//!     pre: vec![Identifier::Alpha("abc".to_string()),
//!               Identifier::Number(456)],
//!     build: vec![Identifier::Alpha("def".to_string()),
//!                 Identifier::Number(789)],
//! };
//! ```
//!
//! or use the macros
//!
//! ```
//! # #[macro_use]
//! # extern crate recital;
//! # fn main() {
//! let version = version!(1, 2, 3,
//!                        vec![id!("abc"), id!(456)],
//!                        vec![id!("def"), id!(789)]);
//! # }
//! ```
use self::Identifier::{Alpha, Number};
use std::cmp::Ordering;
use std::fmt::{self, Display};

/// Represents an alphanumeric or numberic identifier.
///
/// An identifier in a semantic version number is a simple sequence of letters
/// (a-z, A-Z), numbers (0-9), and hyphens that can appear in any order. Each
/// identifier in a version number is separated by a dot (`.`). Knowing the
/// difference between numeric and alphanumeric identifiers is important when
/// version numbers are being compared.
#[derive(Clone, Debug, Eq, Ord, PartialEq, PartialOrd)]
pub enum Identifier {
    /// Reprents a numeric identifier.
    ///
    /// A numeric identifier, as the name implies, may only have numbers.
    /// During comparison with other identifiers, numberc identifiers are
    /// compared normally to each other. However, when a numeric identifier
    /// is compared to a numeric identifier, it will always be the lesser of
    /// the two.
    Number(u64),

    /// Represents an alphanumeric identifier.
    ///
    /// An alphanumeric identifier, as the name implies, may have letters
    /// and/or numbers. The letters are limited to a-z, A-Z, numbers to 0-9,
    /// and may also include one or more hyphens. During comparison with other
    /// identifiers, alphanumeric identifiers are compared normally to each
    /// other.  However, when an alphanumeric identifier is compared to a
    /// numeric identifier, it will always be the greater of the two.
    Alpha(String),
}

impl Display for Identifier {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match *self {
            Identifier::Alpha(ref a) => write!(f, "{}", a),
            Identifier::Number(ref n) => write!(f, "{}", n),
        }
    }
}

impl<'a> From<&'a str> for Identifier {
    fn from(s: &'a str) -> Identifier {
        match s.parse::<u64>() {
            Ok(n) => Identifier::Number(n),
            Err(_) => Identifier::Alpha(s.to_string()),
        }
    }
}

impl From<String> for Identifier {
    fn from(s: String) -> Identifier {
        match s.parse::<u64>() {
            Ok(n) => Identifier::Number(n),
            Err(_) => Identifier::Alpha(s),
        }
    }
}

// Add From trait for all number types.
macro_rules! from_n {
    ($x:ty) => {
        impl From<$x> for Identifier {
            fn from(n: $x) -> Identifier {
                Identifier::Number(n as u64)
            }
        }
    }
}

from_n!(f32);
from_n!(f64);
from_n!(i8);
from_n!(i16);
from_n!(i32);
from_n!(i64);
from_n!(u8);
from_n!(u16);
from_n!(u32);
from_n!(u64);

/// Creates a new identifier.
///
/// ```
/// # #[macro_use]
/// # extern crate recital;
/// # fn main() {
/// let a = id!("abc");
/// let b = id!(123);
/// # }
/// ```
///
/// is the same as
///
/// ```
/// use recital::version::Identifier;
///
/// let a = Identifier::Alpha("abc".to_string());
/// let b = Identifier::Number(123);
/// ```
#[macro_export]
macro_rules! id {
    ($a:expr) => {{ $crate::version::Identifier::from($a) }}
}

/// Represents a semantic version number.
///
/// A semantic version number is a version number that conforms to a set of
/// rules and requirements that have been defined in the Semantic Versioning
/// specification. You may find the specification online at [semver.org][].
///
/// [semver.org]: https://semver.org/
#[derive(Clone, Debug, Eq)]
pub struct Version {
    /// The major version number.
    ///
    /// A major version number is used to indicate that a paritcular version is
    /// backward compatible with all other version numbers from the same major
    /// version number. For example, `1.999.999` is backwards compatible with
    /// `1.0.0`, however `2.0.0` is not backwards compatible with `1.999.999`.
    pub major: u64,

    /// The minor version number.
    ///
    /// A minor version number is used to indicate that one or more features
    /// have been added that are compatible with earlier versions of the same
    /// major version number.
    pub minor: u64,

    /// The patch version number.
    ///
    /// A patch version number is used to indicate that one or more bugs have
    /// been fixed, but no new features have been added and compatibility with
    /// earlier versions of the same major version number is maintained.
    pub patch: u64,

    /// The pre-release identifiers.
    ///
    /// The pre-release identifiers are used to indicate that this version
    /// number is not stable. While the identifiers can be as many as you want
    /// with whatever information you want, you will most commonly find people
    /// use identifiers such as `-alpha`, `-beta.3`, `-rc.1`, and so on. There
    /// may also be no identifiers, which indicates that this may be a stable
    /// version number.
    pub pre: Vec<Identifier>,

    /// The build identifiers.
    ///
    /// The build identifiers do not mean anything in a semantic version
    /// number. While they are structured similarly (`+debug`, `+xyz.123`,
    /// etc.), they have no impact when comparing version numbers. They are
    /// mostly there to help developers identify other bits of information.
    pub build: Vec<Identifier>,
}

/// Sets the default values for a `Version`.
///
/// ```
/// use recital::version::Version;
///
/// let defaults = Version {
///     major: 0,
///     minor: 0,
///     patch: 0,
///     pre: Vec::new(),
///     build: Vec::new(),
/// };
/// ```
impl Default for Version {
    fn default() -> Version {
        Version {
            major: 0,
            minor: 0,
            patch: 0,
            pre: Vec::new(),
            build: Vec::new(),
        }
    }
}

impl Display for Version {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        try!(write!(f, "{}.{}.{}", self.major, self.minor, self.patch));

        macro_rules! join {
            ($a:expr) => {
                {
                    let mut joined: Vec<String> = Vec::new();

                    for identifier in &$a {
                        joined.push(format!("{}", identifier));
                    }

                    joined.join(".")
                }
            }
        }

        if !self.pre.is_empty() {
            try!(write!(f, "-{}", join!(self.pre)));
        }

        if !self.build.is_empty() {
            try!(write!(f, "+{}", join!(self.build)));
        }

        Ok(())
    }
}

impl Ord for Version {
    fn cmp(&self, other: &Version) -> Ordering {
        macro_rules! compare {
            ($a:expr, $b:expr) => {
                {
                    match $a.cmp($b) {
                        Ordering::Equal => {},
                        order => return order,
                    }
                }
            }
        }

        compare!(self.major, &other.major);
        compare!(self.minor, &other.minor);
        compare!(self.patch, &other.patch);

        match (self.pre.len(), other.pre.len()) {
            (0, 0) => Ordering::Equal,
            (0, _) => Ordering::Greater,
            (_, 0) => Ordering::Less,
            (_, _) => self.pre.cmp(&other.pre),
        }
    }
}

impl PartialEq for Version {
    fn eq(&self, other: &Version) -> bool {
        self.major == other.major
            && self.minor == other.minor
            && self.patch == other.patch
            && self.pre == other.pre
    }
}

impl PartialOrd for Version {
    fn partial_cmp(&self, other: &Version) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

impl Version {
    /// Removes all of the build identifiers.
    pub fn clear_build(&mut self) {
        self.build = Vec::new();
    }

    /// Removes all of the pre-release and build identifiers.
    pub fn clear_identifiers(&mut self) {
        self.clear_build();
        self.clear_pre();
    }

    /// Removes all of the pre-release identifiers.
    pub fn clear_pre(&mut self) {
        self.pre = Vec::new();
    }

    /// Increments the major version number.
    ///
    /// When a major version number is incremented, the minor and patch version
    /// numbers are set to zero. In addition, the pre-release and build
    /// identifiers are all removed.
    pub fn increment_major(&mut self) {
        self.major += 1;
        self.minor = 0;
        self.patch = 0;

        self.pre.clear();
        self.build.clear();
    }

    /// Increments the minor version number.
    ///
    /// When a minor version number is incremented, the patch version number
    /// is set to zero. In addition, the pre-release and build identifiers are
    /// all removed.
    pub fn increment_minor(&mut self) {
        self.minor += 1;
        self.patch = 0;

        self.pre.clear();
        self.build.clear();
    }

    /// Increments the patch version number.
    ///
    /// When a patch version number is incremented, the pre-release and build
    /// identifiers are all removed.
    pub fn increment_patch(&mut self) {
        self.patch += 1;

        self.pre.clear();
        self.build.clear();
    }

    /// Checks if the version number is stable.
    ///
    /// A version number is considered stable when it has a major version
    /// number that is greater than zero (`0`) and has no pre-release
    /// identifiers.
    pub fn is_stable(&self) -> bool {
        (0 != self.major) && self.pre.is_empty()
    }

    /// Creates a new version number with default values.
    pub fn new() -> Version {
        Default::default()
    }
}

/// Creates a new version number.
///
/// ```
/// # #[macro_use]
/// # extern crate recital;
/// # fn main() {
/// let a = version!(1, 2, 3);
/// let b = version!(1, 2, 3, vec![id!("abc"), id!(456)]);
/// let c = version!(1, 2, 3,
///                  vec![id!("abc"), id!(456)],
///                  vec![id!("def"), id!(789)]);
/// # }
/// ```
///
/// is the same as
///
/// ```
/// # #[macro_use]
/// # extern crate recital;
/// use recital::version::Version;
///
/// # fn main() {
/// let a = Version {
///     major: 1,
///     minor: 2,
///     patch: 3,
///     ..
///     Default::default()
/// };
/// let b = Version {
///     major: 1,
///     minor: 2,
///     patch: 3,
///     pre: vec![id!("abc"), id!(456)],
///     ..
///     Default::default()
/// };
/// let c = Version {
///     major: 1,
///     minor: 2,
///     patch: 3,
///     pre: vec![id!("abc"), id!(456)],
///     build: vec![id!("def"), id!(789)],
/// };
/// # }
/// ```
#[macro_export]
macro_rules! version {
    ($a:expr, $b:expr, $c:expr) => {
        {
            $crate::version::Version {
                major: $a,
                minor: $b,
                patch: $c,
                ..
                Default::default()
            }
        }
    };

    ($a:expr, $b:expr, $c:expr, $d:expr) => {
        {
            $crate::version::Version {
                major: $a,
                minor: $b,
                patch: $c,
                pre: $d,
                ..
                Default::default()
            }
        }
    };

    ($a:expr, $b:expr, $c:expr, $d:expr, $e:expr) => {
        {
            $crate::version::Version {
                major: $a,
                minor: $b,
                patch: $c,
                pre: $d,
                build: $e,
            }
        }
    };
}

#[cfg(test)]
mod tests {

    use super::Identifier::{Alpha, Number};
    use super::Version;

    // Verify that an identifier can be displayed.
    #[test]
    fn test_identifier_display() {
        assert_eq!("abc", format!("{}", Alpha("abc".to_string())));
        assert_eq!("123", format!("{}", Number(123)));
    }

    // Verify that default version values are minimal.
    #[test]
    fn test_version_default() {
        let a: Version = Default::default();
        let b = Version {
            major: 0,
            minor: 0,
            patch: 0,
            pre: Vec::new(),
            build: Vec::new(),
        };

        assert_eq!(a, b);
    }

    // Verify that the build identifiers can be cleared.
    #[test]
    fn test_version_clear_build() {
        let mut v = Version {
            major: 0,
            minor: 0,
            patch: 0,
            pre: Vec::new(),
            build: vec![Number(123)],
        };

        v.clear_build();

        assert!(v.build.is_empty());
    }

    // Verify that all of the identifiers can be cleared.
    #[test]
    fn test_version_clear_identifiers() {
        let mut v = Version {
            major: 0,
            minor: 0,
            patch: 0,
            pre: vec![Alpha("abc".to_string())],
            build: vec![Number(123)],
        };

        v.clear_identifiers();

        assert!(v.build.is_empty());
        assert!(v.pre.is_empty());
    }

    // Verify that the pre-release identifiers can be cleared.
    #[test]
    fn test_version_clear_pre() {
        let mut v = Version {
            major: 0,
            minor: 0,
            patch: 0,
            pre: vec![Number(123)],
            build: Vec::new(),
        };

        v.clear_pre();

        assert!(v.pre.is_empty());
    }

    // Verify version comparison conforms to spec.
    #[test]
    fn test_version_cmp_spec() {
        macro_rules! compare {
            ($a:expr) => {
                {
                    let mut offset = 1;

                    while offset < $a.len() {
                        assert!($a[offset - 1] < $a[offset],
                                "{} < {}",
                                $a[offset - 1],
                                $a[offset]);

                        offset += 1;
                    }
                }
            }
        }

        compare!(vec![version!(1, 0, 0), version!(2, 0, 0), version!(2, 1, 0)]);

        compare!(vec![version!(1, 0, 0, vec![id!("alpha")]), version!(1, 0, 0)]);

        compare!(vec![version!(1, 0, 0, vec![id!("alpha")]),
                      version!(1, 0, 0, vec![id!("alpha"), id!(1)]),
                      version!(1, 0, 0, vec![id!("alpha"), id!("beta")]),
                      version!(1, 0, 0, vec![id!("beta")]),
                      version!(1, 0, 0, vec![id!("beta"), id!(2)]),
                      version!(1, 0, 0, vec![id!("beta"), id!(11)]),
                      version!(1, 0, 0, vec![id!("rc"), id!(1)]),
                      version!(1, 0, 0)]);
    }

    // Verify that a version can be displayed.
    #[test]
    fn test_version_display() {
        let v = Version {
            major: 1,
            minor: 2,
            patch: 3,
            pre: vec![Alpha("abc".to_string()), Number(456)],
            build: vec![Alpha("def".to_string()), Number(789)],
        };

        assert_eq!("1.2.3-abc.456+def.789", format!("{}", v));
    }

    // Verify that the major version number can be incremented.
    #[test]
    fn test_version_increment_major() {
        let mut v = Version {
            major: 1,
            minor: 2,
            patch: 3,
            pre: vec![Alpha("abc".to_string()), Number(456)],
            build: vec![Alpha("def".to_string()), Number(789)],
        };

        v.increment_major();

        assert_eq!(2, v.major);
        assert_eq!(0, v.minor);
        assert_eq!(0, v.patch);
        assert!(v.pre.is_empty());
        assert!(v.build.is_empty());
    }

    // Verify that the minor version number can be incremented.
    #[test]
    fn test_version_increment_minor() {
        let mut v = Version {
            major: 1,
            minor: 2,
            patch: 3,
            pre: vec![Alpha("abc".to_string()), Number(456)],
            build: vec![Alpha("def".to_string()), Number(789)],
        };

        v.increment_minor();

        assert_eq!(1, v.major);
        assert_eq!(3, v.minor);
        assert_eq!(0, v.patch);
        assert!(v.pre.is_empty());
        assert!(v.build.is_empty());
    }

    // Verify that the patch version number can be incremented.
    #[test]
    fn test_version_increment_patch() {
        let mut v = Version {
            major: 1,
            minor: 2,
            patch: 3,
            pre: vec![Alpha("abc".to_string()), Number(456)],
            build: vec![Alpha("def".to_string()), Number(789)],
        };

        v.increment_patch();

        assert_eq!(1, v.major);
        assert_eq!(2, v.minor);
        assert_eq!(4, v.patch);
        assert!(v.pre.is_empty());
        assert!(v.build.is_empty());
    }

    // Verify that a stability check can be performed.
    #[test]
    fn test_version_is_stable() {
        let mut v = Version {
            major: 0,
            minor: 0,
            patch: 0,
            pre: Vec::new(),
            build: Vec::new(),
        };

        assert!(!v.is_stable());

        v.major = 1;

        assert!(v.is_stable());

        v.pre.push(Alpha("beta".to_string()));

        assert!(!v.is_stable());
    }

}
