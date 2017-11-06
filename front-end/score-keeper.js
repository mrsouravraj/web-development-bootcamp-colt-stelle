var p1Display = document.querySelector("#p1display");
var p2Display = document.querySelector("#p2display");
var p1Button = document.getElementById('p1');
var p2Button = document.getElementById('p2');
var resetButton = document.getElementById('reset');
var numInput = document.querySelector('input');
var winningScoreDisplay = document.querySelector('p span');
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click",function(){
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			p1display.classList.add("winner");
			gameOver = true;
		}
	p1Display.textContent = p1Score;
	}
})
p2Button.addEventListener("click",function() {
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			p2display.classList.add("winner");
			gameOver = true;
		}
	p2Display.textContent = p2Score;
	}
})
resetButton.addEventListener("click",function(){
	reset();
})
function reset() {
	console.log("reset");
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}
numInput.addEventListener('change',function() {
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
})