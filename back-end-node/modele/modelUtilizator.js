//Mongoose este o bibliotecă pentru Node.js care permite dezvoltatorilor să definească scheme și să interacționeze cu baze de date MongoDB într-un mod mai simplu și mai intuitiv. MongoDB este un sistem de gestiune a bazelor de date NoSQL, care stochează datele sub forma de documente JSON, în loc să le stocheze în tabele și rânduri, așa cum se întâmplă în bazele de date relaționale.


// importă biblioteca Mongoose și o atribuie la o constantă mongoose
const mongoose = require('mongoose'); 


//Se definește schema pentru utilizatori prin apelarea funcției mongoose.Schema(). 
const userSchema = new mongoose.Schema({
    nume:{
        type:String,
        required: true,
        min: 6,
        max:255
    },
    email:{
        type:String,
        required: true,
        min:6,
        max:255
    },
    parola:{
        type:String,
        required: true,
        max: 1024,
        min: 6
    },
    data:{
        type: Date,
        default: Date.now
    }

});


// Se creează un model pentru colecția de utilizatori prin apelarea funcției mongoose.model(). Acesta primește două argumente: numele modelului și schema asociată. În acest caz, numele modelului este 'User', iar schema asociată este userSchema.
module.exports = mongoose.model('User', userSchema);

//În Mongoose, module.exports este utilizat pentru a exporta un model definit prin intermediul mongoose.model(). Modelul este apoi disponibil în alte module din aplicația Node.js prin intermediul require().

//De exemplu, într-un alt fișier JavaScript, putem utiliza require() pentru a accesa modelul definit în fișierul anterior:

// const User = require('./models/user');



//Puteți utiliza metodele app.get(), app.post(), app.put() sau app.delete() pentru a defini rutele corespunzătoare pentru metodele HTTP GET, POST, PUT sau DELETE.