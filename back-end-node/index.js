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

app.post('/api/user/register',async(req,res)=>{

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
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})
