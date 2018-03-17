const output = document.getElementById("output");
var numString = "";

function push(text){
	numString += text;
	if (numString.length >= 20){
		console.log('Too long');
	}else{
		output.innerHTML = numString;
	}
}

function clear(){
	console.log('clear');
	output.innerHTML = '0';
	numstring = "";
	console.log(numString);
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