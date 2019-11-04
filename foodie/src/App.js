import React from "react";
import "./App.css";
import {FoodApp, FoodHeader} from './components/styles/AppStyles'
import {Route} from 'react-router-dom';

import Welcome from './components/welcome/WelcomePage';
import SignIn from './components/signIn/SignInPage';
import CreateAccount from './components/createAccount/CreateAccountPage';




function App() {
  return (
    <FoodApp>
      <FoodHeader></FoodHeader>
      <Route exact path="/" render = {props => <Welcome {...props} />} />
      <Route path="/signin" render = {props => <SignIn {...props} />}/>
      <Route path="/createAccount" render = {props => <CreateAccount {...props} />}/>      
    </FoodApp>
  );
}

export default App;
