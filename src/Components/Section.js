import React, { Component } from 'react';
import Slider from 'react-slick';
import BRN from '../Pages/BRN';
import EVE from '../Pages/EVE';
import GasPrice from '../Pages/GasPrice';
import EtherValue from '../Pages/EtherValue';
// import { SSection, Header, HeaderArea, HeaderTitle, ItemList, Items } from './Styles/Style';
import { SSection, Header, HeaderArea, HeaderTitle, ItemList, Items, SFotoer, FooterArea } from './Styles/StyleTwo';
import Footer from './Footer';
import { FetchCoinPrice } from './Api/UseApi';
// import { SSection, Header, HeaderArea, HeaderTitle, ItemList, Items } from './Styles/StyleThree';

const Section = () => {
	// Slider Setting
	var TitleSlider = {
		// dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		vertical: true,
		verticalSwiping: true
	};
	const settingsFooter = {
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
		<SSection>
			<Header>
				<HeaderArea>
					<HeaderTitle>MARKET INFOMATION</HeaderTitle>
				</HeaderArea>
			</Header>
			<ItemList>
				<Slider {...TitleSlider}>
					<Items>
						<h1>
							<BRN />
						</h1>
					</Items>
					<Items>
						<h1>
							<EVE />
						</h1>
					</Items>
					<Items>
						<h1>
							<GasPrice />
						</h1>
					</Items>
					<Items>
						<h1>
							<EtherValue />
						</h1>
					</Items>
				</Slider>
			</ItemList>
			<Items>
				<Footer />
			</Items>
		</SSection>
	);
};
export default Section;
