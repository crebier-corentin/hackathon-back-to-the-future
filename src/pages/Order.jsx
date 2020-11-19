import React from 'react';
import { useParams } from 'react-router-dom';

function Order() {
  // const [premium, setPremium] = useState(false);
  const { name } = useParams();
  return (
    <div className="orderContainer">
      <h2>Order a masterpiece from {name}</h2>
      <section>
        <article className="orderLord">
          <h4>Choose lord service</h4>
          <p>
            By chosing our lord service, you have the ability to send a picture
            to the artist. Based on this, our errand boy will bring the
            masterpiece from {name} to you within a few minutes.
          </p>
        </article>
        <article className="orderKing">
          <h4>Choose king service</h4>
          <p>
            By chosing our king service, a complete Uber Arts team will bring
            the artist directly to you. You will have the possibility to talk
            with {name}, allowing this master to have a better feel of your
            royal desire. A wide selection of clothes and accessories will also
            be brought to you by our team to suit your needs.
          </p>
        </article>
      </section>
    </div>
  );
}

export default Order;
