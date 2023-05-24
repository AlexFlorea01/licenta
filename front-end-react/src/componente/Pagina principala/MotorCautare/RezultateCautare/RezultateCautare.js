import ObiectCautat from './ObiectCautat';
import './RezultateCautare.css';

import { useEffect } from 'react';

const RezultateCautare = (filters) => {

    useEffect(()=>{
        console.log("update in show results",filters);
    },[filters])

    return (  
        <div className="search-results-container">
            <div className="search-results-push-search-input"/>
            {
                filters == null ? null:
                filters.map((element)=>{
                    return <ObiectCautat obiect={element} />
                })
            }
            
        </div>
    );
}
 
export default RezultateCautare;