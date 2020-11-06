import React from 'react';

import './ErrorIndicator.css'
import icon from './books-0.6s-177px.svg';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon" />
            <span className="boom">Crack!</span>
            <span>
                something has gone terribly wrong
      </span>
            <span>
                (but we try to fix it)
      </span>
        </div>
    );
};

export default ErrorIndicator;