[![Build Status](https://travis-ci.org/kherge/recital.svg?branch=master)](https://travis-ci.org/kherge/recital)
[![Crates.io](https://img.shields.io/crates/v/recital.svg)](https://crates.io/crates/recital)

Recital
=======

Create, parse, edit, and compare semantic version numbers.

Usage
-----

```rust
#[macro_use]
extern crate recital;

use recital::prelude::*;

fn main() {
    let installed: Version = "1.0.0-beta".parse();
    let published: Version = "1.3.4".parse();

    if published > installed {
        println("A new version is available: {}", published);
    }
}
```

Please refer to [the documentation](https://kherge.github.io/recital/) for the crate.

Installation
------------

Add it to your list of dependencies.

    "recital" = "0.3.0"

License
-------

Released under the MIT license.

