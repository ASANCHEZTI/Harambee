import './Styles/Styles.css';
import Estadosdeventa from './Pages/Estadosdeventa'
import Estadosdeventaregistrar from './Pages/Estadosdeventa-registrar'
import Estadosdeventaconsultar from './Pages/Estadosdeventa-consultar'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router> 
        <Switch>
          <Route path = '/Estadosdeventa'>
            <Estadosdeventa />
          </Route>
          <Route path = '/Estadosdeventa-registrar'>
            <Estadosdeventaregistrar />
          </Route>
          <Route path = '/Estadosdeventa-consultar'>
            <Estadosdeventaconsultar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
