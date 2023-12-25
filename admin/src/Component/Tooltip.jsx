import React, { useState } from 'react';

export const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div className=''
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      {isVisible && (
       <div
       className='tooltip'
       style={{
         position: 'absolute',
         top: '110%',
         left: '30%',
         transform: 'translateX(-50%)',
         backgroundColor: 'rgba(0, 0, 0, 0.8)',
         color: '#fff',
         padding: '10px',
         borderRadius: '4px',
         zIndex: 10, // Ensure the tooltip appears above other elements
         minWidth: '200px',
       }}
     >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
