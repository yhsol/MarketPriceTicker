import { useState, useEffect, useRef } from 'react';
import { useExaApi, useGasPriceApi, useEtherBalanceApi, useEtherPriceApi, useCoinPriceApi } from './Api';

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

	useInterval(async () => {
		const { data: { 0: { price_usd } } } = await useEtherPriceApi.ehterPriceApi();
		if (price_usd) setPriceResults(price_usd);
		// console.log(price_usd);
	}, 1000);

	useEffect(() => {
		try {
			setPriceLoading(true);
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

export const FetchCoinPrice = () => {
	const [ results, setResults ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(null);

	useInterval(async () => {
		const { data } = await useCoinPriceApi.coinPrice();
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
	// console.log(results);

	return { results, loading, error };
};

// export const FetchEtherBalance = () => {
// 	const [ results, setResults ] = useState(null);
// 	const [ loading, setLoading ] = useState(true);
// 	const [ error, setError ] = useState(null);

// 	useInterval(async () => {
// 		const { data: { result } } = await useEtherBalanceApi.ehterBalanceApi();
// 		if (result) setResults(result);
// 		console.log(result);
// 	}, 1000);

// useEffect(() => {
// 	try {
// 		setLoading(true);
// 	} catch (error) {
// 		console.error(error);
// 		setError("Can't find infomation!");
// 	} finally {
// 		setLoading(false);
// 	}
// }, []);
// console.log(results);

// 	return { results, loading, error };
// };
