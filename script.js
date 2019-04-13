//Select the <h3></h3> tag
var css = document.querySelector("h3");
//Select class = " "color1" , to get color 1
var color1 = document.querySelector(".color1");
//Select class = " "color2" , to get color 2
var color2 = document.querySelector(".color2");

var body = document.getElementById("gradient");

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value + ", " 
	+ color2.value + ")"; 

	css.textContent = body.style.background + ";"; 
}


color1.addEventListener("input",setGradient)

color2.addEventListener("input",setGradient)


