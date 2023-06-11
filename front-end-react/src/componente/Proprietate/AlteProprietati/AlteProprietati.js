import React,{ useEffect, useState } from "react";
import './AlteProprietati.css';
import axios from 'axios';

import Material from '../../../imagini/material.png';
import Status from '../../../imagini/status.png';
import Tip from '../../../imagini/tip.png';

const AlteProprietati = () => {


    const[ properties, setProperties] = useState(null);

    useEffect(async ()=>{
        const config = {
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'auth-token': localStorage.getItem('token') 
            }}

            try{
                await axios.get('http://localhost:5000/api/user/AlteProprietati',config)
                .then((res)=>{
                    console.log(res)
                    setProperties(res.data.random);
                })
                .catch(err=>console.log(err))
                
            }
            catch(err)
            {
                console.log(err);
            }
    },[])

    return (
         // am pus <> altfel primesc eroare de la map
        <>
        {
            properties == null ? null:
            <div className="other-prop-contaier">
                {properties.map((el)=>{
                    console.log("Element mapa", el)
                    return(
                        <div className="other-item-container">
                            <div className="other-item-padding">
                                <div className="other-item-photo">
                                    <img src={el.imagini[0]} alt="img" />
                                </div>
                                <div className="other-item-middle-info">
                                    <div className="other-middle-title">
                                        {el.nume}
                                    </div>
                                    <div className="other-middle-infos">
                                        <div className="middle-info-box" title="material">
                                            <img src={Material} alt="material" />
                                            <span>{el.material}</span>
                                        </div>
                                        <div className="middle-info-box" title="status">
                                            <img src={Status} alt="status" />
                                            <span>{el.status}</span>
                                        </div>
                                        <div className="middle-info-box">
                                            <img src={Tip} alt="status" />
                                            <span>{el.tip}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="other-item-bottom-info">
                                    <div className="other-item-bottom-info-box">
                                        <div className="bottom-info-box-proce-itself">
                                            <span>{el.pret} $</span>
                                        </div>
                                    </div>
                                    <div className="other-item-bottom-info-box">
                                        <div className="other-item-bottom-btn-redirect">
                                            <div className="btn-itself" onClick={()=>{
                                                window.location.replace(`/proprietate/${el._id}`)
                                            }}>
                                                 {/* window.location.replace  înlocuiește adresa URL curentă a paginii cu  noua adresă URL generată din ruta /property/ concatenată cu _id-ul proprietății el (pagina pe care dau click). */}
                                                <span>Vezi Detalii</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        }
        </>
     );
}
 
export default AlteProprietati;