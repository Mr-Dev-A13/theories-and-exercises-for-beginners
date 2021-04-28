// .... Terms: “unary”, “binary”, “operand” ....

// UNARY
// An operator is unary if it has a single operand. 
// For example, the unary negation - reverses the sign 
// of a number:

let num_1 = 12;
num_1 = -num_1;
// console.log(num_1); // -12

// BINARY
// An operator is binary if it has two operands. The same 
// minus exists in binary form as well:

let num_2 = 2, num_3 = 3;
// console.log(num_2 - num_3); // -1

// OPERAND
// An operand – is what operators are applied to. For instance,
// in the multiplication of 5 * 2 there are two operands: 
// the left operand is 5 and the right operand is 2. Sometimes, 
// people call these “arguments” instead of “operands”.


// .... Maths ....

// Addition (+)
// console.log(10 + 3); // 13

// Subtraction (-)
// console.log(14 - 2); // 12

// Multiplication (*)
// console.log(3 * 7); // 21

// Division (/)
// console.log( 45 / 5); // 9

// Remainder (%)
// console.log(20 % 6); // 2

// Exponentiation (**)
// console.log(3 ** 3); // 27


// .... String concatenation with binary + ....

// Usually, the plus operator + sums numbers.
// But, if the binary + is applied to strings, it 
// merges (concatenates) them:

let num_4 = 4, num_5 = "5";
// console.log(num_4 + num_5); // 45

let str_1 = "I learn", str_2 = " JavaScript";
// console.log(str_1 + str_2);

// console.log(3 + 7 + "23"); // 1023


// .... Numeric conversion, unary + ....

// console.log(+true); // 1
// console.log(+"");   // 0
// let str_3 = "4", str_4 = "5";
// console.log(+str_3 + +str_4); // 9


// .... Assignment ....

let num_6 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9;
// console.log(num_6); // 45


//  .... Modify-in-place ....

let num_7 = 7;
num_7 = num_7 + num_7; // 14
// Short
num_7 += num_7; // 14

// +=, -=, *=, /= ...


//  .... Increment/Decrement ....

// Increment
let counter_1 = 1;
counter_1++;
// console.log(counter_1); // 2

// Decrement
let counter_2 = 2;
--counter_2;
// console.log(counter_2); // 1


// When the operator goes after the variable, it is in “postfix form”: counter++.

let counter_3 = 5;
let x = counter_3++;
// console.log(x); // 5


// The “prefix form” is when the operator goes before the variable: ++counter.

let counter_4 = 5;
let y = ++counter_4;
// console.log(y); // 6

