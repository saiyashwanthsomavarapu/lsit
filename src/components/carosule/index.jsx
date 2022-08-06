import React from "react";
import PropTypes from 'prop-types';
import { CarouselCard, CarouselContent, CarouselItem } from "./styles";
import Image from "../Image";

const Carousel = (props) => {
	const { banners } = props;
	const carouselItem = (src,key) => {
		return (
		<CarouselItem key={key}>
			<Image src={src} height="100"  width="250" alt="" />
		</CarouselItem>
		)
	}
  return (
    <CarouselCard key="carousel">
      <CarouselContent >
		{banners?.map((src,id) => (
			<>
			{carouselItem(src,id)}
			</>
		))}
      </CarouselContent>
    </CarouselCard>
  );
};

Carousel.propTypes = {
	banners: PropTypes.array
}

export default Carousel;
