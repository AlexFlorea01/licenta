import './Inregistrare.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Meniu from '../Pagina principala/Meniu/Meniu';

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
        if(dateIntrare.name.length == 0 || dateIntrare.email.length == 0 || dateIntrare.password.length == 0)
        {
            console.log("Nu ai completat unul dintre campuri!")
        }
        else
        {

        }
    }
     

    return (
        <div className="signup-container">
            <Meniu/>
            <div className="sign-up-container-under-menu">
                <div className="sign-up-container-center-form">
                    <div className="sign-up-container-title">
                        <div className="sign-up-title-padding">
                            <span>Inregistrare</span>
                        </div>
                    </div>
                    <div className="sign-up-container-form-container">
                        <div className="sign-up-form-container-padding">
                            <form className="sign-up-form">
                                <label>
                                    <span>Nume</span>
                                    <input type="text" name="name" onChange={schimbaDateIntrare}/>
                                </label>
                                <label>
                                    <span>Email</span>
                                    <input type="text" name="email" onChange={schimbaDateIntrare}/>
                                </label>
                                <label>
                                    <span>Parola</span>
                                    <input type="password" name="password" onChange={schimbaDateIntrare}/>
                                </label>
                                <label>
                                    <span>Repeta parola</span>
                                    <input type="password" name="doublePassword" onChange={schimbaDateIntrare}/>
                                </label>
                                <label className="submit-btn-label">
                                    <button onClick={trimiteModifIntrari}>Inregistrare</button>
                                </label>
                                <label className="change-state-signin-signup">
                                    <p onClick={()=>{navigate('/conectare')}}>Ai deja un cont?Conecteaza-te.</p>
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