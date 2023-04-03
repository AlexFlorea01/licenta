import './App.css';

import Acasa from './componente/Pagina principala/Acasa';
import Despre from './componente/About/Despre';

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
        <Route path="/*" element={<FallbackComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
