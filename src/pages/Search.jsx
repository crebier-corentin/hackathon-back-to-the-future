import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import './Search.css';
import { Artwork } from '../components/Artwork';

function debounce(fn, wait = 1) {
  let timeout;
  return function debouncedFn(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.call(this, ...args), wait);
  };
}

const nameFromDescRegex = /(.*) \(/;
function getArtistNameFromDesc(desc) {
  const match = nameFromDescRegex.exec(desc);

  return match?.[1];
}

function Search() {
  const { query: queryDefault } = useParams();

  const [artworks, setArtworks] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const [query, setQuery] = useState(queryDefault ?? '');
  const [nationality, setNationality] = useState(null);
  const [type, setType] = useState(null);

  const didMountRef = useRef(false);

  const searchArtworks = useCallback(async (query_, nationality_, type_) => {
    setLoading(true);
    try {
      const params = {
        cc0: true,
        has_image: 1,
        limit: 100,
        created_after: 1492,
        created_before: 1789,
      };

      if (query_ !== '') {
        params.q = query_;
      }

      if (nationality_ != null) {
        params.artists = nationality_;
      }

      if (type_ != null) {
        params.type = type_;
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

        filteredArtworks.push(artwork);
      }

      setArtworks(filteredArtworks);
    } finally {
      setLoading(false);
    }
  }, []);
  const debouncedSearchArtworks = useCallback(
    debounce(searchArtworks, 1000),
    [],
  );

  useEffect(() => {
    searchArtworks(query, nationality, type);
  }, [nationality, type]);

  useEffect(() => {
    // Don't launch 2 requests on mount
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    debouncedSearchArtworks(query, nationality, type);
  }, [query]);

  return (
    <main className="search">
      <h2>Search</h2>

      <section className="search-toggle-button-group">
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

      <section className="search-toggle-button-group">
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

      <label htmlFor="query-input" className="search-query-label">
        Search Query
        <input
          id="query-input"
          type="text"
          className="search-query-input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </label>

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
