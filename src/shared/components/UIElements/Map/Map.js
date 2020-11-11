import React from 'react';

import './Map.css';

const Map = props => {
  return (
      <div className={`map ${props.className}`} style={props.style}>
        <div style={{
          backgroundColor: 'green',
          height: '100%',
          width: '100%',
          textAlign: 'center',
          position: 'relative',
        }}> <p style={{fontSize: '30px', fontWeight: 'bold'}}> I am a gorgeous map! </p>
        </div>
      </div>
  );
};

export default Map;