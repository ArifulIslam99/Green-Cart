import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../components/images/4.jpg'
import banner2 from '../components/images/5.jpg'
import banner3 from '../components/images/6.jpg'

const Banner = () => {
  return (
    <div className="px-5 my-1 mx-auto">
      <Carousel fade>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome To UTOPIA</h3>
            <p>Your Satisfaction is Our Happiness</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>24/7 Active</h3>
            <p>Whenever you want to come we are always on</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Luxurius Equipment</h3>
      <p>High Quality gym exccessiories</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;