import React, { Component } from 'react';
import Home from './components/Home';
import Nvbar from './components/Nvbar';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nvbar/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;