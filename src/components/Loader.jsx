import React from 'react';
import './Loader.css';

const Loader = () => (
  <div className="wrap-cloud">
    <div className="wrap-sun">
      <div className="loader-sun">
        <span className="line" />
        <span className="line" />
        <span className="line" />
        <span className="line" />
        <span className="line" />
        <span className="line" />
        <span className="line" />
        <span className="line" />
        <div className="circle" />
      </div>
    </div>
  </div>
);

export default Loader;
