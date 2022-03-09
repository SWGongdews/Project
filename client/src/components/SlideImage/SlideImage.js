import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './SlideImage.scss';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img-cf.kurly.com/banner/main/pc/img/72a90f92-861a-47fd-bd79-830ff2fd7756"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img-cf.kurly.com/banner/main/pc/img/ab2389bf-5bef-4886-b1f8-8696ddd309b3"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img-cf.kurly.com/banner/main/pc/img/184dbb03-3f0e-4ac6-a4f8-d18d8b60d0f4"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

function SlideImage() {
  return (
    <div>
      <div className='image-container'>
        <ControlledCarousel />
      </div>
    </div>
  )
}

export default SlideImage;