const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    owner: String,
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

    imagini: Array,
    reviews: Array
    // createdAt: { type: Date, expires: 1, default: Date.now } // Adăugăm câmpul "createdAt" pentru ștergerea automată după 2 minute
})

// Crearea TTL index
// propertySchema.index({ createdAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('Property',propertySchema);