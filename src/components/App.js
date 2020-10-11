import React from 'react';
import './App.css';
import Head from './Head';
import Body from './Body';
import Foot from './Foot';

function App() {
  return (
    <div className="App">
      <Head />
      <a href='https://etherscan.io/address/0x441d91f7aaee51c7ae8cab84333d6383a8a8c175#code' rel='noopener noreferrer' target='_blank'>Read This Contract!</a>
      <Body />
      <Foot />
    </div>
  );
}

export default App;
