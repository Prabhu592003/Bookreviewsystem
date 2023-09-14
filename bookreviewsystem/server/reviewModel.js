let {Schema, model} = require("mongoose")

let reviewSchema = new Schema({
    posted_by : {type: String},
    title : {type: String},
    category:{type:String},
    rating : {type: Number},
    review : {type: String},
    wishlist:{type:String},
    like:{type:Number}
})

module.exports = model("reviews", reviewSchema)