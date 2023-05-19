const express = require('express')
const app = express();
const PORT = 5000;
const mongoose = require('mongoose')
const dotenv = require('dotenv');

const utilizatorModel = require('./modele/modelUtilizator')

const cors = require('cors')
app.use(cors())

dotenv.config();

let connect_to_mongose = async ()=>{
    try {
        let temp_obj_data = await mongoose.connect('mongodb://localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('MongoDB connected!!');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
}
connect_to_mongose();


//MiddleWare
app.use(express.json());

//////////////////////////////////////////////////////////
//Acopera partea de inregistrare
app.post('/api/user/register',async(req,res)=>{

    //check if the user is already in the db
    const emailExists = await utilizatorModel.findOne({email:req.body.email})
    if(emailExists)
    {
        return res.status(400).send("exista deja un utilizator cu acest email in baza de date")
    }

    console.log("test:", req.body);
    //making a new user

    const user = new utilizatorModel({
        nume: req.body.nume,
        email: req.body.email,
        parola: req.body.parola
    })
    console.log("After:",user)
    
    //salvează utilizatorul în baza de date și returnează un răspuns corespunzător în funcție de rezultatul salvării
    try{
        await user.save();
        return res.json({user: user._id});
    }catch(err)
    {
        return res.status(400).send("Nu am putut crea utilizatorul")
    }
})
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
//Acopera partea de logare
app.post('/api/user/login',async (req,res)=>{

    //check if the email exists
    //.findOne intoarce boolean in functie de rezultatul cautarii
    const user = await utilizatorModel.findOne({email:req.body.email})
    if(!user) return res.status(400).send("Utiliatorul cu acest email nu este inregistrat in baza de date!")

    // //Password is correct
    if(req.body.parola != user.parola) return res.status(400).send("Parola Gresita!")

    return res.json({user: user._id});
})
///////////////////////////////////////////////////////////






app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})
