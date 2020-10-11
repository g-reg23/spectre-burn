import CoinGecko from 'coingecko-api';

async function fetchData() {
  const CoinGeckoClient = new CoinGecko();
  let array = [];
  const kyber = await CoinGeckoClient.coins.fetch('kyber-network', {});
  const eth = await CoinGeckoClient.simple.price({
    ids: ['ethereum'],
    vs_currencies: ['usd', 'eur', 'krw', 'jpy', 'sgd', 'mxn', 'aud', 'brl', 'gbp', 'btc', 'eth', 'cad'],
  });
  let history = await CoinGeckoClient.coins.fetchMarketChart('kyber-network');
  array.push(kyber.data);
  array.push(eth.data);
  array.push(history.data)
  return array;
}

export default fetchData;
