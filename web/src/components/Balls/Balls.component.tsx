'use client';

import React from 'react';

interface BlurComponentProps {
  top: string;
  left: string;
}

const BlurComponent: React.FC<BlurComponentProps> = ({ top, left }) => {
  const style: React.CSSProperties = {
    position: 'relative',
    top: top,
    left: left,
    filter: 'blur(200px)',
  };

  return (
    <div
      className="overflow-x-hidden w-[250px] h-[250px] bg-pink-500 rounded-full -z-[1]"
      style={style}
    />
  );
};

export default BlurComponent;
