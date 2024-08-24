
import React from 'react';
import yourImage from '../assest/logo2.png'; // Update this path to your actual PNG file location

const Logo = ({w, h}) => {
  return (
    <img 
      src={yourImage} 
      alt="Logo" 
      width={w} 
      height={h} 
      style={{objectFit: 'contain'}} // Ensures the image fits well within the given dimensions
    />
  );
};

export default Logo;
