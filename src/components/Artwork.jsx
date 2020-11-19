import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from './Loader';
import './Artwork.css';

function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
  const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

  return { width: srcWidth * ratio, height: srcHeight * ratio };
}

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

  const { width, height } = useMemo(
    () =>
      calculateAspectRatioFit(
        artwork?.images?.web.width,
        artwork?.images?.web.height,
        1024,
        512,
      ),
    [artwork],
  );

  if (artwork == null) return <Loader />;

  if (artwork?.images == null) return '';

  return (
    <article
      className="artwork"
      style={{
        backgroundImage: `url(${artwork.images?.web.url})`,
        width,
        height,
      }}
    >
      <div className="artwork-info">
        <h2>{artwork.title}</h2>
        <p>{artwork.creation_date}</p>
      </div>
    </article>
  );
}
Artwork.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Artwork;
