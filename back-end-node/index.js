const express = require('express')
const app = express();
const PORT = 5000;
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.parola, salt);  
    console.log("hashPassword:",hashPassword)

    const user = new utilizatorModel({
        nume: req.body.nume,
        email: req.body.email,
        parola: hashPassword
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
    const validPass = await bcrypt.compare(req.body.parola, user.parola)
    console.log("validPass:",validPass)

    if(!validPass) return res.status(400).send("Parola Gresita!")
    //to do
    //generate token 
    
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    
    return res.json({token: token});
})

app.post('/api/user/check-token', (req,res)=>{
    let {token} = req.body;
    console.log("token:", token)

     if(!token) {
        res.status(401).send("Acces denied!")
    }
else
    {
        try{
            const verified = jwt.verify(token, process.env.TOKEN_SECRET)
            res.status(200).send(verified)
        }catch(err)
        {
            res.status(400).send("Invalid token!")
        }
    }

})
///////////////////////////////////////////////////////////
///////////////////////////////////////////////
//filtreaza proprietati

app.post('/api/user/proprietatiFiltrate',async (req,res)=>{
    console.log("filtre:", req.body);

    let not_empty_filters = {};
    for(let c in req.body.body)
    {
        if(req.body.body[c] != '' && c !== 'pret_de_la' && c !== 'pret_pana_la' )
        {
            not_empty_filters[c] = req.body.body[c];
        }
    }
    console.log("not_empty_filters:",not_empty_filters)
    if(req.body.body['pret_de_la'] !== '' && req.body.body['pret_de_la'])
    {
        not_empty_filters['pret'] = {$gt : Number(req.body.body['pret_de_la'])}
    }

    if(req.body.body['pret_pana_la'] !== '' && req.body.body['pret_pana_la'])
    {
        not_empty_filters['pret'] ={
            ...not_empty_filters['pret'],
            $lt : Number(req.body.body['pret_pana_la'])
    }
}
    console.log("TEST:",not_empty_filters)

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
    }
)

app.post('/api/user/propietatiLocatie',async (req,res)=>{
    console.log("filtre:", req.body);
    let {lat, long} = req.body;

    let offset = 0.5;

    let filters = {
        long: {
            $gt: Number(lat) - offset,
            $lt: Number(lat) + offset
        },
        long: {
            $gt: Number(long) - offset,
            $lt: Number(long) + offset
        },
        
    }

    let rezultateDupaLocatie = await proprietatiModel.find({
        ...filters
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
    res.status(200).send(rezultateDupaLocatie)
    }
)

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//acopera partea de Sell
app.post('/api/user/newsell',async (req,res)=>{

    const token = req.body.headers['auth-token'];
    console.log("new sell token:", token);
    let verifed = undefined;
    
    if(!token)
    {
        //nu este furnizat un token
        return res.status(403).json({error: "Acces denied!"})
    }

    try{
        verifed = jwt.verify(token, process.env.TOKEN_SECRET)
    }
    catch(err)
    {
        console.log("nu se poate gasi user id la adauga locaite")
        return res.status(400).send("can't identify owner")
    }
    
    
    //are token => verificam daca este corect
    try{
        //const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        
        console.log("body",req.body.body);
        //verified = {_id: .. , iat: ..}
        let temp = req.body.body;

        let newProperty = new proprietatiModel({
            owner: verifed._id,
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
            return res.json({newProperty: savedProperty});
        }catch(err)
        {
            return res.status(400).json({error: 'Unable to save into db!'})
        }
        
        
    }
    catch(err){
        return res.status(401).json({error: "Invalid token!"})
    }
})

app.post('/api/user/ownership', async (req,res)=>{
    let {user, prop} = req.body;
    console.log("ownser ship:", user, prop)
    try{
        let osernshipResp = await proprietatiModel.find({
        owner: user,
        })
        console.log("cas 3:", osernshipResp)

        let matchProp = false;
        osernshipResp.forEach((el)=>{
            console.log("iter:")
            if(el._id == prop)
            {
                console.log("mathcL:", user, prop, el)
                matchProp = true;
                return 
            }
        })
        if(matchProp == true)
        {
            return res.status(200).send({
                user, prop
            })
        }
        else 
        {
            return res.status(403).send("Wrong ownerhip!")
        }
    }
    catch(err)
    {
        return res.status(403).send("Wrong owner")
    }
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

app.post('/api/proprietati/sterge',async (req,res)=>{
    let {idProp} = req.body;
    console.log("sterge prop:", idProp)
    try {
    const rezultat = await proprietatiModel.findByIdAndRemove(idProp).exec();

    if (rezultat) {
      console.log('Obiectul a fost șters cu succes.');
      return res.status(200).send("prop sters")
    } else {
        return res.status(400).send("Nu se poate gasi prop pentru sters")
      console.log('Obiectul nu a fost găsit.');
    }
  } catch (error) {
    console.error('Eroare:', error);
    return res.status(400).send("Eroare la stergere prop")
  }
})
app.post('/api/proprietati/adauga-review', async(req,res)=>{
    let {
        propId, 
        text,
        rating,
        userId
    } = req.body;

    // extrage nume utilizator
    let userData = await utilizatorModel.findById(userId);
    let userName = userData.nume;

    console.log("uername", userName);

    try {
    const property = await proprietatiModel.findById(propId);

    if (!property) {
      return res.status(400).send("Nu se poate adauga un review")
    }

    // Adăugăm noul review în câmpul "reviews" al obiectului
    let review = {
        owner: userName,
        text: text,
        rating: rating
    }
    property.reviews.push(review);

    // Salvăm obiectul actualizat în baza de date
    const updatedProperty = await property.save();

    return res.status(200).send("update adaugat cu succes")
    } catch (error) {
        return res.status(400).send("Nu se poate adauga un review")
    }
})

app.post('/api/proprietati/review', async(req,res)=>{
    let{propId} = req.body;
    console.log("propd id:", propId);

    try {
        // Găsim obiectul cu ID-ul dat în colecția proprietatiModel
        const property = await proprietatiModel.findById(propId);

        if (!property) {
            return res.status(400).send("Nu se pot extrage review")
        }
        // Returnăm toate review-urile obiectului
        const reviews = property.reviews;

        return res.status(200).send(reviews);

    } catch (error) {
        console.error('Eroare:', error.message);
        return res.status(400).send("Nu se pot extrage review")
    }

})
app.post("/api/proprietati/report",async(req,res)=>{
    let {
    submitter,
    anunt,
    text,
    motiv
    } = req.body;

    console.log("report api:",submitter,
    anunt,
    text,
    motiv)

    // TODO: trimite mail la administrator cu continutul reportului;
    
    return res.status(200).send("Raportat cu succes")
})

//acopera partea de Alte Proprietati
app.get('/api/user/AlteProprietati',async (req,res)=>{
    // countDocuments() obține numărul total de documente din colecția PropertyModel
    const count = await proprietatiModel.countDocuments({});
  
  if (count <= 3) {
    const temp = await proprietatiModel.find({});
    res.send({ random: temp });
  } else {
    //aggregate() această metodă permite procesarea și transformarea datelor din colecție, folosind diferite etape de agregare, cum ar fi filtrarea, sortarea, gruparea și altele.
    //Operatorul $sample este unul dintre operatorii de agregare disponibili în MongoDB utilizat pentru a selecta aleator un număr specificat de documente dintr-o colecție.
    const randomDocuments = await proprietatiModel.aggregate([{ $sample: { size: 3 } }]);
    res.send({ random: randomDocuments });
  }
})
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})
