import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
  }, []);

  if (artist == null) return 'Loading...';

  return <h1>{artist.name}</h1>;
}

export default Artist;
