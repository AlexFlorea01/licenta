import './Meniu.css';
import './Meniu2.css';
import Phone from '../../../imagini/phone.png';
import Facebook from '../../../imagini/facebook.png';
import Instagram from '../../../imagini/instagram.png';
import Whatsapp from '../../../imagini/whatsapp.png';
import Logo from '../../../imagini/logo.png';

const Meniu = () => {
    return (
        <div className="home-sticky-menu">
        <div className="menu-container">

            <div className="upper-menu">
                <div className="contact-menu">
                    <img src={Phone} alt="phonephoto" />
                    <span>0757.758.057</span>
                    <div className="upper-menu-social-media-contaier">
                    <img src={Facebook} alt="facebookphoto" />
                    <img src={Instagram} alt="instagramphoto" />
                    <img src={Whatsapp} alt="wappphoto" />  
                    </div>
                </div>
                <div className="right-upper-menu">
                    <button id="signup-btn"> 
                        Conectare
                    </button>
                </div>
            </div>

            <div className="lower-menu">
                <div className="lower-menu-logo">
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
                        <a >Acasa &#9660;</a>
                        <ul class="sub-menu">
                            <li><a >Pagina Principala</a></li>
                        </ul>
                        </li>
                        <li class="sub-menu-parent" tab-index="0">
                        <a href="#">Contul tau &#9660;</a>
                        <ul class="sub-menu">
                            <li><a >Comectare</a></li>
                            <li><a >Inregistrare</a></li>
                        </ul>
                        </li>
                        <li class="sub-menu-parent" tab-index="0">
                        <a href="#">Despre noi &#9660;</a>
                        <ul class="sub-menu">
                            <li><a >Cum am inceput..</a></li>
                            <li><a >Unde ne gasesti..</a></li>
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