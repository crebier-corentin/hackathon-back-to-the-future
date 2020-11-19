import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './OurCarousel.css';

const OurCarousel = () => {
  return (
    <Carousel>
      <div>
        <img
          className="img-OurCarousel"
          src="https://www.panoramadelart.com/sites/default/files/styles/moyen/public/joconde_1.jpg?itok=saTWX3MF"
          alt="La Joconde"
        />
        <p className="legend">La Joconde</p>
      </div>
      <div>
        <img
          className="img-OurCarousel"
          src="https://www.atthalin.fr/images_louvre2/re_charles_amboise_solari.jpg"
          alt="Gouverneur militaire de Paris"
        />
        <p className="legend">Gouverneur militaire de Paris</p>
      </div>
      <div>
        <img
          className="img-OurCarousel"
          src="https://i.pinimg.com/originals/b2/b9/99/b2b9993958d854bb72b249c2b10bf7a8.jpg"
          alt="François 1er"
        />
        <p className="legend">François 1er</p>
      </div>
    </Carousel>
  );
};

export default OurCarousel;
