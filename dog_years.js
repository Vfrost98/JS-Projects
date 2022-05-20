/*
  Task:
    Convert a human's age to dog years
*/

//setting the age
let myAge = 32;
//setting early years to two
let earlyYears = 2;

earlyYears *= 10.5;

//Subtracting 2 from myAge and creating the laterYears var
let laterYears = myAge - 2;

//multiplying later years by 4
laterYears *= 4;

//totaling age in dog years
let myAgeInDogYears = (earlyYears + laterYears);

//step 8 creating name as a string to convert to lowercase.
let myName = "Barbra Gordon";
myName.toLowerCase();

console.log(`My name is ${myName.toLowerCase()}. 
I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
