import React from 'react';
import './NormalBox.css';

const NormalBox = ({ children })  => {
  return (
    <div className="normal-box">
      {children}
    </div>
  );
};

export default NormalBox;