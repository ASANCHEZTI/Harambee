import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Exercices from '../pages/Exercices'
import ExerciseNew from '../pages/ExerciseNew'
import Change from '../pages/Change'
import NotFound from '../pages/NotFound'
import Principal from '../pages/Principal'
import Gestion from '../pages/gestion'
import login from '../pages/login'
import vendedores from '../pages/vendedores'
import registro from '../pages/registro'
import menuproducto from '../pages/menuproducto'
import consultaproducto from '../pages/consultaproducto'
import productonuevo from '../pages/ProductoNu'


function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={login}/>
                <Route exact path="/vendedores" component={vendedores}/>
                <Route exact path="/principal" component={Principal}/>
                <Route exact path="/permisos" component={Exercices}/>
                <Route exact path="/permisos/search" component={ExerciseNew}/>
                <Route exact path="/permisos/change" component={Change}/>
                <Route exact path="/ventas" component={Gestion}/>
                <Route exact path="/registro" component={registro}/>
                <Route exact path="/menuproducto" component={menuproducto}/>
                <Route exact path="/menuproducto/consultaproducto" component={consultaproducto}/>
                <Route exact path="/menuproducto/nuevoproducto" component={productonuevo}/>
                <Route component={NotFound}/>
            </Switch>
            
        </BrowserRouter>
    )


}
export default App