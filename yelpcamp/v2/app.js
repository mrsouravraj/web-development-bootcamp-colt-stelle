var express      = require("express"),
    app          = express(),
    bodyParser   = require("body-parser"),
    mongoose     = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

// SCHEMA SETUP

var campgroundSchema = new mongoose.Schema({
    name         : String,
    image        : String,
    description  : String
});

var Campground = mongoose.model("Campground",campgroundSchema);

// Campground.create(
//     {
//         name:"Granie Hill" ,
//         image:"http://www.photosforclass.com/download/8524305204",
//         description: "This is a huge granite hill, no bathrooms. No water. Beautiful Granite!"
//     }, function(err,campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("Created a New Campground!");
//             console.log(campground);
//         }
// });


// All the Routes

app.get("/",function( req , res ){
    res.render("landing");
});


// Index of the yelpcamp
app.get("/campgrounds",function( req , res ){
    //Get all the Components from the database
    Campground.find({}, function(err , allCampgrounds){
        if(err){
            console.log(err);
        } else {
             res.render("index",{campgrounds: allCampgrounds});
        }
    });
});

// Create a new Campground
app.post("/campgrounds", function(req, res){
    //res.send("You hit the post request!!!");
    //get the data from the forms and add to the campgrounds array
    var name = req.body.name;
    var image =  req.body.image;
    var newCampground = {name: name, image: image};
    // Create a new campground and save it to the DB
    Campground.create(newCampground , function(err,newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

//NEW - show form to create a new campground
app.get("/campgrounds/new" , function(req, res) {
    res.render("new");
});

//SHOW- Shows more info about the campgrounds
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with the provided id
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen( process.env.PORT , process.env.IP , function(){
    console.log("The Yelpcamp has started!!!");
});