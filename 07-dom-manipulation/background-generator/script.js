var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";  //The textContent property sets or returns the text content of the specified 
}													//node,and all its descendants(kids). This property is similar to the innerText property, 

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);