//! Create, parse, edit, and compare semantic version numbers.
//!
//! This library provides you with nearly everything you need to make use of
//! version numbers that are compatible with version 2.0.0 of the Semantic
//! Versioning specification. The specification is required reading if you do
//! not already know the rules and requirements for a semantic version number.
//! The specification is pretty small, so it shouldn't take too long!
//!
//! Specification
//! -------------
//!
//! You can find the specification at [semver.org][].
//!
//! [semver.org]: https://semver.org/
//!
//! Usage
//! -----
//!
//! The library tries to make working with semantic version numbers as simple
//! as possible. As a result of this effort, there is a lot of things you can
//! do with these numbers. This usage guide will cover high level stuff, so
//! you may want to read the documentation for the structures and traits that
//! are included for more advanced information.
//!
//! ### Creating
//!
//! ```
//! # #[macro_use]
//! # extern crate recital;
//! # use recital::*;
//! # fn main() {
//! let version = version!(1, 2, 3,
//!                        vec![id!("abc"), id!(456)],
//!                        vec![id!("def"), id!(789)]);
//! # }
//! ```
//!
//! ### Parsing
//!
//! ```
//! # use recital::*;
//! let version: Version = "1.2.3-abc.456+def.789".parse().unwrap();
//! ```
//!
//! ### Modifying
//!
//! ```
//! # use recital::*;
//! // Incrementing numbers.
//! let mut version = Version::new();
//!
//! // `1.1.1`
//! version.increment_major();
//! version.increment_minor();
//! version.increment_patch();
//! ```
//!
//! ### Comparing
//!
//! You can compare versions like you would any number.
//!
//! ```
//! # use recital::*;
//! let a: Version = "1.2.3-alpha".parse().unwrap();
//! let b: Version = "1.2.3".parse().unwrap();
//!
//! assert!(a < b);
//! assert!(!(a > b));
//! assert!(a != b);
//! ```

#[macro_use]
extern crate nom;

pub use version::*;

mod parser;

pub mod version;
