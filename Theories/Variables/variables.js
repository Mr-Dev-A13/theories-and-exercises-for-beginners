//  .... VAR ...

// 1. Answers before and after the ad.
// console.log(number_1); // undefined
var number_1 = 13;
// console.log(number_1); // 13

// 2. Answers of (lexical scope) before and after the ad.
// console.log(greeting_1); //undefined
{
var greeting_1 = "Welcome"
}
// console.log(greeting_1); // Welcome

// 3. Answers of (if) before and after the ad
// console.log(sayHello_1); //undefined
if (true) {
  var sayHello_1 = "Hello";
}
// console.log(sayHello_1); // Hello

// 4. Answers of (for) before and after the ad
var string_1 = "JavaSctipt"; 
// console.log(variable_1); // undefined
for (let i = 0; i < string_1.length; i++ ) {
  var variable_1 =  "Variables";
}
// console.log(variable_1); // Variables

// 5. Answers of (function) before and after the ad
// console.log(bollVariable_1); // ReferenceError
function exampleOfVar () {
  var bollVariable_1 = false;
}
// console.log(bollVariable_1); // ReferenceError

// .... LET ....

// 1. Answers before and after the ad.
// console.log(number_2); // ReferenceError
let number_2 = 13;
// console.log(number_2); // 13

// 2. Answers of (lexical scope) before and after the ad.
// console.log(greeting_2); // ReferenceError
{
let greeting_2 = "Welcome"
}
// console.log(greeting_2); // ReferenceError

// 3. Answers of (if) before and after the ad
// console.log(sayHello_2); // ReferenceError
if (true) {
  let sayHello_2 = "Hello";
}
// console.log(sayHello_2); // ReferenceError

// 4. Answers of (for) before and after the ad
let string_2 = "JavaSctipt"; 
// console.log(variable_2); // ReferenceError
for (let i = 0; i < string_2.length; i++ ) {
  let variable_2 =  "Variables";
}
// console.log(variable_2); // ReferenceError

// 5. Answers of (function) before and after the ad
// console.log(bollVariable_2); // ReferenceError
function exampleOfVar () {
  let bollVariable_2 = false;
}
// console.log(bollVariable_2); // ReferenceError

// .... CONST ....

// 1. Answers before and after the ad.
// console.log(number_3); // ReferenceError
let number_3 = 13;
// console.log(number_3); // 13

// 2. Answers of (lexical scope) before and after the ad.
// console.log(greeting_3); // ReferenceError
{
let greeting_3 = "Welcome"
}
// console.log(greeting_3); // ReferenceError

// 3. Answers of (if) before and after the ad
// console.log(sayHello_3); // ReferenceError
if (true) {
  let sayHello_3 = "Hello";
}
// console.log(sayHello_3); // ReferenceError

// 4. Answers of (for) before and after the ad
let string_3 = "JavaSctipt"; 
// console.log(variable_3); // ReferenceError
for (let i = 0; i < string_3.length; i++ ) {
  let variable_3 =  "Variables";
}
// console.log(variable_3); // ReferenceError

// 5. Answers of (function) before and after the ad
// console.log(bollVariable_3); // ReferenceError
function exampleOfVar () {
  let bollVariable_3 = false;
}
// console.log(bollVariable_3); // ReferenceError


// .... Variables names ....

// There are two limitations on variable names in JavaScript:
// 1. The name must contain only letters, digits, or the symbols $ and _.
// 2. The first character must not be a digit.


//  .... Come up with the right names ....
// Wrong
let abc = 2002;
let g2 = "Jon Snow";

// Correct
let dateOfBirth = 2002;
let nameOfPerson = "Jon Snow";