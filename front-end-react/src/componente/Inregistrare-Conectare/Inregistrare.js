import './Inregistrare.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Meniu from '../Pagina principala/Meniu/Meniu';
import axios from 'axios';
import React from'react';

const Inregistrare = () => {
    
    let navigate = useNavigate();

    const[dateIntrare, seteazaDateIntrare] = useState({
        nume:'',
        email:'',
        parola:'',
        repetaParola:''
    })

    const schimbaDateIntrare = (ceTastezNouEvent)=>{
        seteazaDateIntrare((dateIntrareInitiale)=>{
            let  dateIntrareNoi = {...dateIntrareInitiale};
             dateIntrareNoi[ceTastezNouEvent.target.name] = ceTastezNouEvent.target.value; //.name in html diferit pentru fiecare field
            return  dateIntrareNoi;
        })
    }
    
    useEffect(()=>{
        console.log(dateIntrare)
    },[dateIntrare])

    const trimiteModifIntrari = (event) => {
        event.preventDefault(); // previne reincarcarea browserului la submit buton
        if(dateIntrare.nume.length == 0 || dateIntrare.email.length == 0 || dateIntrare.parola.length == 0)
        {
            window.alert("Nu ai completat unul dintre campuri!")
        }
        else
        {
            if(dateIntrare.parola != dateIntrare.repetaParola)
            {
                window.alert("Parole diferite.")
            }
            else
            {
                //trimit la axios o singura parola
                let dateIntrareSplit = dateIntrare;
                delete dateIntrareSplit.repetaParola

                axios.post('http://localhost:5000/api/user/register',dateIntrareSplit)
                .then(async(res)=>{
                    console.log("singup:",res)
                    let activateAcc = `http://localhost:5000/verifica?id=${res.data.user}`
                    // let activateAcc = `verifica?id=${res.data.user}`
                    // let activateAcc = 'aaa'
                    console.log("activateAcc:",activateAcc)

                     try{
                        var dataEmail = {
                            service_id: 'service_v9pog8m',
                            template_id: 'template_64amchp',
                            user_id: 'sxkdR8NNcWS2j4F6t',
                            template_params:{
                                'to_mail': dateIntrare.email,
                                'mesaj': activateAcc
                            }
                        }
                        console.log("check:",dataEmail)
                        let sendResponse = await axios.post('https://api.emailjs.com/api/v1.0/email/send',
                        {
                            ...dataEmail
                        }
                        )
                        console.log("response ok:", sendResponse.data)
                        navigate('/conectare');

                    }
                    catch(err)
                    {
                        alert("Nu se poate crea cont")
                        console.log("Nu se paote trimite mail:", err)
                    }
        
                    
                })
                .catch(err=>console.log(err))
            }
        }
    }
     

    return (
        <div className="signup-container">
            <Meniu/>
            <div className="sign-up-container-under-menu">
                <div className="sign-up-container-center-form">
                    <div className="sign-up-container-title">
                        <div className="sign-up-title-padding">
                            <span>Înregistrare</span>
                        </div>
                    </div>
                    <div className="sign-up-container-form-container">
                        <div className="sign-up-form-container-padding">
                            <form className="sign-up-form">
                                <label>
                                    <span>Nume</span>
                                    <input type="text" name="nume" onChange={schimbaDateIntrare}/>
                                </label>
                                <label>
                                    <span>Email</span>
                                    <input type="text" name="email" onChange={schimbaDateIntrare}/>
                                </label>
                                <label>
                                    <span>Parola</span>
                                    <input type="password" name="parola" onChange={schimbaDateIntrare}/>
                                </label>
                                <label>
                                    <span>Repetă parola</span>
                                    <input type="password" name="repetaParola" onChange={schimbaDateIntrare}/>
                                </label>
                                <label className="submit-btn-label">
                                    <button onClick={trimiteModifIntrari}>Înregistrare</button>
                                </label>
                                <label className="change-state-signin-signup">
                                    <p onClick={()=>{navigate('/conectare')}}>Ai deja un cont?Conectează-te.</p>
                                </label>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Inregistrare;