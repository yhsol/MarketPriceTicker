import React from 'react';
import { ItemTitle, ItemSubTitle, ItemValueSmall, ItemSub, FooterItemValueSmall } from '../Components/Styles/StyleTwo';
import { FetchCoinPrice } from './Api/UseApi';
import Slider from 'react-slick';
import styled from 'styled-components';

const FooterList = styled.div`font-weight: 300;`;

const FooterTitle = styled.span`color: #cac3b1;`;

const Footer = () => {
	const { results, loading, error } = FetchCoinPrice();
	const FooterSlider = {
		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 6,
		autoplay: true,
		speed: 20000,
		autoplaySpeed: 2000,
		cssEase: 'linear'
	};

	return (
		<React.Fragment>
			{loading ? (
				'Loading...'
			) : (
				<>
					<FooterItemValueSmall>
						<Slider {...FooterSlider}>
							{results &&
								results.length > 0 &&
								results.map((result) => (
									<FooterList key={result.id}>
										<FooterTitle>{result.id}</FooterTitle> <span>{result.price_usd}</span>
										{console.log(result.id)}
									</FooterList>
								))}
							{console.log(results)}
						</Slider>
					</FooterItemValueSmall>
					<div>{error && error}</div>
				</>
			)}
		</React.Fragment>
	);
};

export default Footer;
