// Loops in JavaScript allow you to repeat a block of code multiple times, making it easier to work with
//repetitive tasks, iterate over collections (like arrays or objects), and control the flow of a program.

// 1. for loop ---------

// Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);  // Output: 1, 2, 3, 4, 5
}

// 2. While loop

// Print numbers from 1 to 5
let i = 1;
while (i <= 5) {
    console.log(i);  // Output: 1, 2, 3, 4, 5
    i++;             // Important to increment or it may cause an infinite loop
}

//3. for loop with arrays -------------------------------------------

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);  // Output: 1, 2, 3, 4, 5
}


//4. for...of loop

let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);  // Output: apple, banana, cherry
}


//5. foeach method 

let fruits2 = ["apple", "banana", "cherry"];
fruits2.forEach(function (fruit) {
    console.log(fruit);  // Output: apple, banana, cherry
});


//6. continue in loop ------------------

let numbers2 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] === 3) {
        continue;  // Skip the rest of the loop when the element is 3
    }
    console.log(numbers2[i]);  // Output: 1, 2, 4, 5
}


//7. break in loop--------------

let numbers3 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers3.length; i++) {
    if (numbers3[i] === 3) {
        break;  // Exit the loop when the element is 3
    }
    console.log(numbers3[i]);  // Output: 1, 2
}

//8. both continue and break 

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 === 0) {
        continue;  // Skip even numbers
    }
    if (numbers1[i] > 7) {
        break;     // Stop the loop if the number is greater than 7
    }
    console.log(numbers1[i]);  // Output: 1, 3, 5, 7
}
