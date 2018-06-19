import React from 'react';

import {BrowserRouter,  Route, Redirect, Switch} from 'react-router-dom';
import Login from '././components/Login/Login';
import Home from '././components/Home/Home';
import Test from '././components/Test/Test';

const Routes = () => (
    <BrowserRouter >
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/Home" component={Home}/>
            <Route path="/token" component={Test}/>
            {/* <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/Signup" component={Signup}/>
            <Route path="*" component={NotFound}/> */}
        </Switch>
    </BrowserRouter>
  );
  
  export default Routes;