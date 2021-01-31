import React from 'react';
import {Route, Switch} from "react-router"
import {Home, One, Second, Third, Result} from "./templates"

const Router = () => {
  return (
    <Switch>
      <Route exact path="(/)?" component={Home}/>
      <Route exact path="/one" component={One}/>
      <Route exact path="/second" component={Second}/>
      <Route exact path="/third" component={Third}/>
      <Route exact path="/result" component={Result}/>
    </Switch>  
  );
};

export default Router;