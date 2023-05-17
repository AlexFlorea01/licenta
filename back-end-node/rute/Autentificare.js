const router = require('express');
const utilizatorModel = require('../modele/modelUtilizator');

router.post('/inregistrare', async(req,res)=>{

    console.log("inregistrare:", req.body);

    //making a new user
    const user = new utilizatorModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    
    //salvează utilizatorul în baza de date și returnează un răspuns corespunzător în funcție de rezultatul salvării
    try{
        await user.save();
        res.json({user: user._id});
    }catch(err)
    {
        res.status(400).send(err)
    }

})

// Sigur! Iată un exemplu simplu de utilizare a metodelor HTTP într-un REST API pentru gestionarea unei liste de utilizatori:

// 1. GET - Obținerea listei de utilizatori:
//    - Endpoint: `/users`
//    - Descriere: Această cerere va returna o listă de utilizatori existenți în sistem.
//    - Metodă HTTP: GET
//    - Răspuns: Un array JSON conținând informațiile despre utilizatori.

// 2. GET - Obținerea detaliilor unui utilizator specific:
//    - Endpoint: `/users/{id}`
//    - Descriere: Această cerere va returna detaliile unui utilizator specific, identificat prin `id`.
//    - Metodă HTTP: GET
//    - Răspuns: Un obiect JSON conținând informațiile despre utilizatorul respectiv.

// 3. POST - Crearea unui utilizator nou:
//    - Endpoint: `/users`
//    - Descriere: Această cerere va crea un nou utilizator în sistem, utilizând datele trimise în corpul cererii.
//    - Metodă HTTP: POST
//    - Corpul cererii: Un obiect JSON conținând informațiile despre noul utilizator.
//    - Răspuns: Un obiect JSON conținând informațiile despre utilizatorul nou creat.

// 4. PUT - Actualizarea detaliilor unui utilizator existent:
//    - Endpoint: `/users/{id}`
//    - Descriere: Această cerere va actualiza detaliile unui utilizator specific, identificat prin `id`, cu datele trimise în corpul cererii.
//    - Metodă HTTP: PUT
//    - Corpul cererii: Un obiect JSON conținând informațiile actualizate despre utilizator.
//    - Răspuns: Un obiect JSON conținând informațiile actualizate despre utilizatorul respectiv.

// 5. DELETE - Ștergerea unui utilizator existent:
//    - Endpoint: `/users/{id}`
//    - Descriere: Această cerere va șterge un utilizator specific, identificat prin `id`, din sistem.
//    - Metodă HTTP: DELETE
//    - Răspuns: Un răspuns gol cu codul de stare `204` pentru a indica succesul ștergerii.

// Acestea sunt doar câteva exemple de utilizare a metodelor HTTP într-un REST API. Într-un API real, vei avea mai multe endpoint-uri și metode, în funcție de nevoile și funcționalitățile aplicației tale.

/////////////////////////////////////////////////////////////

// Când se utilizează cuvintele cheie async și await în funcțiile unei aplicații Node.js, se lucrează cu promisiuni. Acestea facilitează gestionarea codului asincron într-un mod mai clar și mai lizibil. Să examinăm fiecare concept în parte:

// async: Când o funcție este declarată ca async, ea devine o funcție asincronă. Acest lucru înseamnă că funcția va returna întotdeauna o promisiune. Așteptând finalizarea unei operațiuni asincrone, funcția nu blochează executarea, permițând ca alte instrucțiuni să fie executate în timp ce operațiunea asincronă este în desfășurare.

// await: Când se folosește cuvântul cheie await în fața unei expresii care returnează o promisiune, el așteaptă finalizarea acelei promisiuni. Așteptând o promisiune, codul de sub await este blocat până când promisiunea este rezolvată sau respinsă. Rezultatul promisiunii este returnat și poate fi utilizat în continuare în codul următor.

// În contextul unui API REST, async și await pot fi folosite pentru a aștepta finalizarea operațiunilor asincrone, cum ar fi accesarea datelor dintr-o bază de date sau apeluri către alte servicii. De exemplu, atunci când se face un apel către baza de date pentru a obține un utilizator, se poate utiliza await pentru a aștepta finalizarea operațiunii și pentru a primi rezultatul utilizatorului înainte de a continua cu codul ulterior.