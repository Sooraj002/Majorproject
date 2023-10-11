// importing modules
const express = require("express");
const app = express();
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");


//  importing database and connecting
const mongoose = require("mongoose");
main().catch(err => console.log(err));

main()
    .then(() => {
        console.log("Connected To db");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/traveller');
}


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


//  Home Route
app.get("/", (req, res) => {
    res.send("Hi, I am root");
});


// Index Route
app.get("/listings", async(req, res) => {
    allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
});


//New route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs")
})


// Show Route
app.get("/listings/:id", async(req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    res.render("listings/show.ejs", { listing })
});


//Create Route
app.post("/listings", async(req, res) => {
    let newListing = new Listing(req.body.listing); //listing object h
    console.log(newListing);
    await newListing.save();
    res.redirect("/listings");
});


// Edit Route
app.get("/listings/:id/edit", async(req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    res.render("listings/edit.ejs", { listing })
})


// Update route
app.put("/listings/:id", async(req, res) => {
    let { id } = req.params;
    let updateListing = req.body.listing;
    await Listing.findByIdAndUpdate(id, updateListing);
    res.redirect("/listings")
});


// Delete Route
app.delete("/listings/:id", async(req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings")
});


app.listen(8080, () => {
    console.log("Server is listing to server 8080");
});