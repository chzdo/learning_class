/**
 *  Variable & DataTypes & Constants
 *  Operators & Expressions
 *  Type Conversion & Type Coercion
 *  Control Flow & Conditional Statements
 *  Loops & Iteration
 *  Functions & Classes
 * Arrays & Objects
 * * DOM Manipulation
 *   Event Handling
 *  Error Handling
 * Asynchronous JavaScript
 * *  AJAX & Fetch API
 * *  Promises & Async/Await
 * *  Local Storage & Session Storage
 * *  JSON Handling 
 * *  Web APIs
 *  
 * 
 */

// a = 10;


// console.log("a is ", a, " and type is ", typeof a);

// a = true
// console.log("a is ", a, " and type is ", typeof a);

// //Constant Variable Value Does not Change
// const b = 40;

// c = "text";

// let d;

// console.log("d is -", d, " and type is ", typeof d);

// let a = 20;

// let b = a;

// b = b + 30

// console.log("a is ", a, "b is", b);

// let c = { a: 10, c: { b: 1 } };
// let d = { ...c };
// d.a = 20;
// console.log("c is ", c.a, "d is", d.a);

/**
 *  Data Types
 * Primitive Types: Number, String, Boolean, Null, Undefined, Symbol
 * Reference Types: Object, Array, Function
 * 
 * 
 */

/**
 * Take Home Assignment 
 *  Create a simple JavaScript program that demonstrates the use of variables, data types, and constants.
 * Use at least one primitive and one reference type.
 * Use console.log to display the values and types of the variables.
 * *  Use a constant variable and demonstrate that its value cannot be changed.
 * *  Use a variable that is not initialized and show its type.
 *  *  Use comments to explain your code.
 *   Submit your code as a .js file.
 * 
 * 
 * 
 */


/**
 * 
 * CLASS 2
 * 
 * Operators & Expressions
 * Arithmetic Operators: +, -, *, /, %, ++, --
 * Assignment Operators: =, +=, -=, *=, /=, %=
 * Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
 * Logical Operators: &&, ||, !
 * Bitwise Operators: &, |, ^, ~, <<, >>
 * Ternary Operator: condition ? expr1 : expr2
 * 
 *  spread operator: ...
 *  destructuring assignment: { a, b } = obj
 *  template literals: `Hello ${name}`
 *  typeof operator: typeof variable
 *  instanceof operator: object instanceof Class
 *  in operator: property in object
 *  delete operator: delete object.property
 *  void operator: void expression
 *  new operator: new Class()
 *  this keyword: this.property
 *  super keyword: super.method()
 *  with statement: with (object) { ... }
 *  eval function: eval(expression)
 *  Function constructor: new Function('arg1', 'arg2', 'return arg1 + arg2;')
 *  Object constructor: new Object()
 *  Array constructor: new Array(1, 2, 3)
 *  String constructor: new String('text')
 *  Number constructor: new Number(10)
 */


//Addition
let x = 10;
let y = 20;
let sum = x + y + 1;
console.log("Sum of x and y is: ", sum);


//Subtraction
let difference = y - x;
console.log("Difference of y and x is: ", difference);

//Multiplication
let product = x * y;
console.log("Product of x and y is: ", product);

//Division
let quotient = y / x;
console.log("Quotient of y and x is: ", quotient);

//Modulus
let remainder = y % x;
console.log("Remainder of y divided by x is: ", remainder);


//Increment
// Incrementing x by 1
// This will change the value of x
// x = x + 1;
//  DIFFERENCE BETWEEN ++x and x++ 
// ++x increments x and returns the new value
// x++ increments x but returns the old value
x = ++x; // Pre-increment
console.log("Value of x after pre-incrementing: ", x);
x++
console.log("Value of x after incrementing: ", x);


//Decrement
// Decrementing y by 1
// This will change the value of y
y = y - 1;
console.log("Value of y after decrementing: ", y);
y--;
console.log("Value of y after decrementing again: ", y);


//Assignment Operators
let a = 5;
let b = 10;
a += 2; // a = a + 2

b += 5; // b = b + 5
console.log("Value of a after += 2: ", a); // 7

a -= 3; // a = a - 3
console.log("Value of a after -= 3: ", a); // 4

b *= 2; // b = b * 2
console.log("Value of b after *= 2: ", b); // 30

a /= 2; // a = a / 2
console.log("Value of a after /= 2: ", a); // 2

a %= 2; // a = a % 2
console.log("Value of a after %= 2: ", a); // 0


/**
 *  TAKE HOME ASSIGNMENT
 * Create a JavaScript program that demonstrates the use of different operators and expressions.
 * Use at least one arithmetic, assignment, comparison, and logical operator.
 * Use console.log to display the results of each operation.
 * Use comments to explain your code.
 * Submit your code as a .js file.
 * 
 * 2. Write a program that shows if a number is even or odd using the modulus operator.
 * For Instance, let nu= 10 it should print "10 is even" and if let nu = 11 it should print "11 is odd".
 * 
 * 
 * 
 */







