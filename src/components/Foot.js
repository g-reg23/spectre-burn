import React from 'react';
import './Foot.css'

function Foot() {
  // <div><a className='cp' href='https://gstauf.tech' target='_blank' rel='noopener noreferrer'>&copy; Copyright 2020, gstauf</a></div>

    return(
      <div className='FootOuterDiv'>
        <div className='footStyle'>
          <p className='info'>Speculative Resistance (SPECTRE) is a highly deflational erc20 token within the <a href='https://etherscan.io/address/0x7f9a00e03c2e53a3af6031c17a150dbedaaab3dc#code' rel='noopener noreferrer' target='_blank'>RTC</a> ecosystem. For more info on SPECTRE:</p>
          <a href='https://etherscan.io/address/0x441d91f7aaee51c7ae8cab84333d6383a8a8c175#code' target='_blank' rel='noopener noreferrer'>Read THIS Contract!!</a>
        </div>
        <div className=' footStyle swapshipDiv'>
          <p className='info'>For more info on the entire RTC ecosystem and/or to farm RTC with a SPECTRE LP or other LP tokens please visit</p>
          <a href='https://swapship.finance' target='_blank' rel='noopener noreferrer'>SwapShip.finance</a>
        </div>
        <div className='footDiv'>
          <div className='innerFootDiv'><a className='attLink' href='https://github.com/ethereum/web3.js/' target='_blank' rel='noopener noreferrer'>Ethereum data powered by Web3.js</a></div>
          <div className='innerFootDiv'><a className='attLink' href='https://coingecko.com' target='_blank' rel='noopener noreferrer'>Price Data powered by CoinGecko API</a></div>
          <div className='innerFootDiv'><p>&copy; Copyright 2020, gstauf</p></div>
      </div>
      </div>
    )
}

export default Foot;
