import React, { Component } from 'react';
// import logo from './logo.svg';
import background from './background.png'
import './App.css';
import './image.css';
import GoogleButton from 'react-google-button'
import { Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (  
      <div>
        <img src={background} className="bg"/>
        <h1 className="App-title">tangerine</h1>
        <GoogleButton type = "light" className="gbutton" onClick={() => {   }}/>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
