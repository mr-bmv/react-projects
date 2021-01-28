import React from 'react';
import errorImage from './error.png';

const ErrorIndicator = () => {
  return (
    <div className='text-center' >
      <div>
        <img
          src={errorImage}
          alt="error"
          className="img-fluid"
        />
      </div>
      <div className="text-danger" >BOOM!</div>
      <div className="text-danger">something has gone terribly wrong</div>
      <div className="text-danger">(but it would be fix soon)</div>
    </div>
  );
};

export default ErrorIndicator;