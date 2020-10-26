import React, {useState} from 'react';
import Iframe from 'react-iframe'
import Loader from './Loader'

const BuySpectre = () => {
  const [tog, setTog] = useState(false);
  const [loading, setLoading] = useState(true)
  const toggleOff = () => {
    setTog(false);
    setLoading(true);
  }
  return(
    <div>
      {!tog ? <button onClick={() => setTog(true)} className='moreButton'>Buy SPECTRE</button> :
            <div className='iFrameDiv'>
              {loading ? <Loader name={'Fetching Interface'} /> : null}
              <Iframe
                src="https://app.uniswap.org/#/swap?outputCurrency=0x441d91F7AAEe51C7AE8cAB84333D6383A8a8C175&theme=dark"
                height={loading ? '0px' : '660px'}
                width={loading ? '0%' : '100%'}
                onLoad={() => setLoading(false)}
                style={{
                  border: '0',
                  margin: '0 auto',
                  display: 'block',
                  borderRadius: '10px',
                }}
                id="myId"
                />
              {loading ? null : <button className='moreButton' onClick={toggleOff}>Minimize</button>}
            </div>
      }
    </div>
  )
}

export default BuySpectre;
