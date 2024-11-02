// ECMAScript 5 (ES5) is the fifth version of the ECMAScript Standard

//ECMAScript 6 (ES6) => after this all releases called modern js .

//---------------------



// Data Types => any value can be primitive or object
// primitive is datatype that can not be divided more in other data types
// in JS any value which is not object is primitive
// Dynamic Typing => we don't need to manually define the data type. it determined automatically


//the 7 primitive data types

let var1 = "Ravi"; //  -String
let var2 = 111; //  -Number
let var3 = true; //  -Boolean 
let var4; // --Undefined -> value of any variable that is not defined yet
let var5 = null;
let var6 // symbol (es2015)
let var7 //BigInt (es2020)

//-----Console.log () for above data types
/*
console.log(typeof var1)
console.log(typeof var2)
console.log(typeof var3)
console.log(typeof var4)
console.log(typeof var5)

*/


//OBJECTS

let var8 = {
    name: "Ravi",
    age: 21
}



//-------------OPERATORS --------------------

//mathematical operators =>  + - * / %, **, +=, -+, /=,*/, ++,--

//comparing operators => ===, ==, !=, <, >, <=, =>

//these will run according to their precedence order 


console.log("-------equality operator------");

const age = 18;

console.log(age === 18);    //true
console.log(age === "18");  //false
console.log(age !== "18");  //true
console.log(age == 18);     //true
console.log(age == "18");   //true
console.log(age != "18");   //false

//Loose Equalty Operators (==)

console.log('---------Loose Equallity Operators-------------')

console.log(5 == "5");   // true, because "5" (string) is converted to 5 (number)
console.log(0 == false); // true, because false is converted to 0
console.log(null == undefined); // true, these are considered loosely equal
console.log("" == false); // true, because "" is converted to 0, and false is also 0


//-Strict Equality Operator (===)
console.log("---------Strict Equality Operator----------")

console.log(5 === "5");   // false, because number 5 is not the same type as string "5"
console.log(0 === false); // false, because 0 (number) is not the same type as false (boolean)
console.log(null === undefined); // false, because null and undefined are different types
console.log("" === false); // false, empty string is not the same type as boolean false
console.log(5 === 5);      // true, both are the same type and value

//logical operator => && || !




//-------------------IF-ELSE ----------------------------


const age1 = 17;

if (age1 >= 18) {
    console.log('Sarah can start driving licencse 🏎️');
} else {
    const yearsLeft = 18 - age1;
    console.log(`Sarah is wait to another ${yearsLeft} years`);

}


//if else is called control structure 

// if (condition) {

// } else {

// }

// ---------- If else 
/*
if (true) {
    console.log("");
} else if (false) {

} else {

}

if (false) console.log();
*/
//You can have multiple else if statements if there are several conditions to check.

let score = 65;

if (score > 80) {
    console.log("Great job! You passed.");
} else if (score > 50) {
    console.log("Good effort, but there's room to improve.");
} else {
    console.log("You didn't pass. Keep studying!");
}


// conditional operator --same as if/else statement but all in oneline .
22 === 20 + 2 ? console.log("correct") : console.log("incorrect");

const canVote = age >= 18 ? "can vote" : "can't vote";


//---------switch 

let day = 6;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}

console.log("----------switch example without break-------------")

let color = 'blue';

switch (color) {
    case 'red':
        console.log("Color is red");
    case 'blue':
        console.log("Color is blue");
    case 'green':
        console.log("Color is green");
    default:
        console.log("Unknown color");
}

//output --- Color is blue                --To avoid this result we should always use break in this.
//Color is green
//Unknown color




//Javascript releases notes :

/*

JavaScript's evolution, focusing on its versions and releases. It begins by discussing the creation of JavaScript in 1995
 by Brendan Eich, originally named Mocha, which was later renamed to JavaScript for marketing reasons. The text highlights 
 the standardization of JavaScript through ECMAScript, with ES1 released in 1997.

The major updates include ES5 in 2009 and the significant ES6 (or ES2015) in 2015, which introduced numerous features. 
Following ES6, an annual release cycle was established, leading to subsequent versions like ES2016, ES2017, and so on.

A key aspect of JavaScript is its backward compatibility, ensuring older code still functions in modern browsers. 
However, it lacks forward compatibility, meaning future code may not work in current browsers. The text emphasizes 
the importance of transpiling modern JavaScript for production to ensure compatibility with older browsers.

Lastly, it mentions the teaching approach in the course, which includes modern JavaScript while also covering older
 ES5 concepts to help learners understand the language's evolution and practical applications.

 */