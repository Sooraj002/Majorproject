const mongoose = require("mongoose");
const schema = mongoose.Schema

const listinschema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:String,
    image:{
        type:String,
        set:(v) => v === "" 
        ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Frepairit.wondershare.com%2Fphoto-repair%2Fresolve-images-not-showing-problem.html&psig=AOvVaw0wAobzhVr6o8FWFEAz2cIU&ust=1696078008842000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCIDjloftz4EDFQAAAAAdAAAAABAD"
        :v,
    },
    price:Number,
    location:String,
    country:String
});

const listing = mongoose.model("listing", listinschema);
module.export = listing;