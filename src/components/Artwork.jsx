import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from './Loader';
import './Artwork.css';

function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
  const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

  return { width: srcWidth * ratio, height: srcHeight * ratio };
}

function Artwork({ artwork }) {
  const { width, height } = useMemo(
    () =>
      calculateAspectRatioFit(
        Number(artwork?.images?.web.width ?? 0),
        Number(artwork?.images?.web.height ?? 0),
        1024,
        512,
      ),
    [artwork],
  );

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
  artwork: PropTypes.shape({
    title: PropTypes.string,
    creation_date: PropTypes.string,
    images: PropTypes.shape({
      web: PropTypes.shape({
        width: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
        height: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
};

function FetchingArtwork({ id }) {
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

  return <Artwork artwork={artwork} />;
}
FetchingArtwork.propTypes = {
  id: PropTypes.number.isRequired,
};

export { Artwork, FetchingArtwork };
