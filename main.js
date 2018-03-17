const output = document.getElementById("output");
var numString = "0";
var value1;
var value2;
var operationType;
var clearNext = false;

function clearOutput(){
	output.innerHTML = '0';
	numString = "";
	value1 = 0;
	value2 = 0;
	operationType = "";
}

function push(text){
	if (clearNext == true){
		clearOutput();
		clearNext = false;
	}
	if (numString == "0"){
		numString = text;
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
	console.log("Equals");
	value2 = Number(numString);
	switch (operationType){
		case "add":
			output.innerHTML = value1 + value2;
			break;
		case "sub":
			output.innerHTML = value1 - value2;
			break;
		case "div":
			output.innerHTML = value1 / value2;
			break;
		case "times":
			output.innerHTML = value1 * value2;
			break;
		default:
			output.innerHTML = numString;
			break;
	}
	clearNext = true;
}

function add(a, b){
	return a + b;
}

function subtract(a, b){
	return a - b;
}

function multiply(a, b){
	return a * b;
}

function divide(a, b){
	return a/b;
}

function addition(){
	operationType = "add";
	value1 = Number(numString);
	console.log(value1);
	numString = "0"
}

function minus(){
	operationType = "sub";
	value1 = Number(numString);
	console.log(value1);
	numString = "0"
}

function division(){
	operationType = "div";
	value1 = Number(numString);
	console.log(value1);
	numString = "0"
}

function times(){
	operationType = "times";
	value1 = Number(numString);
	console.log(value1);
	numString = "0"
}