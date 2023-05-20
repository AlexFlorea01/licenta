import { useNavigate } from 'react-router-dom';
import Meniu from '../Pagina principala/Meniu/Meniu';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Conectare = () => {

    let navigate = useNavigate();

    const[dateIntrare, seteazaDateIntrare] = useState({
        email:'',
        parola:'',
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
        if(dateIntrare.email.length == 0 || dateIntrare.parola.length == 0)
        {
            console.log("Nu ai completat unul dintre campuri!")
        }
        else
        {
            axios.post('http://localhost:5000/api/user/login',dateIntrare)
            .then((res)=>{
                console.log("login:",res)
                window.localStorage.setItem('token',res.data.token)
                navigate('/administrare');
            })
            .catch(err=>console.log(err))
        }
    }

    return ( 
        <div className="signup-container">
            <Meniu/>
            <div className="sign-up-container-under-menu">
                <div className="sign-up-container-center-form">
                    <div className="sign-up-container-title">
                        <div className="sign-up-title-padding">
                            <span>Conectare</span>
                        </div>
                    </div>
                    <div className="sign-up-container-form-container">
                        <div className="sign-up-form-container-padding">
                            <form className="sign-up-form">
                                <label>
                                    <span>Email</span>
                                    <input type="text" name="email" onChange={schimbaDateIntrare}/>
                                </label>
                                <label>
                                    <span>Parola</span>
                                    <input type="password" name="parola" onChange={schimbaDateIntrare}/>
                                </label>

                                <label className="submit-btn-label">
                                    <button onClick={trimiteModifIntrari}>Conectare</button>
                                </label>
                                <label className="change-state-signin-signup">
                                    <p onClick={()=>{navigate('/inregistrare')}}>Nu ai deja un cont? Inregistreaza-te.</p>
                                </label>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Conectare;