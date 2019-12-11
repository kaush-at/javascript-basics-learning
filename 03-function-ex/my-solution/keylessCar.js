

function checkDriverAge(age){
    // var age = prompt("Enter your age : ");
    // age = Number(age);

    if(age > 18){
        alert("Powering On. Enjoy the ride!");
    } else if(age === 18){
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }else{
        alert("Sorry, you are too young to drive this car. Powering off");
    }
}

var checkAge = function checkDriverAge2(){
    // var age = prompt("Enter your age : ");
    // age = Number(age);

    if (age > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (age === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    } else {
        alert("Sorry, you are too young to drive this car. Powering off");
    }
}


function checkDriverAge(age) {
    if (age > 18) {
        return "Powering On. Enjoy the ride!";
    } else if (age === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    } else {
        return "Sorry, you are too young to drive this car. Powering off";
    }
}

checkDriverAge(92);