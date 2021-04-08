import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './slider-images/main-slider-img-1.png'
import image2 from './slider-images/main-slider-img-2.png'
import image3 from './slider-images/main-slider-img-3.jpg'
const Slider =() => 
{
    return (
        <div className="carousel-wrapper">
            <Carousel  useKeyboardArrows autoPlay={true} showThumbs={false}>
                <div>
                <img src={image1} alt=""/>
                </div>
                <div>
                <img src={image2} alt=""/>
                </div>
                <div>
                <img src={image3} alt=""/>
                </div>
            </Carousel>
        </div>
    );
}

export default Slider