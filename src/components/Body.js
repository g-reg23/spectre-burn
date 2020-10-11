import React, {useState, useEffect} from 'react';
import './Body.css';
import {BURN_ADDRESS, ADDRESS, NETWORK, ABI} from './appValues';
import Web3 from 'web3';
import commas from '../functions/commas'
import Flame from './Flame';

function Body() {
  const [fetch, setFetch] = useState(false)
  const [data, setData] = useState({
    supply:0,
    burn:0,
    initial:56000
  });
  useEffect(() => {
    console.log('in1');
    if (!fetch) {
      console.log('in2');
      const web3 = new Web3(new Web3.providers.HttpProvider(NETWORK));
      const contract = new web3.eth.Contract(ABI, ADDRESS);
      contract.methods.totalSupply().call()
        .then(res => {
          console.log(res);
          const supply = res
          contract.methods.balanceOf(BURN_ADDRESS).call()
            .then(res => {
              console.log(res);
              setData({
                supply:supply / 1000000000000000000,
                burn:res / 1000000000000000000,
                initial:data.initial - (supply / 1000000000000000000),
              })
            })
        })
      console.log(contract);
      setFetch(true);
    }
  }, [fetch,data])
  return(
    <div className='outerBodyDiv'>
      <div className='burnDiv'>
        <div className='innerBurnDiv'>
          <p className='burnNumber'>{commas((data.supply - data.burn).toFixed(3))}</p>
          <Flame />
          <p className='burnTitle'>SPECTRE Total Supply</p>
        </div>
        <div className='subBurnDiv'>
          <div className='innerSubDiv'>
            <p className='burnNumber'>56,000</p>
            <p className='burnTitle'>Initial Supply</p>
          </div>
          <div className='innerSubDiv'>
            <p className='burnNumber'>{commas((data.burn+(56000-data.supply)).toFixed(0))}</p>
            <p className='burnTitle'>SPECTRE Burnt</p>
          </div>
        </div>
      </div>
      <div className='addressDiv'>
        <div className='innerBurnDiv2'>
          <p className='addBurn'>{commas((56000-data.supply).toFixed(0))} SPECTRE</p><p className='addressP'>Burned at address 0x0000000000000000000000000000000000000000</p>
          <a className='addressLink' href='https://etherscan.io/token/0x441d91f7aaee51c7ae8cab84333d6383a8a8c175?a=0x0000000000000000000000000000000000000000' target='_blank' rel='noopener noreferrer'>View Transactions Here</a>
        </div>
        <div className='innerBurnDiv2'>
          <p className='addBurn'>{commas(data.burn.toFixed(0))} SPECTRE</p><p className='addressP'>Burned at address {BURN_ADDRESS}</p>
          <a className='addressLink' href='https://etherscan.io/token/0x441d91f7aaee51c7ae8cab84333d6383a8a8c175?a=0x000000000000000000000000000000000000dEaD' target='_blank' rel='noopener noreferrer'>View Transactions Here</a>
        </div>
      </div>
    </div>
  )
}

export default Body;
