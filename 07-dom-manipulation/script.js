var button = document.getElementsByTagName("button")[0]; // if we use document.getElementsByTagName("button") -this will gives us array of elements
button.addEventListener("click", function(){   // this will accept two parameters 1-event 2-function(what we want to do based on click event)
    console.log("button clicked...!!!");
}
); 