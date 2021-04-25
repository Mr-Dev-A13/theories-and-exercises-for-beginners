// Primitives Types

// .... Number ....
const num_1 = 13;
const num_2 = 42.3;
// console.log(num_1, num_2); // 13, 42.3
// console.log(typeof num_1, typeof num_2); // number, number


// .... Infinity ....
const inf_1 = Infinity;
const inf_2 = 1 / 0
// console.log(inf_1, inf_2); // Infinity Infinity
// console.log(typeof inf_1, typeof inf_2); // number, number


// .... NaN ....
const nan_1 = NaN;
const nan_2 = 13 / "React.js";
// console.log(nan_1, nan_2); // NaN, NaN
// console.log(typeof nan_1, typeof nan_2); // number, number


// .... Null ....
const nul = null;
// console.log(nul); // null
// console.log(typeof nul); // object


// .... Undefined ....
const empty_1 = undefined;
let empty_2;
// console.log(empty_1, empty_2); // undefined, undefined
// console.log(typeof empty_1, typeof empty_2);  // undefined, undefined


// .... Boolean ....
const bool_1 = true;
const bool_2 = false;
// console.log(bool_1, bool_2); // true, false
// console.log(typeof bool_1, typeof bool_2); // boolean, boolean


// .... BigInt ....
// In JavaScript, the “number” type cannot represent integer values
// larger than (253-1) (that’s 9007199254740991), or less than -(253-1)
// for negatives. It’s a technical limitation caused by their internal
// representation.
 
const bigNumber_1 = 12345678900987654321;
const bigNumber_2 = 12345678900987654321n;
// console.log(bigNumber_1, bigNumber_2); //12345678900987654000, 12345678900987654321n
// console.log(typeof bigNumber_1, typeof bigNumber_2); // number, bigint


// .... String ....
// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.

const str_1 = 'Hello';
const str_2 = "\nHello bitches of California";
const str_3 = `\n${str_1} bitches of California`;
// console.log(str_1, str_2, str_3);
// console.log(typeof str_1, typeof str_2, typeof str_3);



// .... Symbol ....
// The symbol type is used to create unique identifiers for objects.

const id_1 = Symbol("class");
const id_2 = Symbol("class");
// console.log(id_1, id_2); // Symbol(class), Symbol(class)
// console.log(typeof id_1, typeof id_2); // symbol, symbol
// console.log(id_1 === id_2, id_1 == id_2); //false, false


// Reference Types 

// .... Array ....
let arr_1 = [];
let arr_2 = new Array();
// console.log(arr_1, arr_2); // [], []
// console.log(typeof arr_1, typeof arr_2); // object, object


// .... Function ....
// Function Declaration
// Function Expression
// Arrow Function
// IIFE - Immediately Invoked Function Expression 

// .... Object ....
const obj_1 = {};
const obj_2 = new Object();
// console.log(obj_1, obj_2); // {}, {}
// console.log(typeof obj_1, typeof obj_2); // object, object



