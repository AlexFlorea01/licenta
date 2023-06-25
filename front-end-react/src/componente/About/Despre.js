import './Despre.css';
import Meniu from '../Pagina principala/Meniu/Meniu';
import React from'react';

const Despre = () => {
    return ( 
         <div className="about-container">
            <Meniu/>
            <div className="about-content">
                <div className="about-content-title">
                    <span>Cine suntem noi?</span>
                </div>
                <div className="about-content-content">
                    <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bine ați venit la Alex Imobiliare! Suntem o echipă dedicată și pasionată de domeniul imobiliar, specializată în oferirea unor servicii de calitate și satisfacție maximă clienților noștri. De-a lungul anilor, am reușit să construim o reputație solidă în industrie, făcând din noi partenerul de încredere pentru găsirea proprietății perfecte.
<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La Alex Imobiliare, punem accentul pe atingerea viselor clienților noștri. Indiferent dacă sunteți în căutarea casei ideale sau doriți să investiți într-o proprietate, suntem aici pentru a vă oferi expertiza și suportul necesare în fiecare pas al procesului.
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Echipa noastră este formată din profesioniști experimentați, care împărtășesc o pasiune comună pentru domeniul imobiliar. Ne dedicăm fiecare zi pentru a vă oferi servicii personalizate, asigurându-ne că ne înțelegem cu adevărat nevoile și dorințele dumneavoastră.
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La Alex Imobiliare, valorile noastre sunt transparența, integritatea și excelența în servicii. Suntem mereu în căutarea celor mai bune soluții și inovări pentru a vă oferi cea mai bună experiență în căutarea și achiziționarea proprietății dorite.
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ne bucurăm să facem parte din călătoria dumneavoastră în găsirea proprietății perfecte și vă invităm să ne contactați pentru a discuta despre cum vă putem ajuta să vă realizați visele imobiliare.
                    </span>
                </div>
            </div>
        </div>
     );
}
 
export default Despre;