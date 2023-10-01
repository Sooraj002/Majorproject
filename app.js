// importing modules
const express = require("express");
const app = express();
const Listing = require("./models/listing.js");


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

app.set("view engine", "ejs")

//  Home Route
app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/listings", async(req, res) => {
    allListings = await Listing.find({});
    res.render("index.ejs", { allListings });
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