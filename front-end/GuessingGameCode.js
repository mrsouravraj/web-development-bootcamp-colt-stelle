// create secretNumber
var secretNumber=4;

//ask user for a guess
var stringGuess=prompt("Guess a Number");
var guess=Number(stringGuess);

//check if guess is right

if(guess === secretNumber){
	alert("You got it right");
}

//check if guess is higher

else if (guess > secretNumber) {
	alert("Too High. Guess Again");
}

//check if guess is lower

else{
	alert("Too Low. Guess Again");
}