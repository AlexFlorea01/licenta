const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    name: String,
    description: String,
    contactNumber:String,

    type: String,
    status: String,
    material: String,
    price: Number,

    
    rooms:Number,
    baths: Number,
    beds:Number,
    location: String,

    long: Number,
    lat: Number,

    images: Array
})

module.exports = mongoose.model('Property',propertySchema);