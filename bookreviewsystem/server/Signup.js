let {Schema, model} = require("mongoose")
let signup = new Schema({
        username:{type:String},
        password:{type:String} ,
        email:{type:String} 
})
module.exports=model("signup",signup)