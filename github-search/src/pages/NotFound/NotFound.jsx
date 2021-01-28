import React from 'react';
import errorImage from './error.png';

const NotFound = () => {
  return (
    <div className='text-center' >
      <div>
        <img
          src={errorImage}
          alt="error"
          className="img-fluid"
        />
      </div>
      <h1 className="text-danger" >404</h1>
      <h3 className="text-danger">page NOT found</h3>
    </div>
  );
};

export default NotFound;