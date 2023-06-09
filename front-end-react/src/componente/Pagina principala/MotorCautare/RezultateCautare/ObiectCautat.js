import pozaCamera from '../../../../imagini/room.png';
import pozaEtaje from '../../../../imagini/floors.png';
import pozaBaie from '../../../../imagini/bath.png';
import './RezultateCautare.css';
import { useEffect } from 'react';
import React from'react';
import { useNavigate } from 'react-router-dom';

const ObiectCautat = ({obiect}) => {

    const navigate = useNavigate();

    const cutText = (string)=>{
        if(string.length < 193)
        {
            return string
        }
        else
        {
            let temp = string.slice(0.193); 
            return `${temp} ...`;
        }
    }

    return (
        <div className="search-results-content">

                <div className="search-result-item">
                    <div className="search-result-image-cont">
                        <img src={obiect.imagini[0]} alt="image"/>
                    </div>
                    <div className="search-result-item-content">
                        <div className="item-content-upper">
                            <div className="content-upper-title">
                                {obiect.nume}
                            </div>
                            <div className="content-upper-details">
                                <div className="upper-details-box">
                                    <img src={pozaCamera} alt="asd"/>
                                    <span>{obiect.camere} Camere</span>

                                </div>
                                <div className="upper-details-box">
                                    <img src={pozaEtaje} alt="asd"/>
                                    <span>{obiect.etaje} Etaje</span>
                                    
                                </div>
                                <div className="upper-details-box">
                                    <img src={pozaBaie} alt="asd"/>
                                    <span>{obiect.bai} Bai</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="item-content-lower">
                            <span>
                                {cutText(obiect.descriere)}
                            </span>
                        </div>
                        
                    </div>
                    <div className="search-input-item-price">
                        <div className="item-padding">
                            <span>$ {obiect.pret}</span>
                        </div>
                        <div className="item-padding" >
                            <button onClick={()=>{navigate(`/proprietate/${obiect._id}`)}}>VEZI</button>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default ObiectCautat;