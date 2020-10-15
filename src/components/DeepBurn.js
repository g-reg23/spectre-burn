import React, {useState, useEffect} from 'react';
import {ADDRESS, BURN_ADDRESS} from './appValues';
import { VictoryArea } from 'victory';
import Loader from './Loader';
import './DeepBurn.css';

const DeepBurn = (props) => {
  const [toggle, setTog] = useState(false);
  const [state, setState] = useState({
    burns:[],
    graph:[],
    fetched:false
  })
  const getBurns = () => {
    console.log('in');
    setTimeout(() => {
      fetch('https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=' + ADDRESS + '&address=' + BURN_ADDRESS +'&page=1&offset=100&sort=asc&apikey=' + process.env.REACT_APP_ETHERSCAN_API)
        .then(res => res.json())
        .then(data => {
          let arr = []
          data.result.forEach((d, index) =>{
            let obj = {
              to:d.to,
              value:d.value / 1000000000000000000,
              timeStamp:d.timeStamp,
              hash:d.hash,
            }
            arr.push(obj);
          })
          fetch('https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=' + ADDRESS + '&address=0x0000000000000000000000000000000000000000&page=1&offset=100&sort=asc&apikey=' + process.env.REACT_APP_ETHERSCAN_API)
            .then(res => res.json())
            .then(datas => {
              console.log(datas);
              datas.result.forEach((d, index) => {
                if (d.from === '0x0000000000000000000000000000000000000000'){
                  return;
                }else {
                  let obj = {
                    to:d.to,
                    value:d.value / 1000000000000000000,
                    timeStamp:d.timeStamp,
                    hash:d.hash,
                  }
                  arr.push(obj);
                }
              })
              let arr2 = [];
              let count = 0;
              arr.forEach((a, i) => {
                count += a.value;
                arr2.push({
                  x:a.value,
                  y:a.timeStamp,
                })
              })
              setState({
                graph:arr2,
                burns:arr,
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
  return(
    <div>
      {!toggle ? <button className='moreButton' onClick={setToggle}>More Burn Info</button> :
        <div>
          {state.fetched ?
            <div onClick={togOff} className='deepBurnDiv'>
              <p className='deepBurnP'>Click to minimize</p>
            </div> : <Loader />
          }
        </div>
      }
    </div>
  )
}

export default DeepBurn
