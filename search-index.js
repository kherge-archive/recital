var searchIndex = {};
searchIndex['recital'] = {"items":[[0,"","recital","Create, parse, edit, and compare semantic version numbers.",null,null],[0,"version","","Creates, parses, and manages semantic version numbers.",null,null],[3,"Version","recital::version","Represents a semantic version number.",null,null],[12,"major","","The major version number.",0,null],[12,"minor","","The minor version number.",0,null],[12,"patch","","The patch version number.",0,null],[12,"pre","","The pre-release identifiers.",0,null],[12,"build","","The build identifiers.",0,null],[4,"Identifier","","Represents an alphanumeric or numberic identifier.",null,null],[13,"Number","","Reprents a numeric identifier.",1,null],[13,"Alpha","","Represents an alphanumeric identifier.",1,null],[11,"partial_cmp","","",1,{"inputs":[{"name":"identifier"},{"name":"identifier"}],"output":{"name":"option"}}],[11,"lt","","",1,{"inputs":[{"name":"identifier"},{"name":"identifier"}],"output":{"name":"bool"}}],[11,"le","","",1,{"inputs":[{"name":"identifier"},{"name":"identifier"}],"output":{"name":"bool"}}],[11,"gt","","",1,{"inputs":[{"name":"identifier"},{"name":"identifier"}],"output":{"name":"bool"}}],[11,"ge","","",1,{"inputs":[{"name":"identifier"},{"name":"identifier"}],"output":{"name":"bool"}}],[11,"eq","","",1,{"inputs":[{"name":"identifier"},{"name":"identifier"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"identifier"},{"name":"identifier"}],"output":{"name":"bool"}}],[11,"cmp","","",1,{"inputs":[{"name":"identifier"},{"name":"identifier"}],"output":{"name":"ordering"}}],[11,"fmt","","",1,{"inputs":[{"name":"identifier"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"identifier"}],"output":{"name":"identifier"}}],[11,"fmt","","",1,{"inputs":[{"name":"identifier"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",1,{"inputs":[{"name":"identifier"},{"name":"str"}],"output":{"name":"identifier"}}],[11,"from","","",1,{"inputs":[{"name":"identifier"},{"name":"string"}],"output":{"name":"identifier"}}],[11,"from","","",1,{"inputs":[{"name":"identifier"},{"name":"f32"}],"output":{"name":"identifier"}}],[11,"from","","",1,{"inputs":[{"name":"identifier"},{"name":"f64"}],"output":{"name":"identifier"}}],[11,"from","","",1,{"inputs":[{"name":"identifier"},{"name":"i8"}],"output":{"name":"identifier"}}],[11,"from","","",1,{"inputs":[{"name":"identifier"},{"name":"i16"}],"output":{"name":"identifier"}}],[11,"from","","",1,{"inputs":[{"name":"identifier"},{"name":"i32"}],"output":{"name":"identifier"}}],[11,"from","","",1,{"inputs":[{"name":"identifier"},{"name":"i64"}],"output":{"name":"identifier"}}],[11,"from","","",1,{"inputs":[{"name":"identifier"},{"name":"u8"}],"output":{"name":"identifier"}}],[11,"from","","",1,{"inputs":[{"name":"identifier"},{"name":"u16"}],"output":{"name":"identifier"}}],[11,"from","","",1,{"inputs":[{"name":"identifier"},{"name":"u32"}],"output":{"name":"identifier"}}],[11,"from","","",1,{"inputs":[{"name":"identifier"},{"name":"u64"}],"output":{"name":"identifier"}}],[11,"fmt","","",0,{"inputs":[{"name":"version"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"version"}],"output":{"name":"version"}}],[11,"default","","",0,{"inputs":[{"name":"version"}],"output":{"name":"version"}}],[11,"fmt","","",0,{"inputs":[{"name":"version"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cmp","","",0,{"inputs":[{"name":"version"},{"name":"version"}],"output":{"name":"ordering"}}],[11,"eq","","",0,{"inputs":[{"name":"version"},{"name":"version"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"version"},{"name":"version"}],"output":{"name":"option"}}],[11,"clear_build","","Removes all of the build identifiers.",0,{"inputs":[{"name":"version"}],"output":null}],[11,"clear_identifiers","","Removes all of the pre-release and build identifiers.",0,{"inputs":[{"name":"version"}],"output":null}],[11,"clear_pre","","Removes all of the pre-release identifiers.",0,{"inputs":[{"name":"version"}],"output":null}],[11,"increment_major","","Increments the major version number.",0,{"inputs":[{"name":"version"}],"output":null}],[11,"increment_minor","","Increments the minor version number.",0,{"inputs":[{"name":"version"}],"output":null}],[11,"increment_patch","","Increments the patch version number.",0,{"inputs":[{"name":"version"}],"output":null}],[11,"is_stable","","Checks if the version number is stable.",0,{"inputs":[{"name":"version"}],"output":{"name":"bool"}}],[11,"new","","Creates a new version number with default values.",0,{"inputs":[{"name":"version"}],"output":{"name":"version"}}],[11,"from_str","","",0,{"inputs":[{"name":"version"},{"name":"str"}],"output":{"name":"result"}}],[0,"prelude","recital","Re-exports submodules for glob imports.",null,null],[0,"resolve","","Creates and applies constraints for semantic version numbers.",null,null],[4,"Constraints","recital::resolve","Represents a set of constraints.",null,null],[13,"And","","All constraints must be satisified.",2,null],[13,"Or","","At least one constraint must be satisified.",2,null],[4,"Operation","","A version number constraint as an equality and inequality check.",null,null],[13,"Exactly","","Match the exact version number. (=)",3,null],[13,"ExactlyNot","","Exclude the exact version number. (!=)",3,null],[13,"GreaterThan","","Exclusively match any greater version number. (>)",3,null],[13,"GreaterThanOrEqualTo","","Inclusively match any greater version number. (>=)",3,null],[13,"LessThan","","Exclusively match any lesser version number. (<)",3,null],[13,"LessThanOrEqualTo","","Inclusively match any lesser version number. (<=)",3,null],[5,"resolve","","Resolves a set of constraints against a pool of version numbers.",null,{"inputs":[{"name":"vec"},{"name":"constraints"}],"output":{"name":"vec"}}],[8,"Constraint","","Defines how a constraint must be implemented.",null,null],[10,"allows","","Checks if the given version number satisifies this constraint.",4,{"inputs":[{"name":"constraint"},{"name":"version"}],"output":{"name":"bool"}}],[11,"allows","","",2,{"inputs":[{"name":"constraints"},{"name":"version"}],"output":{"name":"bool"}}],[11,"allows","","",3,{"inputs":[{"name":"operation"},{"name":"version"}],"output":{"name":"bool"}}],[14,"id!","recital","Creates a new identifier.",null,null],[14,"version!","","Creates a new version number.",null,null],[14,"constraints!","","Creates a new set of constraints.",null,null]],"paths":[[3,"Version"],[4,"Identifier"],[4,"Constraints"],[4,"Operation"],[8,"Constraint"]]};
searchIndex['nom'] = {"items":[[0,"","nom","nom, eating data byte by byte",null,null],[3,"ProducerRepeat","","ProducerRepeat takes a single value, and generates it at each step",null,null],[3,"MemProducer","","A MemProducer generates values from an in memory byte buffer",null,null],[3,"FileProducer","","",null,null],[3,"MapConsumer","","MapConsumer takes a function S -> T and applies it on a consumer producing values of type S",null,null],[3,"ChainConsumer","","ChainConsumer takes a consumer C1 R -> S, and a consumer C2 S -> T, and makes a consumer R -> T by applying C2 on C1's result",null,null],[4,"ErrorKind","","indicates which parser returned an error",null,null],[13,"Custom","","",0,null],[13,"Tag","","",0,null],[13,"MapRes","","",0,null],[13,"MapOpt","","",0,null],[13,"Alt","","",0,null],[13,"IsNot","","",0,null],[13,"IsA","","",0,null],[13,"SeparatedList","","",0,null],[13,"SeparatedNonEmptyList","","",0,null],[13,"Many1","","",0,null],[13,"Count","","",0,null],[13,"TakeUntilAndConsume","","",0,null],[13,"TakeUntil","","",0,null],[13,"TakeUntilEitherAndConsume","","",0,null],[13,"TakeUntilEither","","",0,null],[13,"LengthValue","","",0,null],[13,"TagClosure","","",0,null],[13,"Alpha","","",0,null],[13,"Digit","","",0,null],[13,"HexDigit","","",0,null],[13,"AlphaNumeric","","",0,null],[13,"Space","","",0,null],[13,"MultiSpace","","",0,null],[13,"LengthValueFn","","",0,null],[13,"Eof","","",0,null],[13,"ExprOpt","","",0,null],[13,"ExprRes","","",0,null],[13,"CondReduce","","",0,null],[13,"Switch","","",0,null],[13,"TagBits","","",0,null],[13,"OneOf","","",0,null],[13,"NoneOf","","",0,null],[13,"Char","","",0,null],[13,"CrLf","","",0,null],[13,"RegexpMatch","","",0,null],[13,"RegexpMatches","","",0,null],[13,"RegexpFind","","",0,null],[13,"RegexpCapture","","",0,null],[13,"RegexpCaptures","","",0,null],[13,"TakeWhile1","","",0,null],[13,"Complete","","",0,null],[13,"Fix","","",0,null],[13,"Escaped","","",0,null],[13,"EscapedTransform","","",0,null],[13,"TagStr","","",0,null],[13,"IsNotStr","","",0,null],[13,"IsAStr","","",0,null],[13,"TakeWhile1Str","","",0,null],[13,"NonEmpty","","",0,null],[13,"ManyMN","","",0,null],[13,"TakeUntilAndConsumeStr","","",0,null],[13,"TakeUntilStr","","",0,null],[4,"Err","","Contains the error that a parser can return",null,null],[13,"Code","","An error code, represented by an ErrorKind, which can contain a custom error code represented by E",1,null],[13,"Node","","An error code, and the next error",1,null],[13,"Position","","An error code, and the input position",1,null],[13,"NodePosition","","An error code, the input position and the next error",1,null],[4,"Needed","","Contains information on needed data if a parser returned `Incomplete`",null,null],[13,"Unknown","","needs more data, but we do not know how much",2,null],[13,"Size","","contains the required data size",2,null],[4,"IResult","","Holds the result of parsing functions",null,null],[13,"Done","","indicates a correct parsing, the first field containing the rest of the unparsed data, the second field contains the parsed data",3,null],[13,"Error","","contains a Err, an enum that can indicate an error code, a position in the input, and a pointer to another error, making a list of errors in the parsing tree",3,null],[13,"Incomplete","","Incomplete contains a Needed, an enum than can represent a known quantity of input data, or unknown",3,null],[4,"Input","","",null,null],[13,"Element","","",4,null],[13,"Empty","","",4,null],[13,"Eof","","",4,null],[4,"ConsumerState","","Stores a consumer's current computation state",null,null],[13,"Done","","A value of type O has been produced",5,null],[13,"Error","","An error of type E has been encountered",5,null],[13,"Continue","","Continue applying, and pass a message of type M to the data source",5,null],[4,"Move","","",null,null],[13,"Consume","","indcates how much data was consumed",6,null],[13,"Seek","","indicates where in the input the consumer must seek",6,null],[13,"Await","","indicates more data is needed",6,null],[4,"FileProducerState","","",null,null],[13,"Normal","","",7,null],[13,"Error","","",7,null],[13,"Eof","","",7,null],[5,"error_to_list","","",null,{"inputs":[{"name":"err"}],"output":{"name":"vec"}}],[5,"compare_error_paths","","",null,{"inputs":[{"name":"err"},{"name":"err"}],"output":{"name":"bool"}}],[5,"add_error_pattern","","",null,{"inputs":[{"name":"hashmap"},{"name":"iresult"},{"name":"str"}],"output":{"name":"bool"}}],[5,"slice_to_offsets","","",null,null],[5,"prepare_errors","","",null,null],[5,"print_error","","",null,null],[5,"generate_colors","","",null,null],[5,"code_from_offset","","",null,null],[5,"reset_color","","",null,{"inputs":[{"name":"vec"}],"output":null}],[5,"write_color","","",null,{"inputs":[{"name":"vec"},{"name":"u8"}],"output":null}],[5,"print_codes","","",null,{"inputs":[{"name":"hashmap"},{"name":"hashmap"}],"output":{"name":"string"}}],[5,"print_offsets","","",null,null],[5,"error_to_u32","","",null,{"inputs":[{"name":"errorkind"}],"output":{"name":"u32"}}],[5,"tag_cl","","",null,null],[5,"print","","",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"begin","","",null,null],[5,"not_line_ending","","",null,null],[5,"line_ending","","Recognizes a line feed",null,null],[5,"is_alphabetic","","",null,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[5,"is_digit","","",null,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[5,"is_hex_digit","","",null,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[5,"is_alphanumeric","","",null,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[5,"is_space","","",null,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[5,"alpha","","Recognizes lowercase and uppercase alphabetic characters: a-zA-Z",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"digit","","Recognizes numerical characters: 0-9",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"hex_digit","","Recognizes hexadecimal numerical characters: 0-9, A-F, a-f",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"alphanumeric","","Recognizes numerical and alphabetic characters: 0-9a-zA-Z",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"space","","Recognizes spaces and tabs",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"multispace","","Recognizes spaces, tabs, carriage returns and line feeds",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"sized_buffer","","",null,null],[5,"length_value","","",null,null],[5,"be_u8","","Recognizes an unsigned 1 byte integer (equivalent to take!(1)",null,null],[5,"be_u16","","Recognizes big endian unsigned 2 bytes integer",null,null],[5,"be_u32","","Recognizes big endian unsigned 4 bytes integer",null,null],[5,"be_u64","","Recognizes big endian unsigned 8 bytes integer",null,null],[5,"be_i8","","Recognizes a signed 1 byte integer (equivalent to take!(1)",null,null],[5,"be_i16","","Recognizes big endian signed 2 bytes integer",null,null],[5,"be_i32","","Recognizes big endian signed 4 bytes integer",null,null],[5,"be_i64","","Recognizes big endian signed 8 bytes integer",null,null],[5,"le_u8","","Recognizes an unsigned 1 byte integer (equivalent to take!(1)",null,null],[5,"le_u16","","Recognizes little endian unsigned 2 bytes integer",null,null],[5,"le_u32","","Recognizes little endian unsigned 4 bytes integer",null,null],[5,"le_u64","","Recognizes little endian unsigned 8 bytes integer",null,null],[5,"le_i8","","Recognizes a signed 1 byte integer (equivalent to take!(1)",null,null],[5,"le_i16","","Recognizes little endian signed 2 bytes integer",null,null],[5,"le_i32","","Recognizes little endian signed 4 bytes integer",null,null],[5,"le_i64","","Recognizes little endian signed 8 bytes integer",null,null],[5,"be_f32","","Recognizes big endian 4 bytes floating point number",null,null],[5,"be_f64","","Recognizes big endian 8 bytes floating point number",null,null],[5,"hex_u32","","Recognizes a hex-encoded integer",null,null],[5,"eof","","Recognizes empty input buffers",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"non_empty","","Recognizes non empty buffers",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"rest","","Return the remaining input.",null,null],[5,"newline","","",null,null],[5,"crlf","","",null,null],[5,"eol","","",null,null],[5,"tab","","",null,null],[5,"anychar","","",null,null],[5,"shift","","",null,null],[11,"clone","","",0,{"inputs":[{"name":"errorkind"}],"output":{"name":"errorkind"}}],[11,"hash","","",0,null],[11,"eq","","",0,{"inputs":[{"name":"errorkind"},{"name":"errorkind"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"errorkind"},{"name":"errorkind"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"errorkind"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"err"}],"output":{"name":"err"}}],[11,"eq","","",1,{"inputs":[{"name":"err"},{"name":"err"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"err"},{"name":"err"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"err"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"needed"}],"output":{"name":"needed"}}],[11,"eq","","",2,{"inputs":[{"name":"needed"},{"name":"needed"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"needed"},{"name":"needed"}],"output":{"name":"bool"}}],[11,"fmt","","",2,{"inputs":[{"name":"needed"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"iresult"}],"output":{"name":"iresult"}}],[11,"eq","","",3,{"inputs":[{"name":"iresult"},{"name":"iresult"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"iresult"},{"name":"iresult"}],"output":{"name":"bool"}}],[11,"fmt","","",3,{"inputs":[{"name":"iresult"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"is_done","","",3,{"inputs":[{"name":"iresult"}],"output":{"name":"bool"}}],[11,"is_err","","",3,{"inputs":[{"name":"iresult"}],"output":{"name":"bool"}}],[11,"is_incomplete","","",3,{"inputs":[{"name":"iresult"}],"output":{"name":"bool"}}],[11,"remaining_input","","",3,{"inputs":[{"name":"iresult"}],"output":{"name":"option"}}],[11,"remaining_input","","",3,{"inputs":[{"name":"iresult"}],"output":{"name":"option"}}],[11,"remaining_input","","",3,{"inputs":[{"name":"iresult"}],"output":{"name":"option"}}],[11,"output","","",3,{"inputs":[{"name":"iresult"}],"output":{"name":"option"}}],[11,"output","","",3,{"inputs":[{"name":"iresult"}],"output":{"name":"option"}}],[11,"output","","",3,{"inputs":[{"name":"iresult"}],"output":{"name":"option"}}],[11,"clone","","",4,{"inputs":[{"name":"input"}],"output":{"name":"input"}}],[11,"fmt","","",4,{"inputs":[{"name":"input"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"consumerstate"}],"output":{"name":"consumerstate"}}],[11,"fmt","","",5,{"inputs":[{"name":"consumerstate"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"map","","",5,{"inputs":[{"name":"consumerstate"},{"name":"f"}],"output":{"name":"consumerstate"}}],[11,"flat_map","","",5,{"inputs":[{"name":"consumerstate"},{"name":"f"}],"output":{"name":"consumerstate"}}],[11,"apply","","",8,{"inputs":[{"name":"producerrepeat"},{"name":"consumer"}],"output":{"name":"consumerstate"}}],[11,"new","","",9,null],[11,"eq","","",6,{"inputs":[{"name":"move"},{"name":"move"}],"output":{"name":"bool"}}],[11,"ne","","",6,{"inputs":[{"name":"move"},{"name":"move"}],"output":{"name":"bool"}}],[11,"clone","","",6,{"inputs":[{"name":"move"}],"output":{"name":"move"}}],[11,"fmt","","",6,{"inputs":[{"name":"move"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"apply","","",9,{"inputs":[{"name":"memproducer"},{"name":"consumer"}],"output":{"name":"consumerstate"}}],[11,"eq","","",7,{"inputs":[{"name":"fileproducerstate"},{"name":"fileproducerstate"}],"output":{"name":"bool"}}],[11,"ne","","",7,{"inputs":[{"name":"fileproducerstate"},{"name":"fileproducerstate"}],"output":{"name":"bool"}}],[11,"clone","","",7,{"inputs":[{"name":"fileproducerstate"}],"output":{"name":"fileproducerstate"}}],[11,"fmt","","",7,{"inputs":[{"name":"fileproducerstate"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",10,{"inputs":[{"name":"fileproducer"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",10,{"inputs":[{"name":"fileproducer"},{"name":"str"},{"name":"usize"}],"output":{"name":"result"}}],[11,"state","","",10,{"inputs":[{"name":"fileproducer"}],"output":{"name":"fileproducerstate"}}],[11,"refill","","",10,{"inputs":[{"name":"fileproducer"}],"output":{"name":"option"}}],[11,"resize","","Resize the internal buffer, copy the data to the new one and returned how much data was copied",10,{"inputs":[{"name":"fileproducer"},{"name":"usize"}],"output":{"name":"usize"}}],[11,"apply","","",10,{"inputs":[{"name":"fileproducer"},{"name":"consumer"}],"output":{"name":"consumerstate"}}],[11,"new","","",11,{"inputs":[{"name":"mapconsumer"},{"name":"c"},{"name":"f"}],"output":{"name":"mapconsumer"}}],[11,"handle","","",11,{"inputs":[{"name":"mapconsumer"},{"name":"input"}],"output":{"name":"consumerstate"}}],[11,"state","","",11,{"inputs":[{"name":"mapconsumer"}],"output":{"name":"consumerstate"}}],[11,"new","","",12,{"inputs":[{"name":"chainconsumer"},{"name":"c1"},{"name":"c2"}],"output":{"name":"chainconsumer"}}],[11,"handle","","",12,{"inputs":[{"name":"chainconsumer"},{"name":"input"}],"output":{"name":"consumerstate"}}],[11,"state","","",12,{"inputs":[{"name":"chainconsumer"}],"output":{"name":"consumerstate"}}],[8,"HexDisplay","","useful functions to calculate the offset between slices and show a hexdump of a slice",null,null],[10,"offset","","offset between the first byte of self and the first byte of the argument",13,null],[10,"to_hex","","Converts the value of `self` to a hex dump, returning the owned\nstring.",13,{"inputs":[{"name":"hexdisplay"},{"name":"usize"}],"output":{"name":"string"}}],[10,"to_hex_from","","Converts the value of `self` to a hex dump beginning at `from` address, returning the owned\nstring.",13,{"inputs":[{"name":"hexdisplay"},{"name":"usize"},{"name":"usize"}],"output":{"name":"string"}}],[8,"InputLength","","",null,null],[10,"input_len","","",14,{"inputs":[{"name":"inputlength"}],"output":{"name":"usize"}}],[8,"AsChar","","",null,null],[10,"as_char","","",15,{"inputs":[{"name":"aschar"}],"output":{"name":"char"}}],[10,"is_alpha","","",15,{"inputs":[{"name":"aschar"}],"output":{"name":"bool"}}],[10,"is_alphanum","","",15,{"inputs":[{"name":"aschar"}],"output":{"name":"bool"}}],[10,"is_0_to_9","","",15,{"inputs":[{"name":"aschar"}],"output":{"name":"bool"}}],[10,"is_hex_digit","","",15,{"inputs":[{"name":"aschar"}],"output":{"name":"bool"}}],[8,"IterIndices","","",null,null],[16,"Item","","",16,null],[16,"Iter","","",16,null],[10,"iter_indices","","",16,{"inputs":[{"name":"iterindices"}],"output":{"name":"iter"}}],[8,"AsBytes","","",null,null],[10,"as_bytes","","",17,null],[8,"GetInput","","",null,null],[10,"remaining_input","","",18,{"inputs":[{"name":"getinput"}],"output":{"name":"option"}}],[8,"GetOutput","","",null,null],[10,"output","","",19,{"inputs":[{"name":"getoutput"}],"output":{"name":"option"}}],[8,"Consumer","","The Consumer trait wraps a computation and its state",null,null],[10,"handle","","implement handle for the current computation, returning the new state of the consumer",20,{"inputs":[{"name":"consumer"},{"name":"input"}],"output":{"name":"consumerstate"}}],[10,"state","","returns the current state",20,{"inputs":[{"name":"consumer"}],"output":{"name":"consumerstate"}}],[8,"Producer","","The producer wraps a data source, like file or network, and applies a consumer on it",null,null],[10,"apply","","Applies a consumer once on the produced data, and return the consumer's state",21,{"inputs":[{"name":"producer"},{"name":"consumer"}],"output":{"name":"consumerstate"}}],[11,"run","","Applies a consumer once on the produced data, and returns the generated value if there is one",21,{"inputs":[{"name":"producer"},{"name":"consumer"}],"output":{"name":"option"}}],[14,"dbg!","","Prints a message if the parser fails",null,null],[14,"dbg_dmp!","","Prints a message and the input if the parser fails",null,null],[14,"closure!","","Wraps a parser in a closure",null,null],[14,"named!","","Makes a function from a parser combination",null,null],[14,"call!","","Used to wrap common expressions and function as macros",null,null],[14,"apply!","","emulate function currying: `apply!(my_function, arg1, arg2, ...)` becomes `my_function(input, arg1, arg2, ...)`",null,null],[14,"error!","","Prevents backtracking if the child parser fails",null,null],[14,"add_error!","","Add an error if the child parser fails",null,null],[14,"fix_error!","","translate parser result from IResult<I,O,u32> to IResult<I,O,E> woth a custom type",null,null],[14,"complete!","","replaces a `Incomplete` returned by the child parser\nwith an `Error`",null,null],[14,"try_parse!","","A bit like `std::try!`, this macro will return the remaining input and parsed value if the child parser returned `Done`,\nand will do an early return for `Error` and `Incomplete`\nthis can provide more flexibility than `chain!` if needed",null,null],[14,"flat_map!","","`flat_map!(R -> IResult<R,S>, S -> IResult<S,T>) => R -> IResult<R, T>`",null,null],[14,"map!","","`map!(I -> IResult<I,O>, O -> P) => I -> IResult<I, P>`\nmaps a function on the result of a parser",null,null],[14,"map_res!","","`map_res!(I -> IResult<I,O>, O -> Result<P>) => I -> IResult<I, P>`\nmaps a function returning a Result on the output of a parser",null,null],[14,"map_opt!","","`map_opt!(I -> IResult<I,O>, O -> Option<P>) => I -> IResult<I, P>`\nmaps a function returning an Option on the output of a parser",null,null],[14,"value!","","`value!(T, R -> IResult<R, S> ) => R -> IResult<R, T>`",null,null],[14,"expr_res!","","`expr_res!(Result<E,O>) => I -> IResult<I, O>`\nevaluate an expression that returns a Result<T,E> and returns a IResult::Done(I,T) if Ok",null,null],[14,"expr_opt!","","`expr_opt!(Option<O>) => I -> IResult<I, O>`\nevaluate an expression that returns a Option<T> and returns a IResult::Done(I,T) if Ok",null,null],[14,"chain!","","`chain!(I->IResult<I,A> ~ I->IResult<I,B> ~ ... I->IResult<I,X> , || { return O } ) => I -> IResult<I, O>`\nchains parsers and assemble the results through a closure",null,null],[14,"tuple!","","`tuple!(I->IResult<I,A>, I->IResult<I,B>, ... I->IResult<I,X>) => I -> IResult<I, (A, B, ..., X)>`\nchains parsers and assemble the sub results in a tuple.",null,null],[14,"alt!","","`alt!(I -> IResult<I,O> | I -> IResult<I,O> | ... | I -> IResult<I,O> ) => I -> IResult<I, O>`\ntry a list of parsers, return the result of the first successful one",null,null],[14,"alt_complete!","","This is a combination of the `alt!` and `complete!` combinators. Rather\nthan returning `Incomplete` on partial input, `alt_complete!` will try the\nnext alternative in the chain. You should use this only if you know you\nwill not receive partial input for the rules you're trying to match (this\nis almost always the case for parsing programming languages).",null,null],[14,"switch!","","`switch!(I -> IResult<I,P>, P => I -> IResult<I,O> | ... | P => I -> IResult<I,O> ) => I -> IResult<I, O>`\nchoose the next parser depending on the result of the first one, if successful,\nand returns the result of the second parser",null,null],[14,"opt!","","`opt!(I -> IResult<I,O>) => I -> IResult<I, Option<O>>`\nmake the underlying parser optional",null,null],[14,"opt_res!","","`opt_res!(I -> IResult<I,O>) => I -> IResult<I, Result<nom::Err,O>>`\nmake the underlying parser optional",null,null],[14,"cond!","","`cond!(bool, I -> IResult<I,O>) => I -> IResult<I, Option<O>>`\nConditional combinator",null,null],[14,"cond_reduce!","","`cond_reduce!(bool, I -> IResult<I,O>) => I -> IResult<I, O>`\nConditional combinator with error",null,null],[14,"peek!","","`peek!(I -> IResult<I,O>) => I -> IResult<I, O>`\nreturns a result without consuming the input",null,null],[14,"tap!","","`tap!(name: I -> IResult<I,O> => { block }) => I -> IResult<I, O>`\nallows access to the parser's result without affecting it",null,null],[14,"pair!","","`pair!(I -> IResult<I,O>, I -> IResult<I,P>) => I -> IResult<I, (O,P)>`\npair(X,Y), returns (x,y)",null,null],[14,"separated_pair!","","`separated_pair!(I -> IResult<I,O>, I -> IResult<I, T>, I -> IResult<I,P>) => I -> IResult<I, (O,P)>`\nseparated_pair(X,sep,Y) returns (x,y)",null,null],[14,"preceded!","","`preceded!(I -> IResult<I,T>, I -> IResult<I,O>) => I -> IResult<I, O>`\npreceded(opening, X) returns X",null,null],[14,"terminated!","","`terminated!(I -> IResult<I,O>, I -> IResult<I,T>) => I -> IResult<I, O>`\nterminated(X, closing) returns X",null,null],[14,"delimited!","","`delimited!(I -> IResult<I,T>, I -> IResult<I,O>, I -> IResult<I,U>) => I -> IResult<I, O>`\ndelimited(opening, X, closing) returns X",null,null],[14,"separated_list!","","`separated_list!(I -> IResult<I,T>, I -> IResult<I,O>) => I -> IResult<I, Vec<O>>`\nseparated_list(sep, X) returns Vec<X>",null,null],[14,"separated_nonempty_list!","","`separated_nonempty_list!(I -> IResult<I,T>, I -> IResult<I,O>) => I -> IResult<I, Vec<O>>`\nseparated_nonempty_list(sep, X) returns Vec<X>",null,null],[14,"many0!","","`many0!(I -> IResult<I,O>) => I -> IResult<I, Vec<O>>`\nApplies the parser 0 or more times and returns the list of results in a Vec",null,null],[14,"many1!","","`many1!(I -> IResult<I,O>) => I -> IResult<I, Vec<O>>`\nApplies the parser 1 or more times and returns the list of results in a Vec",null,null],[14,"many_m_n!","","`many_m_n!(usize, usize, I -> IResult<I,O>) => I -> IResult<I, Vec<O>>`\nApplies the parser between m and n times (n included) and returns the list of results in a Vec",null,null],[14,"count!","","`count!(I -> IResult<I,O>, nb) => I -> IResult<I, Vec<O>>`\nApplies the child parser a specified number of times",null,null],[14,"count_fixed!","","`count_fixed!(O, I -> IResult<I,O>, nb) => I -> IResult<I, [O; nb]>`\nApplies the child parser a fixed number of times and returns a fixed size array\nThe type must be specified and it must be `Copy`",null,null],[14,"length_value!","","`length_value!(I -> IResult<I, nb>, I -> IResult<I,O>) => I -> IResult<I, Vec<O>>`\ngets a number from the first parser, then applies the second parser that many times",null,null],[14,"method!","","Makes a method from a parser combination",null,null],[14,"call_m!","","Used to called methods then move self back into self",null,null],[14,"apply_rf!","","emulate function currying for method calls on structs\n`apply!(self.my_function, arg1, arg2, ...)` becomes `self.my_function(input, arg1, arg2, ...)`",null,null],[14,"recognize!","","`recognize!(&[T] -> IResult<&[T], O> ) => &[T] -> IResult<&[T], &[T]>`\nif the child parser was successful, return the consumed input as produced value",null,null],[14,"tag!","","`tag!(&[T]: nom::AsBytes) => &[T] -> IResult<&[T], &[T]>`\ndeclares a byte array as a suite to recognize",null,null],[14,"is_not!","","`is_not!(&[T:AsBytes]) => &[T] -> IResult<&[T], &[T]>`\nreturns the longest list of bytes that do not appear in the provided array",null,null],[14,"is_a!","","`is_a!(&[T]) => &[T] -> IResult<&[T], &[T]>`\nreturns the longest list of bytes that appear in the provided array",null,null],[14,"escaped!","","`escaped!(&[T] -> IResult<&[T], &[T]>, T, &[T] -> IResult<&[T], &[T]>) => &[T] -> IResult<&[T], &[T]>`\nmatches a byte string with escaped characters.",null,null],[14,"escaped_transform!","","`escaped_transform!(&[T] -> IResult<&[T], &[T]>, T, &[T] -> IResult<&[T], &[T]>) => &[T] -> IResult<&[T], Vec<T>>`\nmatches a byte string with escaped characters.",null,null],[14,"take_while!","","`take_while!(T -> bool) => &[T] -> IResult<&[T], &[T]>`\nreturns the longest list of bytes until the provided function fails.",null,null],[14,"take_while1!","","`take_while1!(&[T] -> bool) => &[T] -> IResult<&[T], &[T]>`\nreturns the longest (non empty) list of bytes until the provided function fails.",null,null],[14,"take_till!","","`take_till!(T -> bool) => &[T] -> IResult<&[T], &[T]>`\nreturns the longest list of bytes until the provided function succeeds",null,null],[14,"take!","","`take!(nb) => &[T] -> IResult<&[T], &[T]>`\ngenerates a parser consuming the specified number of bytes",null,null],[14,"take_str!","","`take!(nb) => &[T] -> IResult<&[T], &str>`\nsame as take! but returning a &str",null,null],[14,"take_until_and_consume!","","`take_until_and_consume!(tag) => &[T] -> IResult<&[T], &[T]>`\ngenerates a parser consuming bytes until the specified byte sequence is found, and consumes it",null,null],[14,"take_until!","","`take_until!(tag) => &[T] -> IResult<&[T], &[T]>`\nconsumes data until it finds the specified tag",null,null],[14,"take_until_either_and_consume!","","`take_until_either_and_consume!(tag) => &[T] -> IResult<&[T], &[T]>`\nconsumes data until it finds any of the specified characters, and consume it",null,null],[14,"take_until_either!","","`take_until_either!(tag) => &[T] -> IResult<&[T], &[T]>`",null,null],[14,"length_bytes!","","`length_bytes!(&[T] -> IResult<&[T], nb>) => &[T] -> IResult<&[T], &[T]>\ngets a number from the first parser, then extracts that many bytes from the\nremaining stream",null,null],[14,"bits!","","`bits!( parser ) => ( &[u8], (&[u8], usize) -> IResult<(&[u8], usize), T> ) -> IResult<&[u8], T>`\ntransforms its byte slice input in a bit stream for the underlying parsers",null,null],[14,"take_bits!","","`take_bits!(type, nb) => ( (&[T], usize), U, usize) -> IResult<(&[T], usize), U>`\ngenerates a parser consuming the specified number of bytes",null,null],[14,"tag_bits!","","matches an integer pattern to a bitstream. The number of bits of the input to compare must be specified",null,null],[14,"u16!","","if parameter is true, parse a big endian u16 integer,\notherwise a little endian u16 integer",null,null],[14,"u32!","","if parameter is true, parse a big endian u32 integer,\notherwise a little endian u32 integer",null,null],[14,"u64!","","if parameter is true, parse a big endian u64 integer,\notherwise a little endian u64 integer",null,null],[14,"i16!","","if parameter is true, parse a big endian i16 integer,\notherwise a little endian i16 integer",null,null],[14,"i32!","","if parameter is true, parse a big endian i32 integer,\notherwise a little endian i32 integer",null,null],[14,"i64!","","if parameter is true, parse a big endian i64 integer,\notherwise a little endian i64 integer",null,null],[14,"one_of!","","matches one of the provided characters",null,null],[14,"none_of!","","matches anything but the provided characters",null,null],[14,"char!","","matches one character: `char!(char) => &[u8] -> IResult<&[u8], char>",null,null],[14,"consumer_from_parser!","","",null,null],[14,"tag_s!","","`tag_s!(&str) => &str -> IResult<&str, &str>`\ndeclares a string as a suite to recognize",null,null],[14,"take_s!","","`take_s!(nb) => &str -> IResult<&str, &str>`\ngenerates a parser consuming the specified number of characters",null,null],[14,"is_not_s!","","`is_not_s!(&str) => &str -> IResult<&str, &str>`\nreturns the longest list of characters that do not appear in the provided array",null,null],[14,"is_a_s!","","`is_a_s!(&str) => &str -> IResult<&str, &str>`\nreturns the longest list of characters that appear in the provided array",null,null],[14,"take_while_s!","","`take_while_s!(char -> bool) => &str -> IResult<&str, &str>`\nreturns the longest list of characters until the provided function fails.",null,null],[14,"take_while1_s!","","`take_while1_s!(char -> bool) => &str -> IResult<&str, &str>`\nreturns the longest (non empty) list of characters until the provided function fails.",null,null],[14,"take_till_s!","","`take_till_s!(&str -> bool) => &str -> IResult<&str, &str>`\nreturns the longest list of characters until the provided function succeeds",null,null],[14,"take_until_and_consume_s!","","`take_until_and_consume_s!(&str) => &str -> IResult<&str, &str>`\ngenerates a parser consuming all chars until the specified string is found and consumes it",null,null],[14,"take_until_s!","","`take_until_s!(&str) => &str -> IResult<&str, &str>`\ngenerates a parser consuming all chars until the specified string is found and leaves it in the remaining input",null,null],[11,"run","","Applies a consumer once on the produced data, and returns the generated value if there is one",21,{"inputs":[{"name":"producer"},{"name":"consumer"}],"output":{"name":"option"}}]],"paths":[[4,"ErrorKind"],[4,"Err"],[4,"Needed"],[4,"IResult"],[4,"Input"],[4,"ConsumerState"],[4,"Move"],[4,"FileProducerState"],[3,"ProducerRepeat"],[3,"MemProducer"],[3,"FileProducer"],[3,"MapConsumer"],[3,"ChainConsumer"],[8,"HexDisplay"],[8,"InputLength"],[8,"AsChar"],[8,"IterIndices"],[8,"AsBytes"],[8,"GetInput"],[8,"GetOutput"],[8,"Consumer"],[8,"Producer"]]};
initSearch(searchIndex);
