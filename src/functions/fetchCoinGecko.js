import CoinGecko from 'coingecko-api';

async function fetchData() {
  const CoinGeckoClient = new CoinGecko();
  const xamp = await CoinGeckoClient.simple.price({
    ids: ['ethereum'],
    vs_currencies: ['usd'],
  });
  return xamp;
}
export default fetchData;
