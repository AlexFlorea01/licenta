import './Search.css';
import { useState,useEffect } from 'react';
const Cautare = () => {

        const[dateIntrare, seteazaDateIntrare] = useState({
        locatie:'',
        tip:'',
        status: '',
        material: '',
        pret_de_la: '',
        pret_pana_la:'',
        camere: '',
        bai: '',
        paturi: '',
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

    const trimiteModifIntrari = (event) => {
        event.preventDefault(); // previne reincarcarea browserului la submit buton
        
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
                                        <option value="Moldova">Moldova</option>
                                        <option value="Maramureș">Maramureș</option>
                                        <option value="Oltenia">Oltenia</option>
                                        <option value="Ardeal">Ardeal</option>
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
                                    <select  onChange={schimbaDateIntrare} name="tip">
                                        <option value="">-</option>
                                        <option value="apartament">Apartament</option>
                                        <option value="building area">Building area</option>
                                        <option value="house">House</option>
                                        <option value="villa">Villa</option>
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
                                        <option value="available">Available</option>
                                        <option value="rent agreed ">Rent agreed </option>
                                        <option value="reserved">Reserved</option>
                                        <option value="sell agreed">Sell agreed</option>
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
                                        <option value="block">Block</option>
                                        <option value="brick">Brick</option>
                                        <option value="mixed">Mixed</option>
                                        <option value="prefab">Prefab</option>
                                        <option value="stone">Stone</option>
                                        <option value="wood">Wood</option>
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
                                            <option value="+1">+1</option>
                                            <option value="+2">+2</option>
                                            <option value="+4">+3</option>
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
                                            <option value="+1">+1</option>
                                            <option value="+2">+2</option>
                                            <option value="+4">+3</option>
                                        </select>
                                    </div>
                            </div>
                            <div className="form-box-container">
                                    <div className="box-title-container">
                                        <span>
                                            Nr. paturi
                                        </span>
                                    </div>
                                    <div class="select">
                                        <select onChange={schimbaDateIntrare} name="paturi">
                                        <option value="">-</option>
                                            <option value="+1">+1</option>
                                            <option value="+2">+2</option>
                                            <option value="+4">+3</option>
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
            </div>
    );
}
 
export default Cautare;