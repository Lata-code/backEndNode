const mongoose = require('mongoose')

const ServicesSchema = new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:String, required:true},
    duration:{type:String, required:true},
    category:{type:String, required:true}
})

module.exports = mongoose.model('Service',ServicesSchema)