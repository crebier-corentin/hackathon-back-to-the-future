import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import './Search.css';
import { Artwork } from '../components/Artwork';

const nameFromDescRegex = /(.*) \(/;
function getArtistNameFromDesc(desc) {
  const match = nameFromDescRegex.exec(desc);

  return match?.[1];
}

function Search() {
  const [artworks, setArtworks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [nationality, setNationality] = useState(null);
  const [type, setType] = useState(null);

  useEffect(() => {
    async function searchArtworks() {
      setLoading(true);
      try {
        const params = {
          cc0: true,
          has_image: 1,
          limit: 100,
          created_after: 1492,
          created_before: 1789,
        };

        if (nationality != null) {
          params.artists = nationality;
        }

        if (type != null) {
          params.type = type;
        }

        const res = await axios.get(
          'https://openaccess-api.clevelandart.org/api/artworks/',
          {
            params,
          },
        );

        const filteredArtworks = [];
        for (const artwork of res.data.data) {
          if (artwork.creators[0]?.description == null) continue;

          artwork.artistName = getArtistNameFromDesc(
            artwork.creators[0].description,
          );
          if (artwork.artistName == null) continue;

          artwork.images.web.width = Number(artwork.images.web.width);
          artwork.images.web.height = Number(artwork.images.web.height);

          filteredArtworks.push(artwork);
        }

        setArtworks(filteredArtworks);
      } finally {
        setLoading(false);
      }
    }
    searchArtworks();
  }, [nationality, type]);

  return (
    <main className="search">
      <h1>Search</h1>

      <section>
        {[
          'French',
          'Italian',
          'German',
          'British',
          'Spanish',
          'Dutch',
          'Flemish',
        ].map((nationality_) => (
          <button
            key={nationality_}
            type="button"
            className={`search-toggle-button
             ${nationality_ === nationality ? 'active' : ''}
            `}
            onClick={() => {
              setNationality(
                nationality_ === nationality ? null : nationality_,
              );
            }}
          >
            {nationality_}
          </button>
        ))}
      </section>

      <section>
        {[
          'Drawing',
          'Painting',
          'Ceramic',
          'Furniture and woodwork',
          'Sculpture',
          'Jewelry',
        ].map((type_) => (
          <button
            key={type_}
            type="button"
            className={`search-toggle-button
             ${type_ === type ? 'active' : ''}
            `}
            onClick={() => {
              setType(type_ === type ? null : type_);
            }}
          >
            {type_}
          </button>
        ))}
      </section>

      {isLoading ? (
        <Loader />
      ) : (
        <ul className="artist-art-list">
          {artworks.map((artwork) => (
            <li
              key={artwork.id}
              className="artist-art-list-item search-art-list-item"
            >
              <Link
                className="search-link"
                to={`/artist/${artwork.artistName}`}
              >
                <Artwork artwork={artwork} />
                <h3 className="search-artist-name">{artwork.artistName}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Search;
