import React, { Component } from 'react';
import Slider from 'react-slick';
import BRN from '../Pages/BRN';
import EVE from '../Pages/EVE';
import GasPrice from '../Pages/GasPrice';
import EtherValue from '../Pages/EtherValue';
// import { SSection, Header, HeaderArea, HeaderTitle, ItemList, Items } from './Styles/Style';
import { SSection, Header, HeaderArea, HeaderTitle, ItemList, Items } from './Styles/StyleTwo';
// import { SSection, Header, HeaderArea, HeaderTitle, ItemList, Items } from './Styles/StyleThree';

export default class Section extends Component {
	render() {
		// Slider Setting
		var settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			pauseOnHover: true
		};
		return (
			<SSection>
				<Header>
					<HeaderArea>
						<HeaderTitle>MARKET INFOMATION</HeaderTitle>
					</HeaderArea>
				</Header>
				<ItemList>
					<Slider {...settings}>
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
			</SSection>
		);
	}
}
