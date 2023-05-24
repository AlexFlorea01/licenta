import './Acasa.css';

import { useState } from 'react';

import Background from './Background/Background';
import Footer from './Footer/Footer';
import Meniu from './Meniu/Meniu';
import RezultateCautare from './MotorCautare/RezultateCautare/RezultateCautare';
import Cautare from './MotorCautare/Search';
import Servicii from './Servicii/Servicii';

const Acasa = () => {

    const [showResults, setShowResults] = useState(null);

    const changeHomeState = (newState)=>{
        console.log("update in acasa!:",newState);
        setShowResults(newState);
    }

    return ( 
        <div class="home-container">
        <Meniu/>
        <Background/>
        <Cautare changeHomeState={changeHomeState}/>
        {showResults == null ? null:
        <RezultateCautare filters={showResults}/>}
        <Servicii/>
        <Footer/>
        </div>
     );
}
 
export default Acasa;