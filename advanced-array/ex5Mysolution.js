// Complete the below questions using this array:
const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const resArray = [];
array.forEach((element) => { resArray.push(element.username + "!") });
console.log(resArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArr = array.map((ele)=> ele.username+"?");   // i remove return becouse it has only one line 
                                                    // withing map we no need to push in to array it will auto return a new array we get that array in to mapArr variable
//Filter the array to only include users who are on team: red
const filterArr = array.filter(ele=>{
     return ele.team === "red";        
});
console.log(filterArr);
//Find out the total score of all users using reduce
const total = array.reduce((acc, ele)=>{return ele.score + acc}, 0);
console.log(total);


// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    //alert(num);
    return num * 2;
})

//pure
//i = index
const arrayNum1 = [1, 2, 4, 5, 8, 9];
const newArray1 = arrayNum1.map((num, i) => {
    return num * 2;
})


console.log(newArray1);


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const itemModify = array.map(ele => { ele.items = ele.items.map(item => { return item + "!" }); return ele});
console.log(itemModify);


let obj = {
    a:"a",
    b :"b",
    c : {
        deep : "try and copy me"
        }
}

let obj1 = obj; // regular way (paas by reference)
let obj2 = {...obj}; // shallow clone method 1
let obj3 = Object.assign({},obj);
let supercloneobj4 = JSON.parse(JSON.stringify(obj));

//   
console.log("---------------------------------------------");
obj.c.deep = "la la laaaa";

console.log(obj);
console.log(obj1);

console.log(obj2);
console.log(obj3);
console.log(supercloneobj4);

// console.log("---------------------------------------------");
// obj2.c.deep = "la la laaaa";

// console.log(obj2);
// console.log(obj3);
// //
//console.log(obj);

