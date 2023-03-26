import './App.css';
import Background from './componente/Pagina principala/Background/Background';
import Meniu from './componente/Pagina principala/Meniu/Meniu.js';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Meniu/>
        <Background/>
      </div>
      
    </div>
  );
}

export default App;
