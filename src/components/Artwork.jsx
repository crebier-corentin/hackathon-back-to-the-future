import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from './Loader';
import './Artwork.css';

function Artwork({ id }) {
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    async function fetchArtwork() {
      const res = await axios.get(
        `https://openaccess-api.clevelandart.org/api/artworks/${id}`,
      );

      setArtwork(res.data.data);
    }
    fetchArtwork();
  }, [id]);

  if (artwork == null) return <Loader />;

  return (
    <article
      className="artwork"
      style={{ backgroundImage: `url(${artwork.images.web.url})` }}
    >
      <div className="artwork-info">
        <h1>{artwork.title}</h1>
        <p>{artwork.creation_date}</p>
      </div>
    </article>
  );
}
Artwork.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Artwork;
