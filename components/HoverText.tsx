'use client'
import React, { useState } from 'react';

interface HoverTextType {
  text: string;
}

export default function HoverText({ text }: HoverTextType) {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className={`hover-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
    </div>
  );
}
