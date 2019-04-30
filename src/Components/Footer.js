import React from 'react';
import { FooterItemValueSmall } from '../Components/Styles/StyleTwo';
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
		slidesToScroll: 1,
		autoplay: true,
		speed: 5000,
		autoplaySpeed: 2000,
		cssEase: 'linear'
	};

	return (
		<React.Fragment>
			{loading ? (
				'Loading...'
			) : (
				<React.Fragment>
					<FooterItemValueSmall>
						{results &&
						results.length > 0 && (
							<Slider {...FooterSlider}>
								{results.map((result) => (
									<FooterList key={result.id}>
										<FooterTitle>{result.id}</FooterTitle> <span> ${result.price_usd}</span>
										{/* {console.log(result)} */}
									</FooterList>
								))}
							</Slider>
						)}
						{console.log(results)}
					</FooterItemValueSmall>
					<div>{error}</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default Footer;
