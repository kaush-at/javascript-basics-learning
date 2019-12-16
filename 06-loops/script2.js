var database = [{
    username:"kaush",
    password : "123"
},{
    username: "bob",
    password: "456"
},{
    username: "marly",
    password: "789"
}];

var newsfeed = [{

    username:"andrie",
    timeline : "hey how are you...???"

},
{
    username:"bob",
    timeline:" i am coding these days.."
},
{
    username:"marly",
    timeline:"we are here with you..."
}
];

var userName = prompt("Enter your username : ");
var userPass = prompt("Enter your password : ");

function isUserValid(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if (userName === database[i].username && userPass === database[i].password) {
            return true;
        } 
    }
    return false;
}

function userLogin(user, pass){
    console.log(isUserValid(user, pass));
    if (isUserValid(user, pass)){
       console.log(newsfeed);
   }else{
       alert("Invalid username or password");
   }
}

userLogin(userName, userPass);