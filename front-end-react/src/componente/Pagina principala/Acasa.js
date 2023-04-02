import './Acasa.css';

import Background from './Background/Background';
import Footer from './Footer/Footer';
import Meniu from './Meniu/Meniu';
import Cautare from './MotorCautare/Search';
import Servicii from './Servicii/Servicii';

const Acasa = () => {
    return ( 
        <div class="home-container">
        <Meniu/>
        <Background/>
        <Cautare/>
        <Servicii/>
        <Footer/>
        </div>
     );
}
 
export default Acasa;