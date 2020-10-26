import React, {useState} from 'react';
import Iframe from 'react-iframe'
import './Price.css';
import Loader from './Loader'

const AddLiq = () => {
  const [tog, setTog] = useState(false);
  const [loading, setLoading] = useState(true)
  const toggleOff = () => {
    setTog(false);
    setLoading(true);
  }
  return(
    <div>
      {!tog ? <button onClick={() => setTog(true)} className='moreButton'>Add Liquidity</button> :
        <div className='iFrameDiv'>
          {loading ? <Loader name={'Fetching Interface'} /> : null}
          <Iframe
            src="https://app.uniswap.org/#/add/0x441d91f7aaee51c7ae8cab84333d6383a8a8c175/ETH"
            height={loading ? '0px' : '660px'}
            width={loading ? '0%' : '100%'}
            onLoad={() => setLoading(false)}
            style={{
              border: '0',
              margin: '0 auto',
              display: 'block',
            }}
            id="myId"
            />
            {loading ? null : <button className='moreButton' onClick={toggleOff}>Minimize</button>}
        </div>
      }
    </div>
  )
}

export default AddLiq;
