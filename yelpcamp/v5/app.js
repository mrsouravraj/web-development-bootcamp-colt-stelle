var express      = require("express"),
    app          = express(),
    bodyParser   = require("body-parser"),
    mongoose     = require("mongoose"),
    Campground   = require("./models/campground"),
    Comment      = require("./models/comment"),
    seedDB       = require("./seeds");



mongoose.connect("mongodb://localhost/yelp_camp_v4");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
seedDB();


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
             res.render("campgrounds/index",{campgrounds: allCampgrounds});
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
    res.render("campgrounds/new");
});

//SHOW- Shows more info about the campgrounds
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with the provided id
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            console.log(foundCampground);
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// =============================
//   Comments Routes
// =============================

app.get("/campgrounds/:id/comments/new",function(req, res) {
    //find campground by Id 
    Campground.findById(req.params.id , function(err,campground){
        if(err){
             console.log(err);
        } else {
            res.render("comments/new",{campground: campground});
        }
    });
    
});

app.post("/campgrounds/:id/comments", function(req, res){
   //lookup campground using ID
   Campground.findById(req.params.id, function(err, campground){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       } else {
        Comment.create(req.body.comment, function(err, comment){
           if(err){
               console.log(err);
           } else {
               campground.comments.push(comment);
               campground.save();
               res.redirect('/campgrounds/' + campground._id);
           }
        });
       }
   });
   //create new comment
   //connect new comment to campground
   //redirect campground show page
});


app.listen( process.env.PORT , process.env.IP , function(){
    console.log("The Yelpcamp has started!!!");
});