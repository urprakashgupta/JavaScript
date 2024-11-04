//An array in JavaScript is a collection of elements, which can be numbers, strings, objects, or other data types. Arrays allow us
// to store multiple values in a single variable and provide various methods for manipulating this list of values.

//Initialize an array with the some numbers :

let newArray = [2, 3, 4, 5, 6];

//1. Length of Array :
let arrayLength = newArray.length;
console.log('Array Length:', arrayLength);


//2. Accessing elements :
console.log('First element:', newArray[0]); //first
console.log('Last Element:', newArray[arrayLength - 1]); //last


//3. Modifying Elements :
newArray[0] = 5; //first element will be set to 5
console.log('After Modifying first element:', newArray);


//4. Adding elements :
newArray.push(11); //add to the end
console.log('Ater push:', newArray);

let newLength = newArray.push(11, 33, 22, 112, 324242);  // Add multiple elements
console.log("After multiple pushes:", newArray);


newArray.unshift(0, 10, 100);  // Add elements to the start
console.log("After unshift:", newArray);


// 5. Removing Elements
let removedEnd = newArray.pop();  // Remove last element
console.log("Removed Last Element:", removedEnd);
console.log("After pop:", newArray);

let removedStart = newArray.shift();  // Remove first element
console.log("Removed First Element:", removedStart);
console.log("After shift:", newArray);


// 6. Finding Elements
let indexOfSix = newArray.indexOf(6);  // Find index of element 6
let includesSix = newArray.includes(6);  // Check if 6 exists
console.log("Index of 6:", indexOfSix);
console.log("Includes 6:", includesSix);


// 7. Slicing Array (non-destructive)
let slicedArray = newArray.slice(2, 5);  // Get elements from index 2 to 4
console.log("Sliced Array (2 to 4):", slicedArray);

//8. Concatenating array ----

let otherArray = [88, 99];
let concatenatedArray = newArray.concat(otherArray);
console.log('concatenated array:', concatenatedArray);

// 9. Finding with `.find()` and `.findIndex()`
let firstGreaterThanTen = newArray.find(element => element > 10);
let indexFirstGreaterThanTen = newArray.findIndex(element => element > 10);
console.log("First element greater than 10:", firstGreaterThanTen);
console.log("Index of first element greater than 10:", indexFirstGreaterThanTen)

// 11. Mapping Array (create a new array by transforming each element)
let doubledArray = newArray.map(num => num * 2);
console.log("Array with elements doubled:", doubledArray);


// 12. Filtering Array (create a new array with elements that pass a test)
let filteredArray = newArray.filter(num => num > 10);
console.log("Filtered Array (elements > 10):", filteredArray);



// 13. Sorting Array
let sortedArray = [...newArray].sort((a, b) => a - b);  // Sorting in ascending order
console.log("Sorted Array:", sortedArray);

// 14. Reversing Array
let reversedArray = [...newArray].reverse();
console.log("Reversed Array:", reversedArray);







//--------------------------------------------OBJECTS----------------------------------------------------------

// Define the object with initial properties and methods
const userObj = {
    firstName: "Shekahr",
    lastName: "Kumar",
    age: 55,
    isVerified: false,
    friends: ["aa", "bb", "cc"],
    calculateCanVote: function (age) {
        this.canVote = true;  // Sets canVote property to true
        return age > this.age; // Checks if the provided age is greater than user's age
    }
};

// Accessing Properties
console.log(userObj);                       // Logs the whole object
console.log(userObj.firstName);             // "Shekahr" (dot notation)
console.log(userObj["firstName"]);          // "Shekahr" (bracket notation)

let getPropertie = "friends";
console.log(userObj[getPropertie]);         // ["aa", "bb", "cc"]

// Using concatenated property names
const nn = "Name";
console.log(userObj["first" + nn]);         // "Shekahr"
console.log(userObj["last" + nn]);          // "Kumar"

// Adding and modifying properties
userObj.country = "india";                  // Adds "country" with value "india"
userObj["age"] = 22;                        // Modifies age to 22
userObj["isMarried"] = true;                // Adds "isMarried" with value true

console.log(userObj);                       // Logs updated object with new and modified properties

// Calling the calculateCanVote method
userObj.calculateCanVote(30);               // Sets canVote to true, returns false (30 is not > 22)
console.log(userObj);                       // Logs the object with the new canVote property


//AFTER RUNNING THE CODE THE USER OBJ WILL BE -

// {
//     firstName: "Shekahr",
//         lastName: "Kumar",
//             age: 22,
//                 isVerified: false,
//                     friends: ["aa", "bb", "cc"],
//                         calculateCanVote: function(age) { /* ... */ },
//     country: "india",
//         isMarried: true,
//             canVote: true  // Added by calculateCanVote method
// }
