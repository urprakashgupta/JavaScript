//Javascript Interview Questions ( map, filter and reduce ) 


//--Map filter and reduce are the array method that iterate over an array and preform tranformation or computation.

//1. MAP ---------

//-Uses to creating a new array from existing one by applying function to each on of the element of first array.

const nums = [1, 2, 3, 4, 5];
const multiplyThree = nums.map((num, i, arr) => {
    return num * 3
});

console.log(multiplyThree);

//this above can also be written some different format :

// 1.Using Implicit Return in Arrow Function:
/*
const nums = [1, 2, 3, 4, 5];
const multiplyThree = nums.map(num => num * 3);

console.log(multiplyThree); // Output: [3, 6, 9, 12, 15]

*/

//using foreach with an external array
/*
const nums = [1, 2, 3, 4, 5];
const multiplyThree = [];

nums.forEach(num => multiplyThree.push(num * 3));

console.log(multiplyThree); // Output: [3, 6, 9, 12, 15]

*/



//-----------------------------------------------------------------------------------------------



//Filter -- filter returns those who fulfills the provided criteria
/*
const nums2 = [1, 2, 3, 4, 5, 6, 7];
const moreThanTwo = nums2.filter((num) => {
    return num > 2;
});

console.log(moreThanTwo);

*/


//it can also written implicitly

const nums2 = [1, 2, 3, 4, 5, 6, 7];
const moreThanTwo = nums2.filter((num => num > 2));
console.log(moreThanTwo)


//------------------------------------------------------------------------------------------------


//Reduce method -- reduces the array of value just to one value

const nums3 = [1, 2, 3, 4, 5, 6];
const sum = nums3.reduce((acc, curr, i, arr) => {
    return acc + curr
});

console.log(sum)


//-------------------------------------------------------------------------------------------------

//MAP VS FOREACH

//---Both are the array function is used to loop through items of the array .

const arr = [2, 4, 5, 6, 7, 8];

const mapResult = arr.map((arr) => {
    return arr + 2;
});

console.log(mapResult);

const forEachResult = arr.forEach((arr) => {
    return arr + 2;
});
console.log(forEachResult);

//refer to image section to read more about this.



//-----------------------------------------------------------------------------------------------------------------------------------------




//map, filter and reduce - O/P Based Questions 

let students = [
    { name: "Prakash", rollNumber: 31, marks: 80 },
    { name: "ravi", rollNumber: 20, marks: 50 },
    { name: "sumit", rollNumber: 71, marks: 40 },
    { name: "awasthi", rollNumber: 59, marks: 85 },
];

// Question -1 : please return name of students in capital letters

//using for loop

let names = [];
for (let index = 0; index < students.length; index++) {
    names.push(students[index].name.toUpperCase());
}
console.log(names);

console.log("-------------------------")

//using map

const names2 = students.map((stu) => stu.name.toUpperCase());
console.log(names2)

console.log("-------------------------")
//Question - 2 : return only details of those who scored more than 60 marks

const moreThan60 = students.filter((arr) => arr.marks > 60);
console.log(moreThan60);

console.log("-------------------------")
//Question - 3 : more than 60 marks and rollnumber greater than 40

const details = students.filter((stu) => stu.marks > 60 && stu.rollNumber > 40);
console.log(details);

console.log("-------------------------")
//Question - 4: sum of marks of all students 

const sumMarks = students.reduce((acc, curr) => {
    return acc + curr.marks
}, 0)
console.log(sumMarks);


console.log("-------------------------")
//Question - 5 : Return only names of the students who scored more than 60

const namesMoreThan60Marks = students.filter((stu) => {
    return stu.marks > 60
}).map((nameStu) => {
    return nameStu.name
})
console.log(namesMoreThan60Marks);


console.log("-------------------------")

//Question - 6 : return total marks for students with marks greater than 60
//              after 20 marks have been added to those who scored less than 60


const totalMarks = students.map((stu) => {
    if (stu.marks < 60) {
        stu.marks += 20;
    }
    return stu;
}).filter((stu) => stu.marks > 60).reduce((acc, curr) => {
    return acc + curr.marks
}, 0)

console.log(totalMarks);


console.log("-------------------------")


//Reason why is this solution better : -
// 1st reason :  you save using Filter method means more optimized .
// 2nd reason :  The solution provided in video at 24:32 , he mutates the stu.mark += 20 which in result also mutates the original 
// array(students) which is bad practice.


const result = students
    .map((stud) => (stud.marks < 60 ? { ...stud, mark: stud.marks + 20 } : stud))
    .reduce(
        (accu, curStudent) =>
            curStudent.marks > 60 ? accu + curStudent.marks : accu,
        0
    );
console.log(result);
