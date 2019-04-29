import React from 'react';
import { FooterItemValueSmall } from '../Components/Styles/StyleTwo';
import Slider from 'react-slick';

class FooterSliderComponents extends React.Component {
	render() {
		const { id, price } = this.props;
		var FooterSlider = {
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
				<FooterItemValueSmall>
					<Slider {...FooterSlider}>
						<div>
							{id}
							<span>{price}</span>
							{console.log(id)}
						</div>
					</Slider>
					{/* {console.log(results)} */}
				</FooterItemValueSmall>
			</React.Fragment>
		);
	}
}

export default FooterSliderComponents;
