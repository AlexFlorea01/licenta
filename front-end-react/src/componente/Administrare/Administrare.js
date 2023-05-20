import React,{useEffect} from 'react';
import './Administrare.css';
import LogoIcon from '../../imagini/logo.png';
import { useNavigate } from 'react-router-dom';


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
     

    return ( 
        <div className="home-container">
            <div className="home-menu-bar">
                <div className="home-menu-bar-nav">
                    <div className="dashboard-menu-logo-container">
                        <img src={LogoIcon} alt='logo icon' onClick={()=>{navigate('/')}}/>
                    </div>
                    <div className="home-nav-buy-container">
                        <span 
                            // className={selectedScreen == 'buy' ? 'selected-span':''}
                        >
                            Buy
                        </span>
                    </div>
                    <div className="home-nav-sell-container">
                        <span 
                            // className={selectedScreen == 'sell' ? 'selected-span':''}
                        >
                            Sell
                        </span>
                    </div>
                </div>
                <div className="home-menu-user-icon">
                    <div className="log-out-btn-home" >
                        <span onClick={logOutAction}>Log out</span>
                    </div>
                </div>
            </div>
            <div className="home-content">
                {/* {selectedScreen == 'buy'?
                    <Buy />
                    :
                    <Sell />
                } */}
            </div>
        </div>
     );
}
 
export default Administrare;