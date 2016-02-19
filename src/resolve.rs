use super::Version;

/// Defines how a constraint must be implemented.
pub trait Constraint {
    /// Checks if the given version number is allowed by this constraint.
    fn allows(&self, version: &Version) -> bool;
}

/// Represents a set of constraints.
pub enum Constraints {
    /// All constraints must be satisified.
    And(Vec<Box<Constraint>>),
    
    /// At least one constraint must be satisified.
    Or(Vec<Box<Constraint>>),
}

impl Constraint for Constraints {
    fn allows(&self, version: &Version) -> bool {
        match *self {
            Constraints::And(ref constraints) => {
                for constraint in constraints {
                    if !constraint.allows(&version) {
                        return false;
                    }
                }

                true
            },

            Constraints::Or(ref constraints) => {
                for constraint in constraints {
                    if constraint.allows(&version) {
                        return true;
                    }
                }

                false
            },
        }
    }
}

/// Creates a new set of constraints.
///
/// ```
/// # #[macro_use]
/// # extern crate recital;
/// # use recital::Constraints::*;
/// # use recital::Operation::*;
/// # fn main() {
/// let constraints = constraints!(And,
///                                Exactly(version!(1, 2, 3)),
///                                Exactly(version!(4, 5, 6)));
/// # }
/// ```
///
/// is the same as
///
/// ```
/// # #[macro_use]
/// # extern crate recital;
/// # use recital::Constraints::*;
/// # use recital::Operation::*;
/// # fn main() {
/// let constraints = And(vec![Box::new(Exactly(version!(1, 2, 3))),
///                            Box::new(Exactly(version!(4, 5, 6)))]);
/// # }
/// ```
#[macro_export]
macro_rules! constraints {
    ($a:ident, $($b:expr), *) => {
        {
            let mut constraints = Vec::<Box<$crate::Constraint>>::new();

            $(
                constraints.push(Box::new($b));
            )*

            $crate::Constraints::$a(constraints)
        }
    }
}

/// A version number constraint as an equality and inequality check.
pub enum Operation {
    /// Match the exact version number. (=)
    Exactly(Version),

    /// Exclude the exact version number. (!=)
    ExactlyNot(Version),

    /// Exclusively match any greater version number. (>)
    GreaterThan(Version),

    /// Inclusively match any greater version number. (>=)
    GreaterThanOrEqualTo(Version),

    /// Exclusively match any lesser version number. (<)
    LessThan(Version),

    /// Inclusively match any lesser version number. (<=)
    LessThanOrEqualTo(Version),
}

impl Constraint for Operation {
    fn allows(&self, version: &Version) -> bool {
        match *self {
            Operation::Exactly(ref base) => *base == *version,
            Operation::ExactlyNot(ref base) => *base != *version,
            Operation::GreaterThan(ref base) => *base < *version,
            Operation::GreaterThanOrEqualTo(ref base) => *base <= *version,
            Operation::LessThan(ref base) => *base > *version,
            Operation::LessThanOrEqualTo(ref base) => *base >= *version,
        }
    }
}

/// Resolves a set of constraints against a pool of version numbers.
///
/// This function will return a copy all of the version numbers that satisfy
/// the given set of constraints.
///
/// ```
/// # #[macro_use]
/// # extern crate recital;
/// # use recital::Constraints::*;
/// # use recital::Operation::*;
/// # use recital::resolve;
/// # fn main() {
/// let constraints = constraints!(And,
///                                GreaterThan(version!(1, 0, 1)),
///                                LessThan(version!(2, 0, 0)));
///
/// let pool = vec![version!(1, 0, 0),
///                 version!(1, 0, 1),
///                 version!(1, 0, 2),
///                 version!(1, 1, 0),
///                 version!(1, 1, 1),
///                 version!(1, 1, 2),
///                 version!(2, 0, 0)];
///
/// let versions = resolve(&pool, &constraints);
/// # }
/// ```
pub fn resolve(versions: &Vec<Version>, constraints: &Constraints) -> Vec<Version> {
    let mut allowed = Vec::new();

    for version in versions {
        if constraints.allows(&version) {
            allowed.push(version.clone());
        }
    }

    allowed
}

#[cfg(test)]
mod tests {

    use super::Constraint;
    use super::Operation::*;
    use super::resolve;

    #[test]
    fn test_exact() {
        assert!(Exactly(version!(1, 2, 3)).allows(&version!(1, 2, 3)));
        assert!(!Exactly(version!(1, 2, 3)).allows(&version!(4, 5, 6)));
    }

    #[test]
    fn test_exactly_not() {
        assert!(ExactlyNot(version!(1, 2, 3)).allows(&version!(1, 0, 0)));
        assert!(!ExactlyNot(version!(1, 2, 3)).allows(&version!(1, 2, 3)));
    }

    #[test]
    fn test_greater_than() {
        assert!(GreaterThan(version!(1, 2, 3)).allows(&version!(4, 5, 6)));
    }

    #[test]
    fn test_greater_than_or_equal_to() {
        assert!(GreaterThanOrEqualTo(version!(1, 2, 3))
                .allows(&version!(4, 5, 6)));

        assert!(GreaterThanOrEqualTo(version!(1, 2, 3))
                .allows(&version!(1, 2, 3)));
    }

    #[test]
    fn test_less_than() {
        assert!(LessThan(version!(1, 2, 3)).allows(&version!(1, 0, 0)));
    }

    #[test]
    fn test_less_than_or_equal_to() {
        assert!(LessThanOrEqualTo(version!(1, 2, 3))
                .allows(&version!(1, 0, 0)));

        assert!(LessThanOrEqualTo(version!(1, 2, 3))
                .allows(&version!(1, 2, 3)));
    }

    #[test]
    fn test_and() {
        let a = constraints!(And,
                             GreaterThanOrEqualTo(version!(1, 1, 0)),
                             LessThan(version!(1, 2, 0)));

        assert!(a.allows(&version!(1, 1, 1)));
        assert!(a.allows(&version!(1, 1, 999)));
    }

    #[test]
    fn test_or() {
        let a = constraints!(Or,
                             Exactly(version!(1, 1, 0)),
                             Exactly(version!(1, 2, 0)));

        assert!(a.allows(&version!(1, 1, 0)));
        assert!(a.allows(&version!(1, 2, 0)));
    }

    #[test]
    fn test_nested() {
        let a = constraints!(And,
                             GreaterThanOrEqualTo(version!(1, 2, 1)),
                             LessThan(version!(1, 5, 0)));

        let b = constraints!(And,
                             GreaterThan(version!(1, 5, 0)),
                             LessThan(version!(2, 0, 0)));

        let c = constraints!(Or, a, b);

        assert!(c.allows(&version!(1, 4, 5)));
        assert!(!c.allows(&version!(1, 5, 0)));
        assert!(c.allows(&version!(1, 9, 3)));
    }

    #[test]
    fn test_resolve() {
        let c = constraints!(And,
                             GreaterThan(version!(1, 2, 1)),
                             LessThan(version!(2, 0, 0)));

        let v = vec![version!(1, 2, 0),
                     version!(1, 2, 1),
                     version!(1, 3, 0),
                     version!(1, 3, 1),
                     version!(1, 4, 0),
                     version!(2, 0, 0),
                     version!(2, 0, 1),
                     version!(2, 1, 0)];

        assert_eq!(resolve(&v, &c),
                   vec![version!(1, 3, 0),
                        version!(1, 3, 1),
                        version!(1, 4, 0)]);
    }

}
