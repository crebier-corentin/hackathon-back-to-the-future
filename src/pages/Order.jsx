import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from '../components/Modal';
import '../App.css';
import './order.css';

function Order() {
  const [king, setKing] = useState(false);
  const [date, setDate] = useState(0);
  const [currentDate, setCurrentDate] = useState(0);
  const [open, setOpen] = useState(false);
  const { name } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleCurrentDate = (e) => {
    setCurrentDate(Number(e.target.value));
  };

  const price = useMemo(() => {
    const diffDate = date - currentDate;
    const output = 5 + Math.abs(diffDate);
    return king ? output * 3 : output;
  }, [date, currentDate, king]);

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
      const stock = res.data.data[0];
      setDate(Number(stock.death_year));
    }
    fetchArtistInfo();
  }, [name]);

  return (
    <section className="orderContainer">
      <h2>Order a masterpiece from {name}</h2>
      <article className="nobleContainer">
        <div
          className="orderLord"
          onClick={() => {
            setKing(false);
          }}
          onKeyDown={() => {
            setKing(false);
          }}
          role="button"
          tabIndex="0"
        >
          <h4>Choose Lord service</h4>
          <p>
            By selecting our Lord service, you have the ability to send a
            picture to the artist. Based on this, our errand boy will bring the
            masterpiece from {name} to you within a few minutes. Thanks to our
            magical technology, you will not endure the time that the master
            needs to complete your command. A high quality service for every
            noble.
          </p>
        </div>
        <div
          className="orderKing"
          onClick={() => {
            setKing(true);
          }}
          onKeyDown={() => {
            setKing(true);
          }}
          role="button"
          tabIndex="-1"
        >
          <h4>Choose King service</h4>
          <p>
            By chosing our King service, a complete Uber Arts team will bring
            the artist directly to your Highness. You will have the possibility
            to talk with the great {name}, allowing this master to have a better
            understanding of your royal desire. A wide selection of clothes and
            accessories will also be brought to you by our team to suit your
            needs.
          </p>
        </div>
      </article>
      <form onSubmit={handleSubmit} className="orderForm">
        {king ? (
          <label htmlFor="kingDesire" className="kingLabel">
            Please give us your desire&apos;s details your Highness
            <textarea id="kingDesire" placeholder="Your royal desire" />
          </label>
        ) : (
          <label htmlFor="lordSubject">
            Show the artist what you want my Lord
            <input id="lordSubject" type="file" />
          </label>
        )}
        <label htmlFor="setDate">
          In which year do you want to receive your masterpiece my Lord ?
          <input
            id="setDate"
            type="number"
            placeholder="Enter a year"
            value={currentDate}
            min="-5000"
            max="5000"
            onChange={handleCurrentDate}
          />
        </label>
        {currentDate === 0 ? (
          <p className="waitingPrice">
            Waiting for a date to give you the price of your masterpiece my
            Lord.
          </p>
        ) : (
          <p className="havingPrice">
            Your masterpiece will cost you
            <span className="price"> {price}kg of gold</span> my Lord.
          </p>
        )}
        <button type="submit" className="orderButton">
          Request your masterpiece
        </button>
      </form>
      <Modal open={open} />
    </section>
  );
}

export default Order;
