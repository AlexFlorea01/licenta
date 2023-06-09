import './Cumpara.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from'react';

const Cumpara = () => {

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

    const schimbaDateIntrare = (ceTastezNouEvent)=>{
        seteazaDateIntrare((dateIntrareInitiale)=>{
            let  dateIntrareNoi = {...dateIntrareInitiale};
             dateIntrareNoi[ceTastezNouEvent.target.name] = ceTastezNouEvent.target.value; //.name in html diferit pentru fiecare select
            return  dateIntrareNoi;
        })
    }
    
    useEffect(()=>{
        console.log(dateIntrare)
    },[dateIntrare])

    //buton submit
    const trimiteModifIntrari = async (event) => {
        event.preventDefault(); // previne reincarcarea browserului la submit buton
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

            await axios.post('http://localhost:5000/api/user/proprietatiFiltrate',config)
            .then((resp)=>{
                console.log("sss",resp.data);
                console.log("RESPOnse in buy",resp.data.rasp);
                //setItems(resp.data.rasp);
            })
        }
        catch(err){
            console.log(err);
        }
    }

    return ( 
        <div className="buy-container">
            <div className="map-buy-container">
                {/* <MapBuy data={mapItems}/> */}
            </div>

            <div className="content-container">
                <div className="content-container-search">
                    <form>
                        <div className="buy-upper-form">
                        <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Locație
                                    </span>
                                </div>
                                <div class="select">
                                    <select  onChange={schimbaDateIntrare} name="locatie">
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
                                        <option value="Apartament">Apartament</option>
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
                            
                        </div>
                        <div className="buy-middle-form">
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

                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Preț până la
                                    </span>
                                </div>
                                <div className="number-input-box">
                                    <input onChange={schimbaDateIntrare} type="number"  name="pret_pana_la"/>
                                </div>
                            </div>

                            <div className="form-box-container">
                                    <div className="box-title-container">
                                        <span>
                                            Nr. camere
                                        </span>
                                    </div>
                                    <div class="select">
                                        <select  onChange={schimbaDateIntrare} name="camere">
                                            <option value="">-</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                            </div>
                                                    


                        </div>
                        <div className="buy-lower-form">
                        <div className="form-box-container">
                                    <div className="box-title-container">
                                        <span>
                                            Nr. bai
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
                            <div className="form-box-container" onClick={trimiteModifIntrari}>
                                <span style={{color: 'transparent',marginBottom: '5px'}}>spatiu</span>
                                    <div className="box-container-submit-btn">
                                        <span>CAUTĂ</span>
                                    </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="content-container-search-results" >
                {
                    // items == null ? null :
                    // items.map((el)=>{
                    //     return (
                    //     <div className="test-class" >
                    //         {/* <ItemSearched obj={el} />  */}
                    //     </div>
                    //     )
                    // })
                }
                </div>
            </div>
        </div>
    )
}
 
export default Cumpara;