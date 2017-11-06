var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function(){
	document.body.classList.toggle("purple");

	//Other Way to do that 
	// if (isPurple == false)
	// {
	// 	document.body.style.background="purple";
	// }
	// else
	// {
	// 	document.body.style.background="white";
	// }

	// isPurple = !isPurple;
})
