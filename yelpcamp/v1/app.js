var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

var campgrounds = [
        {name:"Samon Creek" , image:"http://www.photosforclass.com/download/5641024448"},
        {name:"Granie Hill" , image:"http://www.photosforclass.com/download/8524305204"},
        {name:"Mountain Goat's Rest" , image:"http://www.photosforclass.com/download/2123340163"},
        {name:"Samon Creek" , image:"http://www.photosforclass.com/download/5641024448"},
        {name:"Granie Hill" , image:"http://www.photosforclass.com/download/8524305204"},
        {name:"Mountain Goat's Rest" , image:"http://www.photosforclass.com/download/2123340163"},
        {name:"Samon Creek" , image:"http://www.photosforclass.com/download/5641024448"},
        {name:"Granie Hill" , image:"http://www.photosforclass.com/download/8524305204"},
        {name:"Mountain Goat's Rest" , image:"http://www.photosforclass.com/download/2123340163"}
];
app.get("/",function( req , res ){
    res.render("landing");
});

app.get("/campgrounds",function( req , res ){
    res.render("campgrounds",{campgrounds:campgrounds});
});
app.post("/campgrounds", function(req, res){
    //res.send("You hit the post request!!!");
    //get the data from the forms and add to the campgrounds array
    var name = req.body.name;
    var image =  req.body.image;
    var newcampground = {name: name, image: image}
    campgrounds.push(newcampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
    
});

app.get("/campgrounds/new" , function(req, res) {
    res.render("new.ejs");
});

app.listen( process.env.PORT , process.env.IP , function(){
    console.log("The Yelpcamp has started!!!");
});