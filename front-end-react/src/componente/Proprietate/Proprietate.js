import React from'react';
import './Proprietate.css';
import { useEffect, useState } from 'react';

import Footer from '../Pagina principala/Footer/Footer';
import Meniu from '../Pagina principala/Meniu/Meniu';
import MapaProprietate from './MapaPropriete/MapaProprietate';
import AlteProprietati from './AlteProprietati/AlteProprietati';
import { useNavigate } from 'react-router-dom';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {useParams} from 'react-router-dom'
import axios from 'axios';

import RightArrowIcon from '../../imagini/right-arrow.png';



const AdminProprietate = (proprietati) => {

    let navigate = useNavigate();

    const [haveAcces, setHaveAcces] = useState(false);



    const [continut, seteazaContinut] = useState(<p>Loading</p>);   
    const params = useParams();


    useEffect(()=>{
        //useParams() este utilizat pentru a extrage valoarea parametrului id
        let idTest = params.id;
        console.log("idTest:",idTest);
        logicDecide(idTest);
    },[])

    const InvalidProperty = ({text})=>{
    return(
        <div className="">
            <Meniu/>
            <span>{text}</span>
        </div>
    )
    }

    const logicDecide = async(idPropperty)=>{
        console.log("test param:", idPropperty)
        //console.log(localStorage.getItem('token'))
        const config = {
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                //'auth-token': localStorage.getItem('token') 
            },
            body:{
                id_to_check: idPropperty
            }
        }
        console.log("config:",config)
        try{
            await axios.post('http://localhost:5000/api/user/gasesteProprietate',config)
            .then((ceva)=>{
                console.log("SUCCES:",ceva)
                seteazaContinut(<Proprietate data={ceva.data.gasit}/>)
            })
            .catch((err)=>{
                if(err.response.status == 404 )
                {
                    seteazaContinut( <InvalidProperty 
                                    text="This property does not exists!"
                                />)
                }
                else if(err.response.status == 500)
                {
                    seteazaContinut(<InvalidProperty
                                    text="Internal server problem! (500)"
                                />)
                }
                else if(err.response.status == 403)
                {
                    seteazaContinut(<InvalidProperty
                        text="You need to be logged to see the complete property!"
                    />)
                }
            })
            

             
        }
        catch(err)
        {
            console.log("PROBLEM")
            seteazaContinut(<InvalidProperty
                text="Internal server problem! (500)"
            />)
        }
        

    }
    useEffect(async ()=>{

            let localToken = window.localStorage.getItem('token')
            if(localToken == undefined || localToken == '') navigate('/conectare');

            axios.post('http://localhost:5000/api/user/check-token',{token: localToken})
                .then(res=>{
                    console.log("have acces:",res)
                    setHaveAcces(true);
                    // setMyUserId(res.data._id)
                })
            .catch((err)=>{
                console.log("forbidden pagE")
                navigate('/conectare');
            })

    },[])
    return ( 
         <>
            {
                haveAcces == false ? <p>In curs verificare token...</p> :continut
            }
        </>
     );
}
 




const Proprietate = ({data}) => {
    let navigate = useNavigate();
    
    const params = useParams();

    const [myUserID, setMyUserId] = useState(undefined);
    const [myProp, setMyProp] = useState(false);
    const checkMyProp = async ()=>{
        //params.id;
        //myUserID
        //=> seteaza myProp (true, false)

        await axios.post('http://localhost:5000/api/user/ownership',{
            user: myUserID,
            prop: params.id
        })
        .then((dataResp)=>{
            console.log(" ownsership resp1:",dataResp.data)
            setMyProp(true);
        })
        .catch((err)=>{
            console.log("nu se poate verifica ownership:", err)
        })

    }

    useEffect(async ()=>{

        let localToken = window.localStorage.getItem('token')
        if(localToken == undefined || localToken == '') navigate('/conectare');

        axios.post('http://localhost:5000/api/user/check-token',{token: localToken})
            .then(res=>{
                console.log("have acces:",res)
                setMyUserId(res.data._id)
            })
        .catch((err)=>{
            console.log("forbidden pagE")
            navigate('/conectare');
        })

    },[])
    useEffect(()=>{
        console.log("myUserID upate:",myUserID)
        if(myUserID !== undefined)
        {
            checkMyProp()
        }
    },[myUserID]) 

    const deleteProp = ()=>{
        let propIdToDelete = params.id;
        console.log("delte prop:", propIdToDelete)
        axios.post('http://localhost:5000/api/proprietati/sterge',{
            idProp: propIdToDelete
        })
        .then(res=>{
            console.log("delete prop ok:", res.data)
            navigate("/")
        })
        .catch((err)=>{
            console.log("nu se poate sterge prop:", err)
        })

    }
    //setari slider
    const setari = {
        dots: true,
        fade:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slides"
    }


    const [review, setReview] = useState({
        text: '',
        rating: 1
    })
    const handleTextReview = (e)=>{
        setReview((prev)=>{
            let copy = {...prev}
            copy['text'] = e.target.value
            return copy
        })
    }
    const handleRatingChange = (e)=>{
        setReview((prev)=>{
            let copy = {...prev}
            copy['rating'] = e.target.value
            return copy
        })
    }

    const sendReview = async ()=>{
        if(review.text === '' || review.text === ' ') {
            alert('Completeza campul text dinr review')
            return 
        }
        
        let obj ={
             propId: params.id,
            text: review.text,
            rating: review.rating,
            userId: myUserID
        }
         await axios.post('http://localhost:5000/api/proprietati/adauga-review',{...obj})
                .then(res=>{
                    console.log("resp add review:", res.data)
                    alert("review adaugat cu succes")
                })
            .catch((err)=>{
                console.log("can't add review")
                alert("can't add review")
            })
    }
    const [oldReview, setOldReview] = useState([]);
    const fetchOldReview = async ()=>{
        await axios.post('http://localhost:5000/api/proprietati/review',{
            propId: params.id
        })
            .then(res=>{
                console.log("old review:", res.data)
                setOldReview(res.data);
            })
            .catch((err)=>{
                console.log("can't get old review")
            })
    }
    useEffect(()=>{
        fetchOldReview();
    },[])
    return ( 
        <div className="property-page-container">
            <Meniu showSignUp={true}/>
            <div className="property-page-topper">

            </div>
            <div className="property-page-content">
                <div className="property-page-intro">
                    <div className="property-page-intro-title">
                        <div className="upper-intro-title">
                            <div className="upper-title-content">
                                {data.nume}
                            </div>
                            <div className="upper-title-infos">
                                {
                                    myProp == true ? <button className="delete-prop" onClick={deleteProp}>Delete</button> : null
                                }
                                <div className="upper-infos-box bg-orange">
                                    {data.status}
                                </div>
                                <div className="upper-infos-box bg-gray">
                                    {data.tip}
                                </div>
                            </div>
                        </div>
                        <div className="lower-intro-title">
                            <span>{data.pret} $</span>
                        </div>
                    </div>
                    <div className="property-page-intro-carousel">
                    <Slider {...setari}>
                        {
                            data.imagini.map((imagine)=>{
                                return(
                                    <div className="image-slide-show">
                                        <img src={imagine} alt="slide-image"/>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                    </div>

                </div>
            </div>
            <div className="property-page-description">
                <div className="property-description-title">
                    
                    <span>Descrierea Proprietatii</span>
                    <div className="border-separator-desc"></div>
                </div>
                <div className="property-description-content">
                        {data.descriere}
                </div>
            </div>
            <div className="property-overview">
                <div className="overview-padding-container">
                    <div className="title-overview">
                        <div className="title-overview-itself">
                            <span>Informatii generale</span>
                        </div>
                        <div className="border-separator-desc"></div>
                    </div>
                    <div className="content-overview">
                        <div className="content-overview-column">
                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    PRET:
                                </div>
                                <div className="content-elem-row">
                                    {data.pret} $
                                </div>
                            </div>
                            
                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    TIP:
                                </div>
                                <div className="content-elem-row">
                                    {data.tip}
                                </div>
                            </div>

                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    Disponibilitate:
                                </div>
                                <div className="content-elem-row">
                                    {data.status}
                                </div>
                            </div>

                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    MATERIAL:
                                </div>
                                <div className="content-elem-row">
                                    {data.material}
                                </div>
                            </div>

                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    NR CONTACT:
                                </div>
                                <div className="content-elem-row">
                                    {data.numarContact}
                                </div>
                            </div>

                        </div>
                        <div className="content-overview-column">

                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    STATUS:
                                </div>
                                <div className="content-elem-row">
                                    {data.status}
                                </div>
                            </div>
                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    NR CAMERE:
                                </div>
                                <div className="content-elem-row">
                                    {data.camere}
                                </div>
                            </div>
                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    NR BAI:
                                </div>
                                <div className="content-elem-row">
                                    {data.bai}
                                </div>
                            </div>
                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    ETAJE:
                                </div>
                                <div className="content-elem-row">
                                    {data.etaje}
                                </div>
                            </div>
                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    Locatie:
                                </div>
                                <div className="content-elem-row">
                                    {data.locatie}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="property-map-container">
                <MapaProprietate lat={data.lat} long={data.long}/>
                
            </div>
            <div className='property-reviews'>
                <div className='property-reviews-add'>
                    <h3> Adauga review</h3>
                    <textarea
                        onChange={handleTextReview}
                        value={review.text}
                        placeholder='review...'
                    >
                        
                    </textarea>
                    <div className='property-reviews-add-val'>
                        <span>Rating</span>
                        <select name="cars" id="cars" onChange={handleRatingChange} value={review.rating}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            </select>
                    </div>
                    <button onClick={sendReview}>
                        Adauga review
                    </button>
                </div>
                <div className='property-reviews-view'>
                    <h3> Alte reviews</h3>
                </div>
            </div>
            <div className="property-others">
                <div className="others-similar-props">
                       Alte Proprietati
                </div>
                <div className="border-separator-desc"></div>
                <div className="other-container">
                    <AlteProprietati/>
                </div>
            </div>
            <Footer />
       </div>
     );
}
 
export default AdminProprietate;