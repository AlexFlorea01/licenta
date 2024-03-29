import './Administrare.css';
import LogoIcon from '../../imagini/logo.png';

import { useNavigate } from 'react-router-dom';
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Cumpara from './Cumpara/Cumpara';
import Vinde from './Vinde/Vinde';


const Administrare = () => {

    let navigate = useNavigate();

    const [haveAcces, setHaveAcces] = useState(false);

    useEffect(async ()=>{

        let localToken = window.localStorage.getItem('token')
        if(localToken == undefined || localToken == '') navigate('/conectare');

        axios.post('http://localhost:5000/api/user/check-token',{token: localToken})
            .then(res=>{
                console.log(res)
                setHaveAcces(true)
            })
        .catch((err)=>{
            console.log("forbidden pagE")
            navigate('/conectare');
        })

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

        <>
        {
            haveAcces == false ? <p>In curs verificare token...</p> :
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
                            Cumpără
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
        }
        </>
        
     );
}
 
export default Administrare;