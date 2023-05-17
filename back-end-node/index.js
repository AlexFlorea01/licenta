const express = require('express')

const app = express();
const PORT = 5000;
const mongoose = require('mongoose')
const dotenv = require('dotenv');

//Import routers
const autentificare = require('./rute/Autentificare'); 


const cors = require('cors')
app.use(cors())

dotenv.config();

//Connect to db
// mongoose.connect(process.env.DB_CONNECT,
//     {useNewUrlParser: true},
//     ()=>{
//     console.log("Connected to db!")
// })

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


app.use('/api/modelUtilizator',autentificare);
//Route MiddleWares
app.get('/',(req,res)=>
{
    res.send('alex are 2 ani')
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})
