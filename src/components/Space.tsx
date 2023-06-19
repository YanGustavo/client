import React from 'react';

interface SpaceProps {
  size?: number;
}

const Space: React.FC<SpaceProps> = ({ size }) => {
  const spaceStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    display: 'inline-block',
  };

  return <span style={spaceStyle}>&nbsp;</span>;
};

export default Space;
