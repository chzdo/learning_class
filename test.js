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
// let x = 10;
// let y = 20;
// let sum = x + y + 1;
// console.log("Sum of x and y is: ", sum);


// //Subtraction
// let difference = y - x;
// console.log("Difference of y and x is: ", difference);

// //Multiplication
// let product = x * y;
// console.log("Product of x and y is: ", product);

// //Division
// let quotient = y / x;
// console.log("Quotient of y and x is: ", quotient);

// //Modulus
// let remainder = y % x;
// console.log("Remainder of y divided by x is: ", remainder);


//Increment
// Incrementing x by 1
// This will change the value of x
// x = x + 1;
//  DIFFERENCE BETWEEN ++x and x++ 
// ++x increments x and returns the new value
// x++ increments x but returns the old value
// x = ++x; // Pre-increment
// console.log("Value of x after pre-incrementing: ", x);
// x++
// console.log("Value of x after incrementing: ", x);


//Decrement
// Decrementing y by 1
// This will change the value of y
// y = y - 1;
// console.log("Value of y after decrementing: ", y);
// y--;
// console.log("Value of y after decrementing again: ", y);


//Assignment Operators
// let a = 5;
// let b = 10;
// a += 2; // a = a + 2

// b += 5; // b = b + 5
// console.log("Value of a after += 2: ", a); // 7

// a -= 3; // a = a - 3
// console.log("Value of a after -= 3: ", a); // 4

// b *= 2; // b = b * 2
// console.log("Value of b after *= 2: ", b); // 30

// a /= 2; // a = a / 2
// console.log("Value of a after /= 2: ", a); // 2

// a %= 2; // a = a % 2
// console.log("Value of a after %= 2: ", a); // 0


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


/**
 * 
 * control flows
 * 
 * 
 */

// let a = 2;
// let b = 2;

// let c = { a: 1 };
// let d = { a: 1 };
// let c1 = c

// let e = [1];
// let f = [1];

// let a1 = "test";
// let b1 = "test";

// let a11 = "1";
// let b11 = 1;

// /***
//  * ==
//  * Double only compares the values and not the type
//  */

// console.log('a == b', a == b)

// console.log('c == d', c == d)

// console.log('e == f', e == f)

// console.log('a1 == b1', a1 == b1)
// console.log('c1 == c', c1 == c)
// console.log('true == false', 1 == false)

// console.log('a11 == b11', a11 == b11)


// /**
//  * ===
//  * Triple Equal compares both value and type
//  */

// console.log('a11 === b11', a11 === b11)

// /**
//  * !=
//  *  checking if two values are not equal
//  */


// console.log("c != d", c != d)
// console.log("c1 != c", c1 != c)
// console.log('a1 != b1', a11 != b11)


// /**
//  * !==
//  *  checking if two values are not equal and the type
//  */


// console.log('a11 !== b11', a11 !== b11)

// /***
//  * 
//  * <
//  * 
//  * 
//  */

// console.log("a<b", a < b)
// console.log("a1<b1", a1 < b1)


// /***
//  * 
//  * >
//  * 
//  * 
//  */

// console.log("a>b", a > b)
// console.log("a1>b1", a1 > b1)

// /***
//  * 
//  * >
//  * 
//  * 
//  */

// console.log("a>=b", a >= b)
// console.log("a1>=b1", a1 >= b1)

// /***
//  * 
//  * <
//  * 
//  * 
//  */

// console.log("a<=b", a <= b)
// console.log("a1<=b1", a1 <= b1)



// /**
//  * 
//  * &&
//  */

// let firstCompare = a >= b;
// let secondCompare = c == d;

// console.log(`${firstCompare} &&  ${secondCompare}`, firstCompare && secondCompare)

// console.log("firstCompare || secondCompare", firstCompare || secondCompare)

// console.log("!firstCompare", !firstCompare)

// console.log("!secondCompare", !secondCompare);

// /***
//  * 
//  *    value ? result1 : result2
//  * 
//  */
// const studentName = "Stanley"
// const score = 65;
// const result = firstCompare ? " a is bigger or equal to b" : "a is not bigger or equal to b";

// const result2 = score >= 70 ? "A" : (
//     score >= 60 ? "B" : (score > 50 ? 'C' : "F")
// );


// console.log(result)

// /**
//  * 
//  * Template Literal `${variableName}`
//  */
// console.log(`The Student  ${studentName} had `, result2)

/**
 * 
 *   IF-ELSE
 *   SWITCH
 *
 */

// let gender = "female"
// let age = 17
//IF 

// if (gender == "female" && age > 20) {
//     //EXECUTE
//     console.log("Can Graduate")
// }

//IF-ELSE
// if (gender == "female" && age >= 20) {
//     //EXECUTE
//     console.log("Can Graduate")
// } else {
//     console.log("cannot graduate")
// }

//IF-ELSEIF



// let a = 3



// if (gender == "female" && age >= 20) {
//     let a = 2
//     //EXECUTE
//     console.log("Can Graduate", a)
// } else if (gender == "female" && age >= 16) {
//     let a = 1
//     console.log("wait for a year", a)
// } else if (gender == "female" && age >= 10) {
//     console.log("too young")
// } else {
//     console.log("cannot graduate")
// }


/***
 * 
 *   Write a program that will console log the grade of student after addition the exam score and test score
 * 
 *    For Example  StudentName = "ANy Name"  ExamScore = 45 ; TestScore = 15        GRADE = 60  . Expected Result should be AnyName Scored B\\
 * 
 * 
 *   Explain the result of the code
 *     
 * let a = "Stanley";
 * let b = "stanley" 
 * 
 * console.log(a == b);
 * console.log(a === b);
 * 
 * 
 * 
 * 
 *  
 * 
 */

/**
 * 
 * LOOPS
 * 
 * while loop
 * do while 
 * for 
 * 
 * 
 */

console.log("starting point....")

let count = 1;
// while (count <= 100) {
//     console.log("i am counting")
//     console.log("count is ", count++)
//     console.log("end counting")
// }
console.log("do while ....")
count = 1;
// let a
// console.log(a)
// do {
//     console.log("i am counting")
//     console.log("count is ", count++)
//     console.log("end counting")
// } while (!a);

for (let count = 1; count <= 100; count++) {
    console.log("i am counting")
    console.log("count is ", count++)
    console.log("end counting")

}


console.log("end point....")


/***
 * 
 * 
 * Write a program 
 * 
 * 1. Print even numbers from 2 to 20.  2, 4, 6 , 8 .....
 * 2. print numbers in reverse from 10 to 1 ,  10,9,8,...
 * 3. print the multiplication table of 5 - 5 * 1 = 5, 5 * 2 = 10  , ...
 * 4. calculate the sum of numbers between 0 to 1000 - 0+1+2+3+4+5......+1000
 * 
 */