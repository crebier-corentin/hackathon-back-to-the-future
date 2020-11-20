import React from 'react';
import './homeDetails.css';

function HomeDetails() {
  return (
    <section className="homeDetailsContainer">
      <div className="separateFromHeader" />
      <h3>Our services</h3>
      <p>
        If you&apos;re looking for original masterpieces, able to make other
        Lords jealous, Uber Arts services are just what you need. Thanks to our
        magical technology, we&apos;re able to contact any artist, from any
        place in time or space. Unique styles are now available for our beloved
        Lords. You just have to choose the artist you like the most.
      </p>
      <article className="detailsServices">
        <div className="innerDetails">
          <h4>Our standard Lord offer</h4>
          <p>
            By selecting our Lord service, you have the ability to send a
            picture to the artist. Based on this, our errand boy will bring the
            masterpiece from the artist to you within a few minutes. Thanks to
            our magical technology, you will not endure the time that the master
            needs to complete your command. A high quality service for every
            noble.
          </p>
        </div>
        <div className="innerDetails">
          <h4>Our premium King offer</h4>
          <p>
            By chosing our King service, a complete Uber Arts team will bring
            the artist directly to your Highness. You will have the possibility
            to talk with the great artist, allowing this master to have a better
            understanding of your royal desire. A wide selection of clothes and
            accessories will also be brought to you by our team to suit your
            needs.
          </p>
        </div>
      </article>
    </section>
  );
}

export default HomeDetails;
