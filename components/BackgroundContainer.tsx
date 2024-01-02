import React, { ReactNode } from 'react';

interface BackgroundContainerProps {
  backgroundImage: string;
  opacity?: number;
  children: ReactNode;
}

export default function BackgroundContainer({
  backgroundImage,
  opacity = 1,
  children,
}: BackgroundContainerProps) {

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    height: '100%',
    width: '100%'
  };

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'scroll',
    backgroundPosition: 'center',
    opacity,
    zIndex: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle}></div>
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
};
