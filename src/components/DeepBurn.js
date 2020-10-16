import React, {useState} from 'react';
import {ADDRESS, BURN_ADDRESS} from './appValues';
import Loader from './Loader';
import './DeepBurn.css';
import getDate from '../functions/getDate';

const DeepBurn = (props) => {
  const [toggle, setTog] = useState(false);
  const [state, setState] = useState({
    burns:[],
    burnGraph:[],
    supplyGraph:[],
    fetched:false
  })
  const getBurns = () => {
    setTimeout(() => {
      fetch('https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=' + ADDRESS + '&address=' + BURN_ADDRESS +'&page=1&offset=100&sort=asc&apikey=' + process.env.REACT_APP_ETHERSCAN_API)
        .then(res => res.json())
        .then(data => {
          let arr = []
          data.result.forEach((d, index) =>{
            let obj = {
              to:d.to,
              value:d.value / 1000000000000000000,
              timeStamp:d.timeStamp*1000,
              hash:d.hash,
            }
            arr.push(obj);
          })
          fetch('https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=' + ADDRESS + '&address=0x0000000000000000000000000000000000000000&page=1&offset=100&sort=asc&apikey=' + process.env.REACT_APP_ETHERSCAN_API)
            .then(res => res.json())
            .then(datas => {
              datas.result.forEach((d, index) => {
                if (d.from === '0x0000000000000000000000000000000000000000'){
                  return;
                }else {
                  let obj = {
                    to:d.to,
                    value:d.value / 1000000000000000000,
                    timeStamp:d.timeStamp*1000,
                    hash:d.hash,
                  }
                  arr.push(obj);
                }
              })
              let arr2 = [];
              let arr3 = [];
              let count = 0;
              let count2 = 56000;
              arr.forEach((a, i) => {
                count += a.value;
                count2 -= a.value
                arr2.push({
                  x:i,
                  y:count,
                })
                arr3.push({
                  x:i,
                  y:count2,
                })
              })
              setState({
                burnGraph:arr3,
                supplyGraph:arr2,
                burns:arr.reverse(),
                fetched:true,
              })
            })
        })
    },1500)
  }
  const togOff = () => {
    setTog(false);
  }
  const setToggle = () => {
    setTog(true);
    if (!state.fetched) {
      getBurns();
    }
  }
  // const topFive = state.burns.slice(0,5)
  return(
    <div className='outmostDiv'>
      {!toggle ? <button className='moreButton' onClick={setToggle}> Click For More Burn Info</button> :
        <div>
          {state.fetched ?
            <div className='outerDeep'>
              <div>
                <h1 className='burnHeader'>List of All Burns</h1>
                {state.burns.map((b, i) =>
                  <div key={i} className='deepBurnDiv'>
                    <p className='dbv'><span className='burnSpan'>{b.value.toFixed(2)} SPECTRE Burned</span></p>
                    <p className='dbt'>{getDate(b.timeStamp)}</p>
                    <a href={'https://etherscan.io/tx/' + b.hash} className='dbh' target='_blank' rel='noopener noreferrer'>View This Transaction</a>
                  </div>
                )}
              </div>
            </div> : <Loader />
          }
        </div>
      }
      {toggle ? <a href='#toggleB' onClick={togOff} className='deepBurnP'>Click to minimize</a> : null}
    </div>
  )
}

export default DeepBurn
