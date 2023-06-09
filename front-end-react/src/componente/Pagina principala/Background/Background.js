import Background1 from '../../../imagini/background1.jpg';
import './Background.css';
import React from'react';

const Background = () => {
    return (  
        <div class="main"><img src={Background1} alt="Poza Background"/>
            <div class="title">
                <h1>Pentru un nou început</h1>
            </div>
        </div>
    );
}
 
export default Background;