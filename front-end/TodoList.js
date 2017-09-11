var todos=[];
var input=prompt("What would you like to do?");

while(input != "quit"){
		if(input == "list"){
		console.log(todos); 
	}
	else if(input == "new"){
		var add = prompt("Enter new todo");
		todos.push(add);
	}
		var input=prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");