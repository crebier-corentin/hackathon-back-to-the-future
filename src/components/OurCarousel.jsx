import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './OurCarousel.css';
import { Link } from 'react-router-dom';

const OurCarousel = () => {
  return (
    <div>
      <Carousel>
        <div>
          <Link to="/artist/Leonardo da Vinci">
            <img
              className="img-OurCarousel"
              src="https://www.panoramadelart.com/sites/default/files/styles/moyen/public/joconde_1.jpg?itok=saTWX3MF"
              alt="Mona Lisa"
            />
            <p className="legend">Mona Lisa</p>
          </Link>
        </div>
        <div>
          <Link to="/artist/Raphael">
            <img
              className="img-OurCarousel"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg"
              alt="The School of Athens"
            />
            <p className="legend">The School of Athens</p>
          </Link>
        </div>
        <div>
          <Link to="/artist/Michelangelo">
            <img
              className="img-OurCarousel"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1920px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg"
              alt="The Creation of Adam"
            />
            <p className="legend">The Creation of Adam</p>
          </Link>
        </div>
        <div>
          <Link to="/artist/Johannes Vermeer">
            <img
              className="img-OurCarousel"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/800px-Meisje_met_de_parel.jpg"
              alt="Girl with a Pearl Earring"
            />
            <p className="legend">Girl with a Pearl Earring</p>
          </Link>
        </div>
        <div>
          <Link to="/artist/Rembrandt">
            <img
              className="img-OurCarousel"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/1280px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg"
              alt="The Night Watch"
            />
            <p className="legend">The Night Watch</p>
          </Link>
        </div>
        <div>
          <Link to="/artist/Claude Monet">
            <img
              className="img-OurCarousel"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Monet_-_Seerosen_1906.jpg/1024px-Monet_-_Seerosen_1906.jpg"
              alt="Water Lilies"
            />
            <p className="legend">Water Lilies</p>
          </Link>
        </div>
        <div>
          <Link to="/artist/Vincent van Gogh">
            <img
              className="img-OurCarousel"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
              alt="The Starry Night"
            />
            <p className="legend">The Starry Night</p>
          </Link>
        </div>
        <div>
          <Link to="/artist/Pablo Picasso">
            <img
              className="img-OurCarousel"
              src="https://www.themost10.com/wp-content/uploads/2012/03/Girl-Before-A-Mirror-By-Pablo-Picasso.jpg"
              alt="The Old Guitarist"
            />
            <p className="legend">The Old Guitarist</p>
          </Link>
        </div>
        <div>
          <Link to="/artist/Jan van Eyck">
            <img
              className="img-OurCarousel"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Van_Eyck_-_Arnolfini_Portrait.jpg/800px-Van_Eyck_-_Arnolfini_Portrait.jpg"
              alt="The Arnolfini Portrait"
            />
            <p className="legend">The Arnolfini Portrait</p>
          </Link>
        </div>
        <div>
          <Link to="/artist/Salvador Dali">
            <img
              className="img-OurCarousel"
              src="https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg"
              alt="The Persistence of Memory"
            />
            <p className="legend">The Persistence of Memory</p>
          </Link>
        </div>
        <div>
          <Link to="/artist/Grant Wood">
            <img
              className="img-OurCarousel"
              src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg"
              alt="American Gothic"
            />
            <p className="legend">American Gothic</p>
          </Link>
        </div>
        <div>
          <Link to="/artist/Sandro Botticelli">
            <img
              className="img-OurCarousel"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1920px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg"
              alt="The Birth of Venus"
            />
            <p className="legend">The Birth of Venus</p>
          </Link>
        </div>
        <div>
          <Link to="/artist/Pierre-Auguste Renoir">
            <img
              className="img-OurCarousel"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg/1280px-Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg"
              alt="Dance at Le Moulin de la Galette"
            />
            <p className="legend">Dance at Le Moulin de la Galette</p>
          </Link>
        </div>
        <div>
          <Link to="/artist/Paul Cezanne">
            <img
              className="img-OurCarousel"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Mont_Sainte-Victoire_with_Large_Pine%2C_by_Paul_C%C3%A9zanne.jpg/1280px-Mont_Sainte-Victoire_with_Large_Pine%2C_by_Paul_C%C3%A9zanne.jpg"
              alt="Mont Sainte-Victoire"
            />
            <p className="legend">Mont Sainte-Victoire</p>
          </Link>
        </div>
        <div>
          <Link to="/artist/Edvard Munch">
            <img
              className="img-OurCarousel"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg"
              alt="The Scream"
            />
            <p className="legend">The Scream</p>
          </Link>
        </div>
        <div>
          <Link to="/artist/Eduard Manet">
            <img
              className="img-OurCarousel"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg"
              alt="The Luncheon on the Glass"
            />
            <p className="legend">The Luncheon on the Glass</p>
          </Link>
        </div>
      </Carousel>
    </div>
  );
};

export default OurCarousel;
