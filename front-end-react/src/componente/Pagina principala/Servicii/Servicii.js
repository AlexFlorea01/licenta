import './Servicii.css';
import HomeIcon from '../../../imagini/house.png';
import PadLock from '../../../imagini/security.png';
import SettingsIcon from '../../../imagini/furniture.png';
import GoalIcon from '../../../imagini/support.png';


const Servicii = () => {
    const text1 = '1_Imobiliarele se referă la deținerea de bunuri imobile sau active de către o persoană fizică sau o companie, care astfel dobândesc drepturi asupra acesteia și posibilitatea de a obține beneficii din exploatarea sa economică.'
    const text2 = '2_Imobiliarele se referă la deținerea de bunuri imobile sau active de către o persoană fizică sau o companie, care astfel dobândesc drepturi asupra acesteia și posibilitatea de a obține beneficii din exploatarea sa economică.'
    const text3 = '3_Imobiliarele se referă la deținerea de bunuri imobile sau active de către o persoană fizică sau o companie, care astfel dobândesc drepturi asupra acesteia și posibilitatea de a obține beneficii din exploatarea sa economică.'
    const text4 = '4_Imobiliarele se referă la deținerea de bunuri imobile sau active de către o persoană fizică sau o companie, care astfel dobândesc drepturi asupra acesteia și posibilitatea de a obține beneficii din exploatarea sa economică.'
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
                <CardServices icon={PadLock} title='Proprietăți securizate' description={text2}/>
                <CardServices icon={SettingsIcon} title='Mobilare inclusă' description={text3}/>
                <CardServices icon={GoalIcon} title='Suport online' description={text4}/>
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