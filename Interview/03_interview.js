//Functions in javascript

// Q1. what is function declarartion ?? --this can also called function defination or function statement

function square(num) {
    return num * num;
}

//Q2. what is function expression ? --- when you store function store inside a variable .

const square = function (num) {
    return num * num;
}; //this function part is called anoanoymous function because it has no name

//Q3. what are first class function ?

//Q4. what is IIFE?

//syntax :
(function () {
    // Code inside this function
})();

//Example : 
(function () {
    console.log("This is an IIFE!");
})();
// Output: This is an IIFE!


//Q5. IIFE output based questions:

(function (x) {
    return (function (y) {
        console.log(x); //output : 1
    })(2);
})(1);

//Q6. Function Scopes --- 

//Q7. Function scope output based questions ---

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);

    }, i * 1000);
}

//Q8. Function hoisting --

function functionName() {
    console.log("I am a coder");

}

functionName();