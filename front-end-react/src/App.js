import './App.css';
import Background from './componente/Pagina principala/Background/Background';
import Meniu from './componente/Pagina principala/Meniu/Meniu.js';
import Cautare from './componente/Pagina principala/MotorCautare/Search';
import Servicii from './componente/Pagina principala/Servicii/Servicii';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Meniu/>
        <Background/>
        <Cautare/>
        <Servicii/>
      </div>
    </div>
  );
}

export default App;
