import React from 'react';
import ReactModal from 'react-modal';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    zIndex: '140',
  },
  content: {
    margin: '20vh auto',
    height: '40vh',
    width: '90vw',
    textAlign: 'center',
    border: '1px solid #ccc',
    background: ' #f9c700bb',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    zIndex: '150',
  },
};

function Modal(props) {
  const { open } = props;
  return (
    <ReactModal
      isOpen={open}
      ariaHideApp={false}
      className="orderModal"
      overlayClassName="orderModal"
      style={modalStyle}
    >
      <div className="modal">
        <p>
          Thank you for your order my lord, it will be conveyed to you shortly.
        </p>
        <Link className="order-home-button" to="/">
          Go back to home page
        </Link>
      </div>
    </ReactModal>
  );
}

Modal.propTypes = {
  open: Proptypes.bool.isRequired,
};

export default Modal;
