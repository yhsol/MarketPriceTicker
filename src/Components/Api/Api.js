import axios from 'axios';

const exaApi = axios.create({
	baseURL: 'https://api.idax.pro/api/v2/signalr',
	method: 'post',
	crossDomain: true,
	timeout: 1000,
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
		Accept: 'application/json, text/plain, */*',
		'accept-language': 'en-us'
	},
	data: '{"pairName":"BRN_ETH"}\r\n'
});

export const useExaApi = {
	brnApi: () =>
		exaApi.post('/getTradeByPair', {
			pairName: 'BRN_ETH'
		}),
	eveApi: () =>
		exaApi.post('/getTradeByPair', {
			pairName: 'EVE_USDT'
		})
};

const gasPriceApi = axios.create({
	baseURL: 'https://www.etherchain.org/api',
	method: 'GET',
	crossDomain: true
});

export const useGasPriceApi = {
	gasPrice: () => gasPriceApi.get('/gasPriceOracle')
};

const etherScanApi = axios.create({
	baseURL: 'https://api.etherscan.io',
	method: 'GET',
	crossDomain: true
});

export const useEtherBalanceApi = {
	ehterBalanceApi: () =>
		etherScanApi.get(
			'/api?module=account&action=balance&address=0xd0791e4E384aDec5F3C5fb5f4D0C17Ac8Cb47EDE&tag=latest&apikey=ZV5Z6XBZ3GTM91K5JKBZDYUKWJTU7S194V'
		)
};

const etherPriceApi = axios.create({
	baseURL: 'https://min-api.cryptocompare.com/data',
	method: 'GET',
	crossDomain: true
});

export const useEtherPriceApi = {
	ehterPriceApi: () => etherPriceApi.get('/price?fsym=ETH&tsyms=USD')
};

const usdtPriceApi = axios.create({
	baseURL: 'https://min-api.cryptocompare.com/data',
	method: 'GET',
	crossDomain: true
});

export const useUsdtPriceApi = {
	fetchusdtPriceApi: () => usdtPriceApi.get('/price?fsym=USDT&tsyms=USD')
};

const coinPriceApi = axios.create({
	baseURL: 'https://api.coinmarketcap.com/v1',
	method: 'GET',
	crossDomain: true,
	Accept: 'application/json',
	'Accept-Encoding': 'deflate, gzip'
});

export const useCoinPriceApi = {
	coinPrice: () => coinPriceApi.get('/ticker/?limit=10')
};

const krwApi = axios.create({
	baseURL: 'https://api.exchangeratesapi.io',
	method: 'GET',
	crossDomain: true
});

export const useKrwApi = {
	krwPrice: () => krwApi.get('/latest?symbols=KRW&base=USD')
};
