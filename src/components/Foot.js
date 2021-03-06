import React from 'react';
import './Foot.css';
import Copy from './Copy';

function Foot() {
  // <div><a className='cp' href='https://gstauf.tech' target='_blank' rel='noopener noreferrer'>&copy; Copyright 2020, gstauf</a></div>
  // <div className='innerFootDiv'><a className='attLink' href='https://coingecko.com' target='_blank' rel='noopener noreferrer'>Price Data powered by CoinGecko API</a></div>
    return(
      <div className='footOuterDiv'>
        <div className='footStyle'>
          <p className='info'>Speculative Resistance (SPECTRE) is a highly deflationary erc20 token within the <a href='https://etherscan.io/address/0x7f9a00e03c2e53a3af6031c17a150dbedaaab3dc#code' rel='noopener noreferrer' target='_blank'>RTC</a> ecosystem. For more info on SPECTRE:</p>
          <a className='addressLink' href='https://etherscan.io/address/0x441d91f7aaee51c7ae8cab84333d6383a8a8c175#code' target='_blank' rel='noopener noreferrer'>Read THIS Contract!!</a>
        </div>
        <div className=' footStyle swapshipDiv'>
          <p className='info'>For more info on the entire RTC ecosystem and/or to farm RTC with a SPECTRE LP or other LP tokens please visit</p>
          <a className='addressLink' href='https://swapship.finance' target='_blank' rel='noopener noreferrer'>SwapShip.finance</a>
        </div>
        <div className='footDiv'>
          <div className='innerFootDiv'><a className='attLink' href='https://github.com/ethereum/web3.js/' target='_blank' rel='noopener noreferrer'>Blockchain data and SPECTRE price powered by Web3.js</a></div>
          <div className='innerFootDiv'><a className='attLink' href='https://coingecko.com' target='_blank' rel='noopener noreferrer'>Ether Price Feed powered by CoinGecko API</a></div>
          <div className='innerFootDiv'><a className='attLink' href='https://etherscan.io/apis' target='_blank' rel='noopener noreferrer'>Individual Burn Data powered by Etherscan API</a></div>
          <p className='donP'>Donations Accepted At:</p>
          <div><a className='attLink' href='https://etherscan.io/address/0x9FA0f414357EC08fcC6c4DD9BaEa74eca32c842b' target='_blank' rel='noopener noreferrer'>0x9FA0f414357EC08fcC6c4DD9BaEa74eca32c842b</a><br /><Copy /></div>
          <div className='innerFootDiv'><p className='cp'>&copy; Copyright 2020, gstauf</p></div>
        </div>
      </div>
    )
}

export default Foot;
