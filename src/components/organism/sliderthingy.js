import React from 'react';
import Swiper from 'swiper';

const Slider = () => (
  <div className="swiper-container">
    <div className="swiper-wrapper">
      <div className="swiper-slide">Slide 1</div>
      <div className="swiper-slide">Slide 2</div>
      <div className="swiper-slide">Slide 3</div>
    </div>
    <div className="swiper-button-prev"></div>
    <div className="swiper-button-next"></div>
  </div>
);

const swiper = new Swiper(
  '.swiper-container',
  {
    effect: 'cube'
  }
);

export default Slider;