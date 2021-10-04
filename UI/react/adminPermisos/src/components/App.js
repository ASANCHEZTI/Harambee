import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Exercices from '../pages/Exercices'
import ExerciseNew from '../pages/ExerciseNew'
import Change from '../pages/Change'
import NotFound from '../pages/NotFound'

function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={Exercices}/>
                <Route exact path="/exercise/search" component={ExerciseNew}/>
                <Route exact path="/exercise/change" component={Change}/>
                <Route component={NotFound}/>
            </Switch>
            
        </BrowserRouter>
    )


}
export default App