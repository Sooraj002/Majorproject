// importing modules
const express = require("express");
const app = express();
const Listing = require("./models/listing.js");
const path = require("path")


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
app.set(express.urlencoded({ extended: true }))
app.set("views", path.join(__dirname, "views"));

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


app.post("/listings", async(req, res) => {
    const newlisting = new Listing(req.body);
    await newlisting.save();
    res.redirect("/listings");
});


//  //  Test data
// app.get("/testListing", async(req, res) => {
//     let sampleListing = new Listing({
//         title: "My new villa",
//         description: "By the Beach",
//         price: 1200,
//         location: "Calamput, Goa",
//         country: "India",
//     });

//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("Successful testing")
// });

app.listen(8080, () => {
    console.log("Server is listing to server 8080");
});