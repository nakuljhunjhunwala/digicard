import React from 'react';
import Home from "./component/clients/Home";
import Sample from "./component/clients/Sample"
import Kreativeevents from "./component/clients/Kreativeevents"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



const App= ()=>{
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sample"  component={Sample} />
        <Route path="/kreativeevents"  component={Kreativeevents} />
      </Switch>
    </Router>
  );
}




export default App;