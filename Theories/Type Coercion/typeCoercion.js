// .... String Conversion ....

let number = 13;

// EXPLICITLY
let srt_1 = String(number);
// console.log(srt_1); // 13
// console.log(typeof srt_1); // string


// IMPLICITLY
let str_2 = number + ""; // don't matter (str + "") <-> ("" + str)
// console.log(str_2); // 13
// console.log(typeof str_2); // string

// WITH ANOTHER TYPES
// console.log(String(NaN)); // NaN                               // typeof string
// console.log(String(null)); // null                             // typeof string
// console.log(String(undefined)); // undefined                   // typeof string
// console.log(String(Infinity)); // Infinity                     // typeof string
// console.log(String(-Infinity)); // -Infinity                   // typeof string
// console.log(String(true)); // true                             // typeof string
// console.log(String(false)); // false                           // typeof string
// console.log(String(function () {})); // function () {}         // typeof string
// console.log(String([])); // empty                              // typeof string
// console.log(String({})); // [object Object]                    // typeof string

// .... Number Conversion ....

// Numeric conversion happens in mathematical functions and expressions 
// automatically.

let x = "10", y = "3";
// console.log(x + y); //  typeof string (except for the string type)
// console.log(x - y); //  typeof number
// console.log(x * y); //  typeof number
// console.log(x / y); //  typeof number
// console.log(x % y); //  typeof number
// console.log(x ** y); // typeof number


// Value	           ...     Becomes…
// undefined               ---  NaN
// null	                   ---     0
// true and false	   ---     1 and 0
// string	           ---     Whitespaces from the start and end are removed.
// If the remaining string is empty, the result is 0. Otherwise, the number 
// is “read” from the string. An error gives NaN.

let string = "42";

// EXPLICITLY
let num_1 = Number(string);
// console.log(num_1); //42
// console.log(typeof num_1); // number

// IMPLICITLY
let num_2 = +string;
// console.log(num_2); // 42
// console.log(typeof num_2); // number

// WITH ANOTHER TYPES
// console.log(Number(NaN)); // NaN                               // typeof number
// console.log(Number(null)); // 0                                // typeof number
// console.log(Number(undefined)); // NaN                         // typeof number
// console.log(Number(Infinity)); // Infinity                     // typeof number
// console.log(Number(-Infinity)); // -Infinity                   // typeof number
// console.log(Number(true)); // 1                                // typeof number
// console.log(Number(false)); // 0                               // typeof number
// console.log(Number(function () {})); // NaN                    // typeof number
// console.log(Number([])); // 0                                  // typeof number
// console.log(Number({})); // NaN                                // typeof number


// .... Boolean Conversion ....

// Value                                  ...     	Becomes…
// 0, -0, null, undefined, NaN, ""        ---     	false
// any other value	                  ---           true

let boolean = 1;

// EXPLICITLY
let bool_1 = Boolean(boolean);
// console.log(bool_1); // true;
// console.log(typeof bool_1); // boolean

// IMPLICITLY
let bool_2 = boolean > 0;
// console.log(bool_2); // true;
// console.log(typeof bool_2); // boolean

// WITH ANOTHER TYPES
// console.log(Boolean(NaN)); // false                               // typeof boolean
// console.log(Boolean(null)); // false                              // typeof boolean
// console.log(Boolean(undefined)); // false                         // typeof boolean
// console.log(Boolean(Infinity)); // true                           // typeof boolean
// console.log(Boolean(-Infinity)); // true                          // typeof boolean
// console.log(Boolean(true)); // truer                              // typeof boolean
// console.log(Boolean(false)); // false                             // typeof boolean
// console.log(Boolean(function () {})); // true                     // typeof boolean
// console.log(Boolean([])); // true                                 // typeof boolean
// console.log(Boolean({})); // true                                 // typeof boolean

// Most of these rules are easy to understand and memorize. 
// The notable exceptions where people usually make mistakes are:

// undefined is NaN as a number, not 0.
// "0" and space-only strings like " " are true as a boolean.