import React from 'react';
import ReactModal from 'react-modal';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

function Modal(props) {
  const { open } = props;
  return (
    <ReactModal isOpen={open} ariaHideApp={false}>
      <div>
        Thank you for your order my lord, it will be conveyed to you shortly.
        <Link className="order-home-button" to="/">
          Go back to home back
        </Link>
      </div>
    </ReactModal>
  );
}

Modal.propTypes = {
  open: Proptypes.bool.isRequired,
};

export default Modal;
