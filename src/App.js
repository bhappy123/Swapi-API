// eslint-disable-next-line

import React from 'react';
import AllPlanets from './AllPlanets';
import EachPlanet from './EachPlanet';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


const App = ()=>{

  return(
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={AllPlanets} />
      <Route path="/each/:id" component={EachPlanet} />
      </Switch>
    </BrowserRouter>
  )
}


export default App;
