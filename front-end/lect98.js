// isEven


function isEven(num) {
	return num % 2 === 0;
}

//factorial

function factorial(num) {
	var fact=1;
	for (var i =2; i <= num; i++) {
		fact *= i;
	}
	return fact;
}

// kebabToSnake

function kebabToSnake(str) {
	var result="";
	
	return str.replace(/-/g,"_");
}