// var button = document.getElementById("enter");
// var items = document.getElementById("uInputs");
// var unorderedList = document.querySelector("ul")
// button.addEventListener("click", function(){
//     var list = document.createElement("li");  // li element ekak document eka asse hadanawa
//     // every element has it text property
//     //var text = document.createTextNode("testing"); // text ekak hadanawa apita awashya wachane daala
//     var text = document.createTextNode(items.value);
//     list.appendChild(text);   // api hadapu list ekata e text eka append karanwa
//     unorderedList.appendChild(list);  // text eka append karapu li element eka ul ekata append karanawa
// })

//-----------------------------------------------------------------------------------
    //handle both button click and press enter 
//-----------------------------------------------------------------------------------

// var button = document.getElementById("enter");
// var items = document.getElementById("uInputs");
// var unorderedList = document.querySelector("ul")
// button.addEventListener("click", function () {
//     if (items.value.length > 0){
//         var list = document.createElement("li"); 
//         var text = document.createTextNode(items.value);
//         list.appendChild(text);   
//         unorderedList.appendChild(list); 
//         items.value="";
//     }
// })

// items.addEventListener("keypress", function (event) {
//     if (items.value.length > 0 && event.keyCode === 13) { // or instead of event.keyCode we can use event.which === 13
//         var list = document.createElement("li");
//         var text = document.createTextNode(items.value);
//         list.appendChild(text);
//         unorderedList.appendChild(list);
//         items.value = "";
//     }
// })

//------------------------------------------------------------------------------
// we have repeat same code above therefore it is not a good practice
// folow the DRY rules - dont repeat your self there fore i create like this
//--------------------------------------------------------------------------

var button = document.getElementById("enter");
var items = document.getElementById("uInputs");
var unorderedList = document.querySelector("ul")

function inputLength(){
    return items.value.length
}

function createListElement(){
    var list = document.createElement("li");
    list.appendChild(document.createTextNode(items.value));
    unorderedList.appendChild(list);
    items.value = "";
}

function addListAfterClick(){
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event){
    if (inputLength() > 0 && event.keyCode === 13) { 
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);  // in here we dont use addListAfterClick() function
                                                      // we just pass only the reference to the function without running it
                                                      //we don't want the addLisAfterClick function to run because we are just adding the 
                                                      //event listener now to wait for click or keypress. 
                                                     //We want to let it know though that we want this action to happen when a click happens.
items.addEventListener("keypress", addListAfterKeypress); // So the function now automatically gets run (gets added the ()) every time the click happens. 