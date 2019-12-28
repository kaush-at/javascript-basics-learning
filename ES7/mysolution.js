// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes("John");


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const newArr=[];
dragons.forEach(name => {
    if (name.includes("John")){
        newArr.push(name);
    }
    return newArr;
});
//short solution
dragons.filter(name => name.includes('John'))
// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const power = (number) => number ** 100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
1e+300
// Research for yourself why you get this result

//In JavaScript, we shorten a number by appending the letter "e" to the number and specifying the zeroes count:
let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
// -3 divides by 1 with 3 zeroes
1e-3 = 1 / 1000;//(=0.001);
//you seem to have the right idea.

1e + 11=1⋅(10) + 11; // 1*10 11 weni balayak
//You should know that 10 raised to any positive integer is a 1 with that many 0s behind it.So

10 + 11=100000000000

//In your example the string "1e+11" means the number 1⋅10 + 11=10^11 = 10000000000011"0"symbols