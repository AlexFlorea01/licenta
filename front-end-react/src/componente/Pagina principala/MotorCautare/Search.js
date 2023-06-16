import './Search.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import React from'react';

const Cautare = ({changeHomeState}) => {

    const[dateIntrare, seteazaDateIntrare] = useState({
        locatie:'',
        tip:'',
        status: '',
        material: '',
        pret_de_la: '',
        pret_pana_la:'',
        camere: '',
        bai: '',
        etaje: '',
    })

    useEffect(()=>{
        Object.keys(dateIntrare).forEach((el)=>{
            if(dateIntrare[el] !== '')
            {
                setTipCautare(false);
                return 
            }
        })
    },[dateIntrare])

    const schimbaDateIntrare = (ceTastezNouEvent)=>{
        seteazaDateIntrare((dateIntrareInitiale)=>{
            let  dateIntrareNoi = {...dateIntrareInitiale};
             dateIntrareNoi[ceTastezNouEvent.target.name] = ceTastezNouEvent.target.value; //.name in html diferit pentru fiecare select
            return  dateIntrareNoi;
        })
    }
    
    useEffect(()=>{
        console.log("asdasdasdas:",dateIntrare)
    },[dateIntrare])


    const trimiteModifIntrari = () => {
        const config = {
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
            },
            body:{
                ...dateIntrare
            }
        }
        
        try{

            axios.post('http://localhost:5000/api/user/proprietatiFiltrate',config)
            .then((resp)=>{
                console.log("update cautare pag principala",resp.data);
                changeHomeState(resp.data);
            })
        }
        catch(err){
            console.log(err);
        }
    }

    const [tipCautare, setTipCautare] = useState(true);

    function preiaLatitudineLongitudine() {
        if (navigator.geolocation) {
            console.log("id ok")
            navigator.geolocation.getCurrentPosition(function(position) {
            var latitudine = position.coords.latitude;
            var longitudine = position.coords.longitude;
            console.log("Latitudine: " + latitudine);
            console.log("Longitudine: " + longitudine);

            axios.post('http://localhost:5000/api/user/propietatiLocatie',{
                lat: latitudine,
                long: longitudine
            })
            .then((resp)=>{
                console.log("update cautare locatie",resp.data);
                changeHomeState(resp.data);
            })
            .catch((err)=>{
                console.log("nu se po cauta prop dupa locatie")
            })

            return [latitudine, longitudine]
            
        });
        } else {
            console.log("Geolocalizarea nu este suportată de browser-ul tău.");
        }
    } 
    const cautaDupaLocatie = ()=>{
        console.log("enter 1")
        preiaLatitudineLongitudine()
    }

    const handleGenericClick = (event)=>{
        event.preventDefault(); // previne reincarcarea browserului la submit buton

        if(tipCautare == true)
        {
           cautaDupaLocatie() 
        }
        else 
        {
            trimiteModifIntrari()
        }

    }
    return (  
        <div className="home-search-component">
                <div className="home-search-form-itself">
                    <form className="home-form">
                        <div className="upper-form">
                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Locație
                                    </span>
                                </div>
                                <div class="select">
                                    <select onChange={schimbaDateIntrare} name="locatie">
                                        <option value="">-</option>
                                        <option value="Iasi">Iasi</option>
                                        <option value="Bucuresti">Bucuresti</option>
                                        <option value="Cluj">Cluj</option>
                                        <option value="Brasov">Brasov</option>
                                        <option value="Sibiu">Sibiu</option>
                                        <option value="Altele">Alta locatie</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Tipul proprietății
                                    </span>
                                </div>
                                <div class="select">
                                    <select onChange={schimbaDateIntrare} name="tip">
                                        <option value="">-</option>
                                        <option value="apartament">Apartament</option>
                                        <option value="Casa">Casa</option>
                                        <option value="Spatiu">Spatiu</option>
                                        <option value="Depozit">Depozit</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Disponibilitate
                                    </span>
                                </div>
                                <div class="select">
                                    <select onChange={schimbaDateIntrare} name="status">
                                        <option value="">-</option>
                                        <option value="Disponibil">Disponibil</option>
                                        <option value="Rezervata">Rezervat</option>
                                        <option value="In constructie">In constructie </option>
                                        <option value="In renovare">In renovare</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Material
                                    </span>
                                </div>
                                <div class="select">
                                    <select onChange={schimbaDateIntrare} name="material">
                                        <option value="">-</option>
                                        <option value="BCA">BCA</option>
                                        <option value="Prefabricate">Prefabricate</option>
                                        <option value="Caramida">Caramida</option>
                                        <option value="Lemn">Lemn</option>
                                        <option value="Piatra">Piatra</option>
                                        <option value="Metal">Metal</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Preț de la
                                    </span>
                                </div>
                                <div className="number-input-box">
                                    <input type="number" onChange={schimbaDateIntrare} name="pret_de_la"/>
                                </div>
                            </div>
                        </div>
                        <div className="lower-form">
                            <div className="form-box-container">
                                    <div className="box-title-container">
                                        <span>
                                            Preț până la
                                        </span>
                                    </div>
                                    <div className="number-input-box">
                                        <input type="number" onChange={schimbaDateIntrare} name="pret_pana_la"/>
                                    </div>
                            </div>
                        
                            <div className="form-box-container">
                                    <div className="box-title-container">
                                        <span>
                                            Nr. Camere
                                        </span>
                                    </div>
                                    <div class="select">
                                        <select onChange={schimbaDateIntrare} name="camere">
                                            <option value="">-</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                            </div>
                            
                            <div className="form-box-container">
                                    <div className="box-title-container">
                                        <span>
                                            Nr. băi
                                        </span>
                                    </div>
                                    <div class="select">
                                        <select onChange={schimbaDateIntrare} name="bai">
                                            <option value="">-</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                            </div>
                            <div className="form-box-container">
                                    <div className="box-title-container">
                                        <span>
                                            Nr. etaje
                                        </span>
                                    </div>
                                    <div class="select">
                                        <select onChange={schimbaDateIntrare} name="etaje">
                                            <option value="">-</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                            </div>
                            <div className="form-box-container" onClick={handleGenericClick}>
                                <span style={{color: 'transparent',marginBottom: '5px'}}>spatiu</span>
                                    <div className="box-container-submit-btn">
                                        <span>{tipCautare == true ? "Locatie": "Filtre"}</span>
                                    </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
    );
}
 
export default Cautare;