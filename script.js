var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("#random");

css.textContent = getComputedStyle(body).getPropertyValue("background") + ";";

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function randomGenerator() {
	return Math.floor(Math.random() * 255);
}

function setRandomGradient() {
	body.style.background = "linear-gradient(to right, rgb(" + randomGenerator() + ", " + randomGenerator() + ", " + randomGenerator() + "), rgb(" + randomGenerator() + ", " + randomGenerator() + ", " + randomGenerator() + "))";
	css.textContent = body.style.background + ";";
}

random.addEventListener("click", setRandomGradient);