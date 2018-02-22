var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema =  new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat",catSchema);

//adding a new cat to the databases

// var george = new Cat({
//     name: "Mrs Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err , cat){
//     if(err){
//         console.log("Something Went Wrong!");
//     } else{
//         console.log("We Just Saved A Cat To The DB:");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
},function(err,cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

//retreive all cats from the DB and console.log for each one

Cat.find({}, function(err, cats){
    if(err){
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("ALL THE CATS.....");
        console.log(cats);
    }
});

