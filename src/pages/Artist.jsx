import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import Artwork from '../components/Artwork';
import './Artist.css';

function Artist() {
  const [artist, setArtist] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    async function fetchArtistInfo() {
      const res = await axios.get(
        'https://openaccess-api.clevelandart.org/api/creators/',
        {
          params: {
            name,
            limit: 1,
          },
        },
      );

      setArtist(res.data.data[0]);
    }
    fetchArtistInfo();
  }, [name]);

  if (artist == null) return <Loader />;

  return (
    <main className="artist">
      <h1>{artist.name}</h1>
      <p>
        <span>{artist.nationality}</span>{' '}
        <span>
          {artist.birth_year}-{artist.death_year}
        </span>
      </p>

      {/* eslint-disable-next-line react/no-danger */}
      <p dangerouslySetInnerHTML={{ __html: artist.biography }} />

      <Link className="artist-order-button" to={`/order/${artist.name}`}>
        I want to Order
      </Link>

      <section className="artist-art">
        <h2>Their work</h2>

        <ul className="artist-art-list">
          {artist.artworks.slice(0, 10).map((artwork) => (
            <li className="artist-art-list-item" key={artwork.id}>
              <Artwork id={artwork.id} />
            </li>
          ))}
        </ul>
      </section>

      <Link className="artist-order-button" to={`/order/${artist.name}`}>
        I want to Order
      </Link>
    </main>
  );
}

export default Artist;
