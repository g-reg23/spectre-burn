import React, {useState, useEffect} from 'react';
import './Body.css';
import {BURN_ADDRESS, ADDRESS, NETWORK, ABI} from './appValues';
import Web3 from 'web3';
import commas from '../functions/commas'
import Flame from './Flame';
import Price from './Price';
import {useSpring, animated as a} from 'react-spring';

function Body() {
  const fade = useSpring({
    opacity:1,
    from:{opacity:0},
    config:{duration:3000},
    delay:2000,
  })
  const left1 = useSpring({
    transform:'translateX(0%)',
    from:{transform:'translateX(-150%)'},
    config:{duration:3000},
    delay:2000,
  })
  const right1 = useSpring({
    transform:'translateX(0%)',
    from:{transform:'translateX(150%)'},
    config:{duration:3000},
    delay:2000,
  })
  const [fetch, setFetch] = useState(false)
  const [data, setData] = useState({
    supply:0,
    burn:0,
    initial:56000,
    contract:{},
    web3:{}
  });
  useEffect(() => {
    if (!fetch) {
      const web3 = new Web3(new Web3.providers.HttpProvider(NETWORK));
      const contract = new web3.eth.Contract(ABI, ADDRESS);
      contract.methods.totalSupply().call()
        .then(res => {
          const supply = res
          contract.methods.balanceOf(BURN_ADDRESS).call()
            .then(res => {
              setData({
                supply:supply / 1000000000000000000,
                burn:res / 1000000000000000000,
                initial:data.initial - (supply / 1000000000000000000),
                contract:contract,
                web3:web3,
              })
            })
        })

      setFetch(true);
    }
  }, [fetch,data])
  const dec = ((data.supply - data.burn)%1).toFixed(3).toString().split('.');
  return(
    <div className='outerBodyDiv'>
      <div className='burnDiv'>
        <a.div style={fade} className='innerBurnDiv'>
          <p className='burnNumber supply'>{commas((data.supply - data.burn).toFixed(0))}<span className='decimals'>.{dec[1]}</span></p>
          <Flame />
          <p className='burnTitle'>SPECTRE Total Supply</p>
        </a.div>
        <div className='subBurnDiv'>
          <a.div style={left1} className='innerSubDiv'>
            <p className='burnNumber'>56,000</p>
            <p className='burnTitle'>Initial Supply</p>
          </a.div>
          <a.div style={right1} className='innerSubDiv'>
            <p className='burnNumber'>{commas((data.burn+(56000-data.supply)).toFixed(0))}</p>
            <p className='burnTitle'>SPECTRE Burnt</p>
          </a.div>
        </div>
      </div>
      <Price contract={data.contract} web3={data.web3} fetched={fetch} circSupp={data.supply - data.burn}/>
      <div className='addressDiv'>
        <div className='innerAddDiv'>
          <p className='addBurn'>{commas((56000-data.supply).toFixed(0))} SPECTRE</p><p className='addressP'>Burned at address 0x0000000000000000000000000000000000000000</p>
          <a className='addressLink' href='https://etherscan.io/token/0x441d91f7aaee51c7ae8cab84333d6383a8a8c175?a=0x0000000000000000000000000000000000000000' target='_blank' rel='noopener noreferrer'>View Transactions Here</a>
        </div>
        <div className='innerAddDiv'>
          <p className='addBurn'>{commas(data.burn.toFixed(0))} SPECTRE</p><p className='addressP'>Burned at address {BURN_ADDRESS}</p>
          <a className='addressLink' href='https://etherscan.io/token/0x441d91f7aaee51c7ae8cab84333d6383a8a8c175?a=0x000000000000000000000000000000000000dEaD' target='_blank' rel='noopener noreferrer'>View Transactions Here</a>
        </div>
      </div>
    </div>
  )
}

export default Body;
