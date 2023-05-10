const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/API")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log("Failed to connect");
})

const Schema= new mongoose.Schema({
    name:{
        type :String,
        required: true
    }
})

const collection = new mongoose.model("Collection",Schema)
module.exports=collection