import React, { Component } from 'react';
import Slider from "react-slick";

import image from './images/darts-close.jpg';
import image2 from './images/roses-board-front.jpg';
import image3 from './images/roses-game.jpg';
import image4 from './images/roses-setup.jpg';
import image5 from './images/stage-people.jpg';


class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true
    };
    return (
      <Slider {...settings}>
        <div className="banner-inner">
          <img className="img-fluid" src={image} alt="Logo" />
        </div>
        <div>
          <img className="img-fluid" src={image2} alt="Logo" />
        </div>
        <div>
          <img className="img-fluid" src={image3} alt="Logo" />
        </div>
        <div>
          <img className="img-fluid" src={image4} alt="Logo" />
        </div>
        <div>
          <img className="img-fluid" src={image5} alt="Logo" />
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;