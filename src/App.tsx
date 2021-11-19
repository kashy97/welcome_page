import React from 'react';
import { Nvbr, Footer, Banner, Content  } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App=() =>{
  return (
    <>
    <div className="App">
        <Nvbr/> <br/>
        <Banner/><br/>
        <Content/><br/>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  );
}

export default App;
