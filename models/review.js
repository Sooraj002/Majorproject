const mongoose = require("mongoose")
const Schema = require("mongoose.schema")

const reviewSchema = new Schema = ({
    comment:String,
    rating:{
        type: Number,
        min:1,
        max:5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

modeule.export = mongoose.model("Review", reviewSchema);
