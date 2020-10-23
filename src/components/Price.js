import React, {useState, useEffect} from 'react';
import {ETH_LP_ADDRESS, WETH_ABI, WETH_ADDRESS, NETWORK, ADDRESS, ABI} from './appValues';
import Web3 from 'web3';
import commas from '../functions/commas';
import './Price.css';
import fetchData from '../functions/fetchCoinGecko';
import {useSpring, animated as a} from 'react-spring';

const Price = (props) => {
  const left2 = useSpring({
    transform:'translateX(0%)',
    from:{transform:'translateX(-450%)'},
    config:{duration:3000},
  })
  const right2 = useSpring({
    transform:'translateX(0%)',
    from:{transform:'translateX(450%)'},
    config:{duration:3000},
  })
  const left3 = useSpring({
    transform:'translateX(0%)',
    from:{transform:'translateX(-650%)'},
    config:{duration:3500},
  })
  const right3 = useSpring({
    transform:'translateX(0%)',
    from:{transform:'translateX(650%)'},
    config:{duration:3500},
  })
  const [fetch, setFetch] = useState(false);
  const [data, setData] = useState({
    ethBalance:0,
    specBalance:0,
    ethPrice:0,
    specPrice:0,
    completed:false
  })
  useEffect(() => {
    if(props.fetched) {
      if (!fetch) {
        const web3 = new Web3(new Web3.providers.HttpProvider(NETWORK));
        const wethContract = new web3.eth.Contract(WETH_ABI, WETH_ADDRESS);
        const contract = new web3.eth.Contract(ABI, ADDRESS);
        fetchData()
          .then(res => {
            const ethPrice = res.data.ethereum.usd;
            wethContract.methods.balanceOf(ETH_LP_ADDRESS).call()
              .then(res => {
                const ethBalance = res / 1000000000000000000;
                contract.methods.balanceOf(ETH_LP_ADDRESS).call()
                  .then(res => {
                    const specBalance = res / 1000000000000000000;
                    setData({
                      ethBalance:ethBalance,
                      specBalance:specBalance,
                      ethPrice: ethPrice,
                      specPrice: ethPrice / (specBalance/ethBalance),
                      completed:true,
                    })
                    setFetch(true)
                  })
              })

          })
      }
    }
  }, [props.fetched, fetch])
  return(
    <div>
      {!data.completed ? <div className='empty'></div> :
        <div className='priceDiv'>
          <div className='subBurnDiv'>
            <a.div id='toggleB' style={left2} className='innerSubDiv'>
              <p className='burnNumber'>${data.specPrice.toFixed(2)}</p>
              <p className='burnTitle'>SPECTRE Price</p>
            </a.div>
            <a.div style={right2} className='innerSubDiv'>
              <p className='burnNumber'>${commas((data.specPrice * props.circSupp).toFixed(0))}</p>
              <p className='burnTitle'>Market Cap</p>
            </a.div>
          </div>
          <div className='subBurnDiv'>
            <a.div style={left3} className='innerSubDiv'>
              <p className='burnNumber'>{(((56000-props.circSupp)/56000)*100).toFixed(2)}%</p>
              <p className='burnTitle'>Percent Burned</p>
            </a.div>
            <a.div style={right3} className='innerSubDiv'>
              <p className='burnNumber'>${commas(((56000-props.circSupp)*data.specPrice).toFixed(0))}</p>
              <p className='burnTitle'>Value Burned</p>
            </a.div>
          </div>
        </div>
      }
    </div>
  )
}

export default Price;
