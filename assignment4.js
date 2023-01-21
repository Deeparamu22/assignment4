let text1 = document.getElementById("passwordText");
let charLength = document.getElementById("output");
let StrengthLevel = document.getElementById("StrengthLevel");
let smallDiv = document.querySelectorAll(".smallDiv");
var checkbox;
let text = "";
let Titlearray = [];
let j = 0;
let r = {
	upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
	numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
	symbols: ["@", "#", "$", "%", "^", "&", "*", "(", ")", "¢", "£", "¥"],
}
let n = 8;
changeCharLength();
generate();
$(document).ready(function() {
	$("#copyIcon").click(function() {
		$("#copied").hide.fadeOut();
	});
});
//to change char lengthTitlearray
function changeCharLength() {
	charLength.textContent = document.getElementById("rangeBar").value;
	n = charLength.textContent;
}

// to generate password
function generate() {
	checkbox = document.querySelectorAll(".checkbox1");
	Titlearray = [];
	for (var i = 0; i < checkbox.length; i++) {
		Titlearray.push(checkbox[i].id)
	}
	if (checkbox.length == 0) {
		Titlearray = ["upperCase", "lowerCase", "numbers", "symbols"];
		for (var i = 0; i < Titlearray.length; i++) {
			document.getElementById(Titlearray[i]).className = "checkbox1";
			document.getElementById(Titlearray[i]).textContent = "✔";
			checkbox.length = 4
		}
	}

	text = "";
	for (var i = 0; i < n; i++) {

		if (j >= Titlearray.length) {
			j = 0;
		}
		text += r[Titlearray[j]][Math.floor(Math.random() * ((r[Titlearray[j]]).length))];

		j++;
	}
	text1.textContent = text.split("").sort((a, b) => 0.5 - Math.random()).join("");
	document.getElementById("copied").textContent = "";
	passwordStrength();
}

//copy text clipboard

function copyText() {
	navigator.clipboard.writeText(text1.textContent);
	document.getElementById("copied").textContent = "copied";
}

//show tick function
function checkIt(div) {
	div.className = "checkbox1";
	div.textContent = "✔";
	div.setAttribute("onclick", "removeTick(this)");
}

function removeTick(div) {
	div.className = "checkbox";
	div.textContent = "";
	div.setAttribute("onclick", "checkIt(this)");
}
//box strength
function passwordStrength() {
	checkbox = document.querySelectorAll(".checkbox1");
	if (checkbox.length == 4) {
		StrengthLevel.textContent = "STRONG";
		for (let i = 0; i < smallDiv.length; i++) {
			smallDiv[i].style.backgroundColor = "#A4FFAF";
			smallDiv[i].style.border = "2px solid #A4FFAF";
		}
	} else if (checkbox.length == 3) {
		StrengthLevel.textContent = "MEDIUM";
		for (let i = 0; i < smallDiv.length - 1; i++) {
			smallDiv[i].style.backgroundColor = "#F8CD65";
			smallDiv[i].style.border = "2px solid #F8CD65";
		}
		smallDiv[3].style.backgroundColor = "transparent";
		smallDiv[3].style.border = "2px solid white";
	} else if (checkbox.length == 2) {
		StrengthLevel.textContent = "WEAK";
		for (let i = 0; i < smallDiv.length - 2; i++) {
			smallDiv[i].style.backgroundColor = "#FB7C58";
			smallDiv[i].style.border = "2px solid #FB7C58";
		}
		for (let i = 2; i < smallDiv.length; i++) {
			smallDiv[i].style.backgroundColor = "black";
			smallDiv[i].style.border = "2px solid white";
		}
	} else if (checkbox.length == 1) {
		StrengthLevel.textContent = "TOO WEAK!";
		smallDiv[0].style.backgroundColor = "#F64A4A";
		smallDiv[0].style.border = "2px solid #F64A4A";
		for (let i = 1; i < smallDiv.length; i++) {
			smallDiv[i].style.backgroundColor = "black";
			smallDiv[i].style.border = "2px solid white";
		}
	}
}