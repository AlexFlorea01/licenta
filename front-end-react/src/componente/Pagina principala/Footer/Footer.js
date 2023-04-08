import './Footer.css';
import PhoneIcon from '../../../imagini/phone.png';
import MailIcon from '../../../imagini/gmail.png';
import Instagram from '../../../imagini/instagram.png';
import Facebook from '../../../imagini/facebook.png';
import Whatsapp from '../../../imagini/whatsapp.png';

import { useNavigate,Link } from 'react-router-dom';


const Footer = () => {

    let navigate=useNavigate();

    return ( <div className="footer-container">
            <div className="footer-container-padding">
                <div className="left-footer-content">
                    <span><h2>Alex Imobiliare</h2></span>
                    <span><h4>Noi îți îndeplinim visele</h4></span>
                    <span><h5>Bulevardul Chimiei, nr.20</h5></span>
                    <span className="inline-elements">
                        <img src={PhoneIcon} alt="phone icon" /> 
                        <h5 style={{marginLeft: '10px'}}>Tel. : +40757758057 </h5>
                    </span>
                    <span className="inline-elements">
                        <img src={MailIcon} alt="phone icon" /> 
                        <h5 style={{marginLeft: '10px'}}>Email : alex02florea@gmail.com</h5>
                    </span>
                    <span></span>

                    <div className="social-media-footer-container">
                        <Link to="https://www.facebook.com/alex.florea.94?ref=tn_tnmn">
                            <img src={Facebook} alt="fb-icon" className="blue-hover"/>
                        </Link>
                        <Link to="https://www.instagram.com/alex_florea02/">
                            <img src={Instagram} alt="fb-icon" className="blue-hover"/>
                        </Link>
                        <Link to="https://web.whatsapp.com/">
                            <img src={Whatsapp} alt="fb-icon" className="green-hover"/>
                        </Link>
                    </div>
                </div>
                <div className="right-footer-content">
                    <div className="right-footer-link-category">
                        <div className="right-footer-links-title">
                            Link-uri utile
                        </div>
                        <div className="right-footer-underline-title">

                        </div>

                        <div className="right-footer-links-link">
                            <span onClick={()=>{navigate('/')}}>Acasă</span>
                            <span onClick={()=>{navigate('/conectare')}}>Conectare</span>
                            <span onClick={()=>{navigate('/inregistrare')}}>Înregistrare</span>
                            <span onClick={()=>{navigate('/despre')}}>Despre noi</span>
                        </div>

                    </div>

                </div>
            </div>
        </div> 
        );
}
 
export default Footer;