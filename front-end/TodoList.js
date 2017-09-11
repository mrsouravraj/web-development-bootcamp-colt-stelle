var todos=["Buy new Turtle"];
var input=prompt("What would you like to do?");

while(input != "quit"){
		if(input === "list"){
			listTodos();
	}
	else if(input === "new"){
		addTodo();
	}
	else if (input === "delete") {
	   deleteTodo();
    }
	input=prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");

function listTodos() {
	console.log("**********");
		todos.forEach(function(todo,i){
			console.log(i + ":" +todo);
		});
		console.log("**********");
}

function addTod() {
	var add = prompt("Enter new todo");
		todos.push(add);
		console.log("Added Todo");
}

function deleteTodo() {
	//ask for index of todo to be deletes
	var index=prompt("Enter index of todo to delete");
	// delete that todo 
	//splice()
	todos.splice(index,1);
	console.log("Todo Deleted");
}