import React from "react";

import "./error-indicator.css";
import icon from "./dart_V.png";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} width="70" height="70" alt="error icon" />
      <span className="boom">BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but  I  already sent droids to fix it) </span>
    </div>
  );
};

export default ErrorIndicator;
