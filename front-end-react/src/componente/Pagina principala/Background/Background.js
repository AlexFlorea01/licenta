import Background1 from '../../../imagini/background1.jpg';
import './Background.css';

const Background = () => {
    return (  
        <div class="hero parallax-content"><img src={Background1} alt="Poza Background"/>
            <div class="hero__title">
                <h1>Pentru un nou inceput!</h1>
            </div>
        </div>
    );
}
 
export default Background;