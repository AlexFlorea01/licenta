import './App.css';

import Acasa from './componente/Pagina principala/Acasa.js';
import Despre from './componente/About/Despre';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Acasa} />
        <Route path="/despre" component={Despre} />
        <Route path="*">
          <InvalidProperty text="This page do not exists!"/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
