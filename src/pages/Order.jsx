import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Order() {
  const [king, setKing] = useState(false);
  const [artist, setArtist] = useState({});
  const [date, setDate] = useState(0);
  const [currentDate] = useState(0);
  const [price] = useState(0);
  const { name } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const averageDate = (birth, death) => {
    return Math.round(birth + (death - birth) / 2);
  };
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
    setDate(averageDate(artist.birth_year, artist.death_year));
  }, [name]);

  return (
    <section className="orderContainer">
      <h2>Order a masterpiece from {name}</h2>
      <article>
        <div
          className="orderLord"
          onClick={setKing(false)}
          onKeyDown={setKing(false)}
          role="button"
          tabIndex="0"
        >
          <h4>Choose lord service</h4>
          <p>
            By chosing our lord service, you have the ability to send a picture
            to the artist. Based on this, our errand boy will bring the
            masterpiece from {name} to you within a few minutes.
          </p>
        </div>
        <div
          className="orderKing"
          onClick={setKing(true)}
          onKeyDown={setKing(true)}
          role="button"
          tabIndex="-1"
        >
          <h4>Choose king service</h4>
          <p>
            By chosing our king service, a complete Uber Arts team will bring
            the artist directly to you. You will have the possibility to talk
            with {name}, allowing this master to have a better feel of your
            royal desire. A wide selection of clothes and accessories will also
            be brought to you by our team to suit your needs.
          </p>
        </div>
      </article>
      <form onSubmit={handleSubmit()}>
        {king ? (
          <label htmlFor="kingDesire">
            Please tell us what are your desire
            <textarea id="kingDesire" placeholder="Your royal desire">
              aaa
            </textarea>
          </label>
        ) : (
          <label htmlFor="lordSubject">
            Show the artist what you want
            <input id="lordSubject" type="file" />
          </label>
        )}
        <label htmlFor="setDate">
          Indicate the year
          <input id="setDate" type="number" />
        </label>
        <button type="submit">
          Request your masterpiece{date} {currentDate} {price}
        </button>
      </form>
    </section>
  );
}

export default Order;
