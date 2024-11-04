//Function is a piece of code that we reuse over again and again in our code . function hold one or more complete lines of code .
//Varaible holds a value.

// 1. Definig function
/*
console.log('--------Function Declaration 🙅‍♂️------');

function sayHello() {
    console.log("Hello, World!");
}

console.log('--------Function Expression 📒------');

const sayHello = function () {
    console.log("Hello, World!");
};

console.log('--------Arrow Function (ES6) 🩻------');

const sayHello = () => {
    console.log("Hello, World!");
};
*/
// 2. Parameters and Arguments

function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Prakash");  //here name is - Parameter and Prakash is - Argument


//3. Return Statement :

function add(a, b) {
    return a + b;
}

let sum = add(5, 3); // sum is now 8
console.log(sum);

//4. Anonymous Functions
//Sometimes functions don’t need names, especially if they’re used temporarily or as arguments:

setTimeout(function () {
    console.log("This runs after 2 seconds");
}, 2000);

//5. Arrow Functions -- Introduced in ES6

const calcAge2 = birthYear => 2037 - birthYear; //shorter way
const calcAge3 = birthYear => {
    return 2037 - birthYear;
}

const addTwoNumbers = (para1, para2) => para1 + para2; //shorter and faster way to write

const addTwoNumbers2 = (para1, para2) => {
    return para1 + para2;
}

//6. Function calling another functions ----------

function calculateDiscount(price, discountRate) {
    return price * (discountRate / 100);
}
function applyDiscount(price, discountRate) {
    const discount = calculateDiscount(price, discountRate); //another function
    return price - discount;
}
const finalPrice = applyDiscount(100, 10);
console.log(finalPrice);
