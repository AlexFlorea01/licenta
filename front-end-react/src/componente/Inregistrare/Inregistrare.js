import './Inregistrare.css';
import { useNavigate } from 'react-router-dom';

const Inregistrare = () => {
    
    let navigate = useNavigate;

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
                                    <input type="text" name="name"/>
                                </label>
                                <label>
                                    <span>Email</span>
                                    <input type="text" name="email"/>
                                </label>
                                <label>
                                    <span>Parola</span>
                                    <input type="password" name="password"/>
                                </label>
                                <label>
                                    <span>Repeta parola</span>
                                    <input type="password" name="doublePassword"/>
                                </label>
                                <label className="submit-btn-label">
                                    <button>Inregistrare</button>
                                </label>
                                <label className="change-state-signin-signup">
                                    <p onClick={()=>{navigate('/login')}}>Ai deja un cont?Conecteaza-te.</p>
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