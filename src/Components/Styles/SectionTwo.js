import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import BRN from '../../Pages/BRN';
import EVE from '../../Pages/EVE';
import GasPrice from '../../Pages/GasPrice';
import EtherValue from '../../Pages/EtherValue';

const SSection = styled.div`
	height: 100vh;
	color: #ffffff;
	background-color: #222;
`;

const Header = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 6rem;
	z-index: 10;
	box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
	background-color: #222;
	opacity: 0.98;
`;

const HeaderArea = styled.div`
	display: flex;
	align-items: center;
	width: 75vw;
	height: 6rem;
	margin: 0 auto;
	padding: 0 10px;
`;

const HeaderTitle = styled.div`
	color: #e3e6e1;
	font-size: 30px;
	font-weight: 500;
	text-align: center;
`;

const ItemList = styled.div`
	margin: 6rem auto;
	background-color: #222;
	width: 84%;
	height: 82%;
	overflow: hidden;
`;

const Items = styled.div`
	text-align: center;
	height: 73vh;
`;

export default class SectionTwo extends Component {
	render() {
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
