const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongo_url = mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
const listing = require("..models\listing.js");

main().then( () => {
    console.log("Connected to db");
})
.catch ((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(mongo_url);
}

app.get("/", (req, res) => {
    res.send("Hi , i am root");
});

app.get("/testlisting", async (req, res) => {
    let samplelisting = new listing({
        title: "My new villa",
        description:"By the beach",
        prince:1200,
        location:"Calangute, Goa",
        country:"india"
    });

    await samplelisting.save();
    console.log("sample was saved");
    res.send("successful testing")
});

app.listen(8080, () => {
    console.log("Sever  is listening to 8080");
});
