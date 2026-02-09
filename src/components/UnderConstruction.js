import React, { useState, useEffect } from 'react';
import './UnderConstruction.css';

const UnderConstruction = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`under-construction ${isLoaded ? 'fade-in' : ''}`}>
      <div className="container">
        <div className="badge">
          ● NEW WEBSITE UNDER CONSTRUCTION
        </div>
        
        <div className="main-heading">
          <h1>
            WE'RE BUILDING<br />
            <span className="orange-text">SOMETHING<br />
            STRONGER.</span>
          </h1>
        </div>
        
        <p className="description">
          New Zealand's industrial resin and safety specialists. Our new 
          digital home is currently under development to serve you better.
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
