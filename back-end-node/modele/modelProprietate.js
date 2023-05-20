const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    nume: String,
    descriere: String,
    numarContact:String,

    tip: String,
    status: String,
    material: String,
    pret: Number,

    
    camere:Number,
    bai: Number,
    etaje:Number,
    locatie: String,

    long: Number,
    lat: Number,

    imagini: Array
})

module.exports = mongoose.model('Property',propertySchema);