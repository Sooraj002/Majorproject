const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,


    image: { //image download in unsplash.com
        type: String, //turnory operator same if else operator
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fepiphanychi.com%2Fgot-soul-laura-collins-tammy-faye-bakker-no-1-2022-qr%2F&psig=AOvVaw2oBFPE2X2okF54rldGyrq3&ust=1696143796207000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiH45fi0YEDFQAAAAAdAAAAABAJ",
        set: (v) => v === "" ?
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fepiphanychi.com%2Fgot-soul-laura-collins-tammy-faye-bakker-no-1-2022-qr%2F&psig=AOvVaw2oBFPE2X2okF54rldGyrq3&ust=1696143796207000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiH45fi0YEDFQAAAAAdAAAAABAJ" : v,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            
        }
    ]
});


module.exports = { data: listingSchema };

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;