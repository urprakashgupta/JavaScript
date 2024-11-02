//Type conversion ----

// 1. String to Number 

let var1 = "1122";
let var2 = Number(var1);
let var3 = Number("aaa");
console.log(typeof var1);
console.log(typeof var2);
console.log(var3);  //NaN

console.log(typeof var3); //Number


// 2. to String ---

console.log("------------to String-----------");


console.log(typeof String(1122));
console.log((typeof String(false)));


// 3. Automatic type convertion 

console.log("22" + 1 + "5");
//Here, + is a concatenation operator when dealing with strings.

console.log("22" - 1 - "5");
//The (-) operator is arithmetic, so JavaScript tries to convert strings to numbers.

console.log("22" * 2);
console.log("22" / 2);


//4. -- To Boolean 

//--these will return false 
console.log(Boolean(0));         // false, because 0 is falsy
console.log(Boolean(''));        // false, empty string is falsy
console.log(Boolean(undefined)); // false, undefined is falsy
console.log(Boolean(null));      // false, null is falsy
console.log(Boolean(NaN));       // false, NaN (Not a Number) is falsy



//-- other than this everything will return true
console.log(Boolean(11));        // true, because 11 is a non-zero number
console.log(Boolean("aa"));      // true, because "aa" is a non-empty string
console.log(Boolean({}));        // true, because an empty object is still a valid object






//NOTES ----
/*
JavaScript has "truthy" and "falsy" values. When you convert values to Boolean, the following are considered false:

Falsy values:
-0
-"" (empty string)
-undefined
-null
-NaN
Truthy values: All other values, including non-empty strings, objects, and numbers other than zero, are considered true.
*/