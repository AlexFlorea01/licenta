import './Despre.css';
import Meniu from '../Pagina principala/Meniu/Meniu';
const Despre = () => {
    return ( 
         <div className="about-container">
            <Meniu/>
            <div className="about-content">
                <div className="about-content-title">
                    <span>Cum am inceput...</span>
                </div>
                <div className="about-content-content">
                    <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alex Imobiliare este principalul investitor și dezvoltator imobiliare de proiecte sustenabile rezidentiale, de birouri și mixte de ultimă generație din București, Romania. Compania este cunoscută sub brandul high-end ONE, sinonim cu calitate, design, comunitate, durabilitate și cele mai căutate și dorite locații. 

                    Compania a fost înființată la sfârșitul anului 2007, de către Victor Capitanu și Andrei Diaconescu, în urma exit-ului acestora din Capital Partners, companie independentă de investment banking, pe care fondatorii au vândut-o către Banca Transilvania în 2016. Încă de la începutul afacerii în 2008 până în prezent, cei doi fondatori au fost implicați în activitatea de zi cu zi a companiei One United Properties, în calitate de co-CEO și membri executivi ai Consiliului de Administrație.

                    Obiectivul One United Properties este să îmbunătățească comunitățile existente și să construiască noi comunități prin dezvoltarea de clădiri de calitate, eficiente din punct de vedere energetic, generând totodată o creștere a valorii pe termen lung pentru acționari. One United Properties este pionier în promovarea conceptul de dezvoltare cu utilizare mixtă în România, fiind cel mai important jucător pe acest segment de pe piața locală.
                    </span>
                </div>
            </div>
        </div>
     );
}
 
export default Despre;