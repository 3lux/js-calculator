const output = document.getElementById("output");
var numString = "0";
var value1;
var value2;
var operationType;
var clearNext = false;
var opCount = 0;
var sum;
var diff;
var prod;
var frac;
var pointEnabled = true;

console.log("Font: Mina");
console.log("https://fonts.google.com/specimen/Mina");

function clearOutput(){
	output.innerHTML = '0';
	numString = "";
	value1 = 0;
	value2 = 0;
	operationType = "";
	opCount = 0;
	var sum = 0;
	var diff = 0;
	var prod = 0;
	var frac = 0;
	pointEnabled = true;
}

function backspace(){
	if (numString.length == 1){
		console.log("Too short");
	}else{
		numString = numString.slice(0, -1);
		output.innerHTML = numString;
	}
}

function push(text){
	if (clearNext == true){
		clearOutput();
		clearNext = false;
	}
	if (numString == "0"){
		numString = text;
	}else if (text == '.' && pointEnabled == true){
		numString += text;
		pointEnabled = false;
	}else if (text == '.' && pointEnabled == false){
		console.log('Not allowed');
	}else{
		numString += text;
	}
	if (numString.length >= 20){
		console.log('Too long');
	}else{
		output.innerHTML = numString;
	}
}
function equals(){
	value2 = Number(numString);
	pointEnabled = true;
	numString = "0";
	switch (operationType){
		case "add":
			sum = value1 + value2;
			output.innerHTML = sum;
			break;
		case "sub":
			diff = value1 - value2;
			output.innerHTML = diff;
			break;
		case "div":
		        if (value2 == 0){
				output.innerHTML = "Error";
			}else{
				frac = value1 / value2;
				output.innerHTML = frac;
			}
			break;
		case "times":
			prod = value1 * value2;
			output.innerHTML = prod;
			break;
		default:
			output.innerHTML = numString;
			break;
	}
}

function addition(){
	if (opCount == 0){
		console.log("first");
		operationType = "add";
		value1 = Number(numString);
		console.log(value1);
		numString = "0"
		opCount = 1
		pointEnabled = true;
	}else{
		equals();
		value1 = sum;
		numString = "0"
		operationType = "add";
		pointEnabled = true;
	}
	
}

function minus(){
	if (opCount == 0){
		console.log("first");
		operationType = "sub";
		value1 = Number(numString);
		console.log(value1);
		numString = "0"
		opCount = 1
		pointEnabled = true;
	}else{
		equals();
		value1 = diff;
		numString = "0"
		operationType = "sub";
		pointEnabled = true;
	}
}

function division(){
	if (opCount == 0){
		console.log("first");
		operationType = "div";
		value1 = Number(numString);
		console.log(value1);
		numString = "0"
		opCount = 1
		pointEnabled = true;
	}else{
		equals();
		value1 = frac;
		numString = "0"
		operationType = "div";
		pointEnabled = true;
	}
}

function times(){
	if (opCount == 0){
		console.log("first");
		operationType = "times";
		value1 = Number(numString);
		console.log(value1);
		numString = "0"
		opCount = 1
		pointEnabled = true;
	}else{
		equals();
		value1 = prod;
		numString = "0"
		operationType = "times";
		pointEnabled = true;
	}
}