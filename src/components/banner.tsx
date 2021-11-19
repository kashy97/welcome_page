import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {

    return (
        <section>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="lands-endslide__800x600.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Mountain</h3>
                <p>Pleasant view from above</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="lake.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Sunset</h3>
                <p>Smooth Texture of a landscape.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="photo-1605457867610-e990b192418e.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Horse Ride</h3>
                <p>Kids favourite in an exhibition.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default Banner;