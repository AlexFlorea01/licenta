import './Meniu.css';
import './Meniu2.css';

import Phone from '../../../imagini/phone.png';
import Facebook from '../../../imagini/facebook.png';
import Instagram from '../../../imagini/instagram.png';
import Whatsapp from '../../../imagini/whatsapp.png';
import Logo from '../../../imagini/logo.png';

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Meniu = () => {

    let navigate=useNavigate();

    return (
        <div className="home-sticky-menu">
        <div className="menu-container">

            <div className="upper-menu">
                <div className="contact-menu">
                    <Link to="https://web.whatsapp.com/">
                    <img src={Phone} alt="phonephoto" />
                    </Link>
                    <span>0757.758.057</span>
                    <div className="upper-menu-social-media-contaier">
                        <Link to="https://www.facebook.com/alex.florea.94?ref=tn_tnmn">
                            <img src={Facebook} alt="facebookphoto" />
                        </Link>
                        <Link to="https://www.instagram.com/alex_florea02/">
                            <img src={Instagram} alt="instagramphoto" />
                        </Link>
                        <Link to="https://web.whatsapp.com/">
                            <img src={Whatsapp} alt="wappphoto" />
                        </Link>
                    </div>
                </div>
                <div className="right-upper-menu">
                    <button id="signup-btn"> 
                        Conectare
                    </button>
                </div>
            </div>

            <div className="lower-menu">
                <div className="lower-menu-logo" onClick={()=>{navigate('/')}}>
                    <img src={Logo} alt="logo"/>
                    <span className="logo-text">
                        <b>
                            <p>Alex</p> Imobiliare
                        </b>
                    </span>
                </div>
                <div className="lower-menu-buttons">
                <nav>
                    <ul>
                        <li class="sub-menu-parent" tab-index="0">
                        <a >Acasă &#9660;</a>
                        <ul class="sub-menu">
                            <li><a onClick={()=>{navigate('/')}} >Pagina Principală</a></li>
                        </ul>
                        </li>
                        <li class="sub-menu-parent" tab-index="0">
                        <a href="#">Contul tău &#9660;</a>
                        <ul class="sub-menu">
                            <li><a >Comectare</a></li>
                            <li><a >Inregistrare</a></li>
                        </ul>
                        </li>
                        <li class="sub-menu-parent" tab-index="0">
                        <a href="#">Despre noi &#9660;</a>
                        <ul class="sub-menu">
                            <li><a onClick={()=>{navigate('/despre')}}>Cum am inceput..</a></li>
                            <li><a onClick={()=>{navigate('/despre')}}>Unde ne gasesti..</a></li>
                        </ul>
                        </li>

                    </ul>
                </nav>
                </div>

            </div>
        </div>
        </div>
     );
}
 
export default Meniu;