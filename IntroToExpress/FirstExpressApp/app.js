var express = require("express");

var app = express();

// '/' =>"Hi There!"
app.get('/',function (req,res){
   res.send("Hi There!"); 
});

// '/bye' => "Goodbye!"
app.get("/bye", function(req,res){
    res.send("Goodbye!");
});

// '/dog' => "Meow!"
app.get("/dog", function(req, res) {
    console.log("Someone made a request to /dog");
    res.send("MEOW!");
});

app.get("/r/:subRedditName", function(req, res) {
    var subReddit = req.params.subRedditName;
    res.send("I am from a " + subReddit + " SubReddit");
});

app.get("/r/:subRedditName/comments/:id/:title",function(req, res) {
    res.send("WELCOME TO THE COMMENTS PAGE!");
});

app.get("*", function(req, res) {
    res.send("Error 404 Not Found");
});

//Tell the Express to Listen for requests (start server)
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has Started");
});