import './Administrare.css';
import LogoIcon from '../../imagini/logo.png';
import { useNavigate } from 'react-router-dom';


const Administrare = () => {

    let navigate=useNavigate();

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
                        <span>Log out</span>
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