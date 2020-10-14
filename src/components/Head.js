import React from 'react';
import './Head.css';
import {useSpring, animated as a} from 'react-spring';
// import Flame from './Flame';

function Head() {
  const fade = useSpring({
    transform:'translateY(0%)',
    from:{transform:'translateY(-200%)'},
    config:{duration:2000}
  })
    return(
      <div>
        <a.div style={fade} className='headDiv'>
          <img className='logo' alt="spectre logo" src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x441d91F7AAEe51C7AE8cAB84333D6383A8a8C175/logo.png" />
          <div>
            <h1 className='title'>SPECTRE Burn</h1>
          </div>
          <img className='logo' alt="spectre logo" src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x441d91F7AAEe51C7AE8cAB84333D6383A8a8C175/logo.png" />
          <div></div>
          <a className='rtc' href='https://etherscan.io/address/0x441d91f7aaee51c7ae8cab84333d6383a8a8c175#code' rel='noopener noreferrer' target='_blank'>Read This Contract!</a>
          <div></div>
        </a.div>
      </div>
    )
}

export default Head;
