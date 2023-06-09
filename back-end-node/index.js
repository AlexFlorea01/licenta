const express = require('express')
const app = express();
const PORT = 5000;
const mongoose = require('mongoose')
const dotenv = require('dotenv');

const utilizatorModel = require('./modele/modelUtilizator')
const proprietatiModel = require('./modele/modelProprietate');
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
    //to do
    //generate token 
    return res.json({token: 'abc'});
})
///////////////////////////////////////////////////////////
///////////////////////////////////////////////
//filtreaza proprietati

app.post('/api/user/proprietatiFiltrate',async (req,res)=>{
    console.log("filtre:", req.body);

    let not_empty_filters = {};
    for(let c in req.body.body)
    {
        if(req.body.body[c] != '' && req.body.body[c] !== 'pret_de_la' && req.body.body[c] !== 'pret_pana_la' )
        {
            not_empty_filters[c] = req.body.body[c];
        }
    }
    console.log("not_empty_filters:",not_empty_filters)

    let filtrate_fara_pret = await proprietatiModel.find({
        ...not_empty_filters
    },(err,data)=>{
        if(err)
        {
            res.status(500).json({err: 'search err'})
        }
        else
        {
            return data;
        }
    })
    console.log("filtrate_fara_pret:",filtrate_fara_pret)
    res.status(200).send(filtrate_fara_pret)
    // let arr_final = []
    // let pret_min = Number(req.body.body.pret_de_la);
    // let pret_max = Number(req.body.body.pret_pana_la);

    // filtrate_fara_pret.forEach((el)=>{
        
    //     if(el.pret > pret_max && el.pret < pret_max )
    //     {
    //         //exact price
    //         arr_final.push(el)
    //     }
    //     else if(pret_max == '' && pret_min == '')
    //     {
    //         //not completed fields
    //         arr_final.push(el);
    //     }
    //     else if(pret_max == '' && el.pret > pret_min)
    //     {
    //         //only pret_min completed
    //         arr_final.push(el);
    //     }
    //     else if(pret_min == ''  && el.pret < pret_max)
    //     {
    //         arr_final.push(el);
    //     }
    // })
    // console.log("final", arr_final);
    // res.json({rasp: arr_final})
    }
)

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//acopera partea de Sell
app.post('/api/user/newsell',async (req,res)=>{
    token=1;
    //const token = req.body.headers['auth-token'];
    if(!token)
    {
        //nu este furnizat un token
        res.status(403).json({error: "Acces denied!"})
    }
    else
    {
        //are token => verificam daca este corect
        try{
            //const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            
            console.log("body",req.body.body);
            //verified = {_id: .. , iat: ..}
            let temp = req.body.body;

            let newProperty = new proprietatiModel({
                nume: temp.nume,
                descriere: temp.descriere,
                numarContact: temp.numarContact,
            
                tip: temp.tip,
                status: temp.status,
                material: temp.material,
                pret: temp.pret,

                
                camere: temp.camere,
                bai: temp.bai,
                etaje: temp.etaje,
                locatie: temp.locatie,
            
                long: temp.long,
                lat: temp.lat,
            
                imagini: temp.imagini
            })
            try{
                const savedProperty =  await newProperty.save();
                res.json({newProperty: savedProperty});
            }catch(err)
            {
                res.status(400).json({error: 'Unable to save into db!'})
            }
            
            
        }
        catch(err){
            res.status(401).json({error: "Invalid token!"})
        }
    }
})

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//acopera partea de Buy
app.post('/api/user/buy',async (req,res)=>{

})

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//acopera partea de gasesteProprietate in pagina Proprietate
app.post('/api/user/gasesteProprietate',async (req,res)=>{
    //const token = req.body.headers['auth-token'];
    token=1;
    if(!token)
    {
        //nu este furnizat un token
        res.status(403).json({error: "Acces denied!"})
    }
    else
    {
        //are token => verificam daca este corect
        try{
            //arunca eroare daca tokenul nu este corect
            //const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            
            
            let id_to_check = req.body.body.id_to_check;
            console.log(id_to_check);
            try{
                //verifica daca este un id corect
                if(id_to_check.length != 24)
                {
                    res.status(404).json({err: 'invalid id'})
                    return
                }
                else
                {
                    //id de forma corecta => verifica in db
                    try{
                        //docs reprezintă documentele returnate ca rezultat al interogării din baza de date
                        proprietatiModel.findById(id_to_check,(err, docs)=>{
                            if (err){
                                res.status(404).json({err: 'not found!'})
                            }
                            else{
                                console.log("Result : ", docs);
                                if(docs == null)
                                {
                                    res.status(404).json({err: 'not found!'})
                                }
                                else
                                {
                                    res.json({gasit: docs})
                                }
                            }
                        })
                    }
                    catch(err)
                    {
                        console.log("err:", err)
                        res.status(500),json({err: 'search problem'})
                    }
                    
                }
                
            }catch(err)
            {
                res.status(400).json({error: 'Unable to save into db!'})
            }
            
            
        }
        catch(err){
            res.status(401).json({error: "Invalid token!"})
        }
    }
})

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})
