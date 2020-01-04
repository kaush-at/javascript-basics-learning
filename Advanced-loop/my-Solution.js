const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

//2
basket.forEach(item => {
    console.log(item);
})

for (item in detailedBasket) {
    console.log(item);
}

for (item of basket) {
    console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1, 0, 3, 100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
    let biggest = 0;
    for(let i = 0; arr.length-1 > i ; i ++){
        if (arr[i + 1] > arr[i] && biggest < arr[i+1]) {   // if(biggest < arr[i]  -> then biggest = arr[i])
            biggest = arr[i+1];
        }
    };
    return biggest;
}
console.log(biggestNumberInArray(array));
console.log(biggestNumberInArray(array2));
console.log(biggestNumberInArray(array3));

function biggestNumberInArray2(arr) {
    let bigNum = 0;
    for(item of arr){
       if (item > bigNum){
           bigNum = item;
       }
    }
    return bigNum;
}

console.log(biggestNumberInArray2(array));
console.log(biggestNumberInArray2(array2));
console.log(biggestNumberInArray2(array3));

function biggestNumberInArray3(arr) {
    let largerNumber = 0;
    arr.forEach((item) =>{
        if (item > largerNumber) {
            largerNumber = item;
        }
    });
       
    
    return largerNumber;
}

console.log(biggestNumberInArray3(array));
console.log(biggestNumberInArray3(array2));
console.log(biggestNumberInArray3(array3));

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket(basket, lookingFor) {
    for(items in basket){
        if (items === lookingFor){
            return `${lookingFor} is in your basket`
        }  
    }
    return `${lookingFor} does not exist in your basket`;
}

console.log(checkBasket(amazonBasket, "glasses"));
console.log(checkBasket(amazonBasket, "plants"));