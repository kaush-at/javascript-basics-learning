var database = [{
    username:"kaush",
    password : "123"
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

function userLogin(user, pass){
    if (userName === database[0].username && userPass === database[0].password){
        console.log(newsfeed);
    }else
    {
        alert("user name or password incorrect")
    }
}

userLogin(userName, userPass);