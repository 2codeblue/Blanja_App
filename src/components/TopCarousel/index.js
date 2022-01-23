
import React, { Component } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "./carousel.css"

export default class TopCarousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      dots: true,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500,
      responsive: [
        {
          breakpoint: 1433,
          settings: {
          centerPadding: "20px",
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
          centerPadding: "20px",
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true
          }
        }
      ]
    };
    return (
      <div className="carousel">
        <Slider {...settings} className="carousel-gallery">
          <div className="carousel-image carousel-image-1 w-90">
            <h2 className='text-white text-center martop-65'>Trends in 2020</h2>
          </div>
          <div className="carousel-image carousel-image-2">
            <h2 className='text-white text-center martop-65'>Black edition</h2>
          </div>
          <div className="carousel-image carousel-image-3">
          </div>
          <div className="carousel-image carousel-image-4">
          </div>
        </Slider>
      </div>
    )
  }
}
