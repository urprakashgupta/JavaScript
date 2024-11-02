console.log("-------Coding challenge --1 & 2 -----------");

/*
const mark_weight = 78;
const mark_height = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const BMIMark = mark_height / mark_height ** 2;
const BMIJohn = johnHeight / johnWeight ** 2;

console.log(BMIMark, BMIJohn);

// coding challenge --2 --Printing who has the higher BMI

const markBmi = BMIMark;
const johnBmi = BMIJohn;

if (markBmi > johnBmi) {
    console.log("Mark Bmi is greater than john bmi")
} else {
    console.log("John bmi is greater than mark bmi")
}

*/
console.log("-------Coding challenge --3 -----------");


const dolphinScore = (96 + 108 + 89);
const kolasScore = (96 + 108 + 89);
const avgScoreDolphins = dolphinScore / 3;
const avgScoreKolas = kolasScore / 3;
console.log(avgScoreDolphins, avgScoreKolas)

if (avgScoreDolphins > avgScoreKolas) {
    console.log(`Congratualtion Dolphins is winner with avg Score of ${avgScoreDolphins}`);
} else if (avgScoreDolphins === avgScoreKolas) {
    console.log("ohno match is draw");

} else {
    console.log(`Congratulations Kolas is winner with avg score of ${avgScoreKolas}`);
}



//--------------------------------------------------------------------


console.log('---------Coding Challenage: 4----------------');

const billValue = 275;
const tip = billValue <= 300 && billValue >= 50 ? billValue * 0.15 : billValue * 0.2;
console.log(`The bill was ${billValue} , the tip was ${tip} and the total value is ${billValue + tip}`);



