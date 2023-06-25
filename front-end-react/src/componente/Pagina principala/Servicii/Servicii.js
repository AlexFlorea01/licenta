import './Servicii.css';
import HomeIcon from '../../../imagini/house.png';
import PadLock from '../../../imagini/security.png';
import SettingsIcon from '../../../imagini/furniture.png';
import GoalIcon from '../../../imagini/support.png';
import React from'react';


const Servicii = () => {
    const text1 = 'Căutați o casă de vis? Cu noi puteți să descoperiți o oază de confort și liniște, cu design sofisticat și amenajări de înaltă calitate. Transformați-vă visul în realitate!'
    const text2 = 'Alegeți cu încredere din selecția noastră de proprietăți verificate. Echipa noastră de experți a inspectat fiecare detaliu, asigurându-vă că veți găsi calitate și autenticitate în fiecare proprietate.'
    const text3 = 'Bucurați-vă de confortul și eleganța mobilierului nou-nouț în fiecare proprietate. Designul modern și atenția la detalii vă vor impresiona, transformând fiecare casă într-un cămin plin de stil.'
    const text4 = 'Explorați orice proprietate în ritmul dumneavoastră! Cu opțiunea de vizionare disponibilă 24 de ore pe zi, 7 zile pe săptămână, puteți programa vizitele în funcție de programul dumneavoastră.'
    return (  
        <div className="best-services-container">
            <div className="best-services-title">
                    <div className="best-services-align-under-search">
                        <div className="best-services-align-title-center">
                            <div className="best-services-main-title">
                                <span>Servicii premium</span>
                            </div>
                            <div className="best-services-second-title">
                                <span>
                                    <i>Oferim cele mai bune servicii de pe piață</i>
                                </span>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="best-services-cards-container">
                <CardServices icon={HomeIcon} title='Găsește-ți casa visurilor' description={text1}/>
                <CardServices icon={PadLock} title='Proprietăți verificate' description={text2}/>
                <CardServices icon={SettingsIcon} title='Mobilier nou' description={text3}/>
                <CardServices icon={GoalIcon} title='Vizionare 24/7' description={text4}/>
            </div>
        </div>
    );
}

const CardServices = ({icon,title,description})=>
{
    return(
        <div className="card-container">
            <div className="card-container-padding">
                <div className="card-container-icon-section">
                    <img src={icon} />
                </div>
                <div className="card-container-title-section">
                    <span>{title}</span>
                </div>
                <div className="card-container-content-section">
                    <span>{description}</span>
                </div>
            </div>
        </div>
    )
}
export default Servicii;