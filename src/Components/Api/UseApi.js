import { useState, useEffect, useRef } from 'react';
import {
	useExaApi,
	useGasPriceApi,
	useEtherBalanceApi,
	useEtherPriceApi,
	useCoinPriceApi,
	useKrwApi,
	useUsdtPriceApi
} from './Api';

export function useInterval(callback, delay) {
	const savedCallback = useRef();

	// Remember the latest function.
	useEffect(
		() => {
			savedCallback.current = callback;
		},
		[ callback ]
	);

	// Set up the interval.
	useEffect(
		() => {
			function tick() {
				savedCallback.current();
			}
			if (delay !== null) {
				let id = setInterval(tick, delay);
				return () => clearInterval(id);
			}
		},
		[ delay ]
	);
}

export const FetchBrnApi = () => {
	const [ results, setResults ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(null);

	useInterval(async () => {
		const { data: { data } } = await useExaApi.brnApi();
		if (data) setResults(data);
		// console.log(data);
	}, 1000);

	useEffect(() => {
		try {
			setLoading(true);
		} catch (error) {
			console.error(error);
			setError("Can't find infomation!");
		} finally {
			setLoading(false);
		}
	}, []);

	return { results, loading, error };
};

export const FetchEveApi = () => {
	const [ results, setResults ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(null);

	useInterval(async () => {
		const { data: { data } } = await useExaApi.eveApi();
		if (data) setResults(data);
		// console.log(data);
	}, 1000);

	useEffect(() => {
		try {
			setLoading(true);
		} catch (error) {
			console.error(error);
			setError("Can't find infomation!");
		} finally {
			setLoading(false);
		}
	}, []);

	return { results, loading, error };
};

export const FetchGasPriceApi = () => {
	const [ results, setResults ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(null);

	useInterval(async () => {
		const { data: { safeLow: result } } = await useGasPriceApi.gasPrice();
		if (result) setResults(result);
		// console.log(result);
	}, 1000);

	useEffect(() => {
		try {
			setLoading(true);
		} catch (error) {
			console.error(error);
			setError("Can't find infomation!");
		} finally {
			setLoading(false);
		}
	}, []);
	// console.log(results);

	return { results, loading, error };
};

export const FetchEtherBalance = () => {
	const [ results, setResults ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(null);

	useInterval(async () => {
		const { data: { result } } = await useEtherBalanceApi.ehterBalanceApi();
		if (result) setResults(result);
		// console.log(result);
	}, 1000);

	useEffect(() => {
		try {
			setLoading(true);
		} catch (error) {
			console.error(error);
			setError("Can't find infomation!");
		} finally {
			setLoading(false);
		}
	}, []);
	// console.log(results);

	return { results, loading, error };
};

export const FetchEtherPrice = () => {
	const [ priceResults, setPriceResults ] = useState(null);
	const [ priceloading, setPriceLoading ] = useState(true);
	const [ priceerror, setPriceError ] = useState(null);

	// useInterval(async () => {
	// 	const { data: { USD } } = await useEtherPriceApi.ehterPriceApi();
	// 	if (USD) setPriceResults(USD);
	// 	// console.log(price_usd);
	// }, 10000);

	const fetchEtherPrice = async () => {
		const { data: { USD } } = await useEtherPriceApi.ehterPriceApi();
		if (USD) setPriceResults(USD);
	};

	useEffect(() => {
		try {
			setPriceLoading(true);
			fetchEtherPrice();
		} catch (error) {
			console.error(error);
			setPriceError("Can't find infomation!");
		} finally {
			setPriceLoading(false);
		}
	}, []);
	// console.log(results);

	return { priceResults, priceloading, priceerror };
};

export const FetchUsdtPrice = () => {
	const [ usdtResults, setUsdtResults ] = useState(null);
	const [ usdtloading, setUsdtLoading ] = useState(true);
	const [ usdterror, setUsdtError ] = useState(null);

	// useInterval(async () => {
	// 	const { data: { USD } } = await useEtherPriceApi.ehterPriceApi();
	// 	if (USD) setPriceResults(USD);
	// 	// console.log(price_usd);
	// }, 10000);

	const fetchUsdtPrice = async () => {
		const { data: { USD } } = await useUsdtPriceApi.fetchusdtPriceApi();
		if (USD) setUsdtResults(USD);
		console.log(USD);
	};

	useEffect(() => {
		try {
			setUsdtLoading(true);
			fetchUsdtPrice();
		} catch (error) {
			console.error(error);
			setUsdtError("Can't find infomation!");
		} finally {
			setUsdtLoading(false);
		}
	}, []);
	// console.log(results);

	return { usdtResults, usdtloading, usdterror };
};

export const FetchCoinPrice = () => {
	const [ results, setResults ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(null);

	// useInterval(async () => {
	// 	const { data } = await useCoinPriceApi.coinPrice();
	// 	if (data) setResults(data);
	// 	// console.log(data);
	// }, 1000);

	const fetchCoinPrice = async () => {
		const { data } = await useCoinPriceApi.coinPrice();
		if (data) setResults(data);
		// console.log(data);
	};

	useEffect(() => {
		try {
			setLoading(true);
			fetchCoinPrice();
		} catch (error) {
			console.error(error);
			setError("Can't find infomation!");
		} finally {
			setLoading(false);
		}
	}, []);
	// console.log(results);

	return { results, loading, error };
};

export const FetchKrw = () => {
	const [ krwResults, setResults ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(null);

	useInterval(async () => {
		const { data: { rates: { KRW } } } = await useKrwApi.krwPrice();
		if (KRW) setResults(KRW);
		// console.log(KRW);
	}, 1000);

	useEffect(() => {
		try {
			setLoading(true);
		} catch (error) {
			console.error(error);
			setError("Can't find infomation!");
		} finally {
			setLoading(false);
		}
	}, []);
	// console.log(krwResults);

	return { krwResults, loading, error };
};
