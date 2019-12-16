var todo = [
    "wakeup",
    "brush teeth",
    "excercise",
    "study javascript",
    "eat healthy"
];


// for loop
for(var i = 0; i < todo.length; i ++){
    console.log(i);
    console.log(todo[i]);
    console.log(todo[i] + "!");
}

// forEach   - it ask a function as parameter that says what to do withing that for each
todo.forEach(function(i){  
    console.log(i); // 0,1,2,3,4
}) ;

todo.forEach(function (todo, i) {
    console.log(i); // wakeup 0,brush teeth 1,excercise 2, study javascript 3,eat healthy 4
}) ;
 // or if you get cofuse with function you can use like below
 var nameOfFunction = function(todo, i){
     console.log(todo, i)
 }
 todo.forEach(nameOfFunction);  // then we can use above function in onther places also (if we have another todo list called todo2 or somrthing we can 
                                // use same function (nameOfFunction) to iterate it)

// if you need you can 

// while loop
var counter = 0;
while(counter < 10){
    console.log(counter);
    counter ++;
}

//do while loop
var counterTwo = 0
do {
    console.log(counterTwo);
    counterTwo ++;
}
while(counterTwo < 10);

// difference between while loop and do while loop
// in while loop    
    //1). check the condition first then do the stuff

// in do while loop
    // do the stuff first then check condition
