import './Administrare.css';
import LogoIcon from '../../imagini/logo.png';

import { useNavigate } from 'react-router-dom';
import React,{useEffect, useState} from 'react';

import Cumpara from './Cumpara/Cumpara';
import Vinde from './Vinde/Vinde';


const Administrare = () => {

    let navigate = useNavigate();

    useEffect(()=>{
        let token = window.localStorage.getItem('token')
        // axios.post(/api/verifica-token,{}) - de implementat asa cu functie separata care verifica token-ul iar eu verific doar raspunsul pozitiv/negativ aici
        if(token == undefined || token !== 'abc')
        {
            navigate('/conectare');
        }
        
    },[])

    const logOutAction = () => {
        window.localStorage.removeItem('token')
        navigate('/conectare');
    }

    const [ecranSelectat, seteazaEranul] = useState('vinde');
     
    const schimbaEcranul = (ecran)=>{
            if(ecran == 'vinde')
            {
                seteazaEranul('vinde')
            }
            else if(ecran == 'cumpara')
            {
                seteazaEranul('cumpara')
            }
        }
    return ( 
        <div className="home-container">
            <div className="home-menu-bar">
                <div className="home-menu-bar-nav">
                    <div className="dashboard-menu-logo-container">
                        <img src={LogoIcon} alt='logo icon' onClick={()=>{navigate('/')}}/>
                    </div>
                    <div className="home-nav-buy-container">
                        <span 
                            className={ecranSelectat == 'cumpara' ? 'selected-span':''}
                            onClick={()=>{schimbaEcranul('cumpara')}}v
                        >
                            Cumpara
                        </span>
                    </div>
                    <div className="home-nav-sell-container">
                        <span 
                            className={ecranSelectat == 'vinde' ? 'selected-span':''}
                            onClick={()=>{schimbaEcranul('vinde')}}
                        >
                            Vinde
                        </span>
                    </div>
                </div>
                <div className="home-menu-user-icon">
                    <div className="log-out-btn-home" >
                        <span onClick={logOutAction}>Deconectare</span>
                    </div>
                </div>
            </div>
            <div className="home-content">
                {ecranSelectat == 'cumpara'?
                    <Cumpara/>
                    :
                    <Vinde/>
                }
            </div>
        </div>
     );
}
 
export default Administrare;