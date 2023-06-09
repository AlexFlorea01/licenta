import './App.css';
import React from'react';
import Acasa from './componente/Pagina principala/Acasa';
import Despre from './componente/About/Despre';
import Inregistrare from './componente/Inregistrare-Conectare/Inregistrare';
import Conectare from './componente/Inregistrare-Conectare/Conectare';
import Administrare from './componente/Administrare/Administrare';
import Proprietate from './componente/Proprietate/Proprietate';

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';


const FallbackComponent = ()=>{
  return( 
    <p>Aceasta pagina nu exista</p>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Acasa/>}/>
        <Route exact path="/despre" element={<Despre/>}/>
        <Route path="/inregistrare" element={<Inregistrare/>}/>
        <Route path="/conectare" element={<Conectare/>}/>
        <Route path="/administrare" element={<Administrare/>}/>
        <Route path="/proprietate/:id" element={<Proprietate/>}/>
        <Route path="/*" element={<FallbackComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
