//Expressions 

// Simple expressions
5           // Evaluates to 5
"Hello"     // Evaluates to "Hello"

// Arithmetic expressions
2 + 3       // Evaluates to 5
10 * (2 + 3) // Evaluates to 50

// Function expressions
const add = function (a, b) {
    return a + b;
};           // 'add' is now a function that can be used

// Comparison expressions
5 > 3       // Evaluates to true


//--------Declarations

console.log("------Variable declarations--------");


let x = 5;
const name = "Alice";
var age = 25;


console.log('-------Function declarations------');

function greet() {
    return "Hello!";
}


console.log('------Class Declarations----');

class Person {
    constructor(name) {
        this.name = name;
    }
}


