import './Vinde.css';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Mapa from '../Mapa/Mapa';

const Vinde = () => {

        const navigate = useNavigate();

    const[dateIntrare, seteazaDateIntrare] = useState({
        nume: '',
        numarContact: '',
        tip: '',
        descriere: '',
        status:'',
        material: '',
        pret: 0,
        camere: 0,
        bai: 0,
        etaje: 0,
        locatie: '',
        imagini: [],
        lat:0,
        long:0
    })
   
    const [showError, setShowError] = useState({
        text: 'Vinde-ti proprietatea',
        className: ''
    });

    useEffect(()=>{
        console.log("update show error", showError)
    },[showError])

    useEffect(()=>{
        console.log("update dateIntrare", dateIntrare)
    },[dateIntrare])

    // useEffect(()=>{
    //     store.subscribe(()=>{
    //         console.log("store updated!")
    //         console.log(store.getState())
    //         setdateIntrare((prev)=>{
    //             let state = store.getState().mapCoord;
    //             return{
    //                 ...prev,
    //                 lat: state.lat,
    //                 long: state.long
    //             }
    //         })
    //     })
    // },[])
    


    const schimbaDateIntrare = (e)=>{

        setShowError({
            text: 'Vinde-ti proprietatea',
            className: ''
        });

        if(e.target.name == 'imagini')
        {
            seteazaDateIntrare((prev)=>{
                prev[e.target.name] = getImagesLinks(e.target.value);
                return {...prev}
            })
        }
        else
        {
            seteazaDateIntrare((prev)=>{
                prev[e.target.name] = e.target.value;
                return {...prev}
            })
        }

    }

        const getImagesLinks = (string)=>
    {
        let array = string.split(',');
        let final_string = [];
        array.forEach((el)=>{
            if(el.length > 0)
            {
                console.log(el.length)
                console.log(el)
                final_string.push(el.trim())
            }

        })
        return final_string;
    }

    const trimiteModifIntrari = async (e)=>{
        e.preventDefault();

        if(dateIntrare.nume != '' && dateIntrare.numarContact != '' && dateIntrare.tip != '' && dateIntrare.descriere != ''  && dateIntrare.status  != '' && dateIntrare.material != ''&& dateIntrare.bai != ''&& dateIntrare.pret != ''&& dateIntrare.camere != ''&& dateIntrare.etaje != ''&& dateIntrare.locatie != '')
        {
            console.log("submit ok")
            console.log(dateIntrare);
            const config = {
                headers:{
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json',
                    //'auth-token': localStorage.getItem('token') 
                },
                body:{
                    ...dateIntrare
                }
            }

            try{

                await axios.post('http://localhost:5000/api/user/newsell',config)
                .then((ceva)=>{
                    console.log("redirect la pagina cu anuntul creat!")
                    // let new_link = ceva.dateIntrare.newProperty._id;
                    // console.log(ceva.dateIntrare.newProperty._id);
                    // navigate(`/property/${new_link}`)
                })
                //eroare prina de catch-ul cu un level mai afara
            }
            catch(err){
               console.log(err.response.status)
               if(err.response.status == 401 || err.response.status == 403)
               {
                //arat eroarea specifica
                   <span className='error-css'>You are unauthorized to do this action!</span>  

                   console.log("SETEZ STATE 403 401")
                   setShowError({
                       text: 'You are unauthorized to do this action!',
                       className: 'error-css'
                   })
                   console.log("You are unauthorized to do this action!")
               }
               else if(err.response.status == 400)
               {
                   <span className='error-css'>You are unauthorized to do this action!</span> 

                   setShowError({
                    text: 'There was a problem saving into dateIntrarebase!',
                    className: 'error-css'
                })
                   
               }
            }

        }
        else
        {
            console.log("not ok submit!")
            console.log(dateIntrare);

            setShowError({
                text: 'Complete all fields!',
                className: 'error-css'
            })
        }
        
    }

    return(
        <div className="selected-screen-container">
            <div className="selected-screen-map-container">
                <Mapa/>
            </div>
            <div className="selected-screen-right-content">
                <div className="selected-screen-right-content-padding">
                    <div className="sell-form-title">
                        <span className={showError.className}>{showError.text}</span>
                    </div>
                    <form className="sell-form">
                        <div className="triple-inputs">


                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Nume
                                    </span>
                                </div>
                                <div className="number-input-box">
                                    <input type="text" name="nume" onChange={schimbaDateIntrare}/>
                                </div>
                            </div>

                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Numar de contact
                                    </span>
                                </div>
                                <div className="number-input-box">
                                    <input type="number" name="numarContact" onChange={schimbaDateIntrare}/>
                                </div>
                            </div>

                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Tip
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

                        </div>

                        <div className="single-text-area-input">
                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Descriere:
                                    </span>
                                </div>
                                <div className="number-input-box">
                                    <textarea id="w3review1"  rows="4" cols="50" name="descriere" onChange={schimbaDateIntrare}/>
                                </div>
                            </div>
                        </div>


                    <div className="triple-inputs">

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
                                        Pret:
                                    </span>
                                </div>
                                <div className="number-input-box">
                                    <input type="number" name="pret" onChange={schimbaDateIntrare} />
                                </div>
                            </div>
                    </div>

                        <div className="triple-inputs">

                        <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Camere:
                                    </span>
                                </div>
                                <div className="number-input-box">
                                    <input type="number" name="camere" onChange={schimbaDateIntrare}/>
                                </div>
                            </div>

                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Bai:
                                    </span>
                                </div>
                                <div className="number-input-box">
                                    <input type="number" name="bai" onChange={schimbaDateIntrare}/>
                                </div>
                            </div>

                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Etaje:
                                    </span>
                                </div>
                                <div className="number-input-box">
                                    <input type="number" name="etaje" onChange={schimbaDateIntrare}/>
                                </div>
                            </div>


                        </div>
                        <div className="triple-inputs">
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
                        </div>

                        <div className='box-title-container' style={{padding: '0px 10px',}}>
                            <span>Punct marcat pe harta: {dateIntrare.long} long - {dateIntrare.lat} lat</span>
                        </div>

                        <div className="single-text-area-input">
                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Link-uri fotografii (separate de virgula):
                                    </span>
                                </div>
                                <div className="number-input-box">
                                    <textarea id="w3review" rows="4" cols="50" name="imagini" onChange={schimbaDateIntrare}/>
                                </div>
                            </div>
                        </div>

                        <div className="submit-btn-sell-form-container">
                            <div className="submit-btn-sell-form" onClick={trimiteModifIntrari}>
                                VINDE
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
}

export default Vinde;