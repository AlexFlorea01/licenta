import './Conectare.css';
import { useNavigate } from 'react-router-dom';
import Meniu from '../Pagina principala/Meniu/Meniu';

const Conectare = () => {

    let navigate = useNavigate();

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
                                    <input type="text" name="email"/>
                                </label>
                                <label>
                                    <span>Parola</span>
                                    <input type="password" name="password"/>
                                </label>

                                <label className="submit-btn-label">
                                    <button >Conectare</button>
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