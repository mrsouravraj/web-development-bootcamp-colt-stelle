var express = require("express");

var app = express();

// Visiting "/" should print "Hi there, welcome to my assignment!"

app.get("/", function (req ,res){
    res.send("Hi there, welcome to my assignment!");
});

// ==============================================================
// Visiting "/speak/pig" should print "The pig says 'Oink'"
// Visiting "/speak/cow" should print "The cow says 'Moo'"
// Visiting "/speak/dog" should print "The dog says 'Woof Woof!'"

app.get("/speak/:animal", function ( req, res ){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "I hate you human",
        goldfish: "..."
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    if (animal in sounds){
    res.send("The " + animal + " says '" + sound + "'");
    }
    else{
        res.send("Animal Sound not present in the database!");
    }
});

// ==============================================================
// Visiting "/repeat/hello/3" should print "hello hello hello"
// Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
// Visiting "/repeat/blah/2"  should print "blah blah"

app.get("/repeat/:info/:repTime", function(req, res) {
    var info = req.params.info;
    var info2 ="";
    var repTime = Number(req.params.repTime);
    for(var i=1 ; i<=repTime ; i++){
        info2 = info2 + info +" "; 
    }
    res.send(info2);
})

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
})

//Tell the Express to Listen for requests (start server)
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Now Serving your App");
});