import './Proprietate.css';
import React from'react';
import { useEffect } from 'react';
import Footer from '../Pagina principala/Footer/Footer';
import Meniu from '../Pagina principala/Meniu/Meniu';
import Slider from "react-slick";

import RightArrowIcon from '../../imagini/right-arrow.png';

const AdminProprietate = () => {

    return ( 
         <>
        {content}
        </>
     );
}
 




const Proprietate = ({data}) => {

    useEffect(()=>{
        console.log("data in proprietate", data);
    },[])

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
                {/* <PropertyMap lat={data.lat} long={data.long}/> */}
            </div>
            <div className="property-others">
                <div className="others-similar-props">
                       Alte Proprietati
                </div>
                <div className="border-separator-desc"></div>
                <div className="other-container">
                    {/* <OtherProperty /> */}
                </div>
            </div>
            <Footer />
       </div>
     );
}
 
export default Proprietate;