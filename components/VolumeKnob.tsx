'use client'
import React, { useRef, useState, useEffect } from 'react'
import { Howl } from 'howler';

interface VolumeKnobPropType {
  sound: React.MutableRefObject<Howl | null>;
}

export default function VolumeKnob({ sound }: VolumeKnobPropType) {
  const volumeRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    if (sound.current) {
      setVolume(sound.current.volume());
    }
  }, [sound]);

  useEffect(() => {
    if (sound.current) {
      sound.current.volume(volume);
    }
  }, [sound, volume]);


  function handleVolumeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  }

  function handleVolumeDragStart() {
    setIsDragging(true);
  }

  function handleVolumeDragEnd() {
    setIsDragging(false);
  }

  function handleMouseMove(event: MouseEvent) {
    if (isDragging && volumeRef.current) {
      const boundingRect = volumeRef.current.getBoundingClientRect();
      const offsetY = event.clientY - boundingRect.top;
      const percentage = offsetY / boundingRect.height;
      const newVolume = Math.max(0, Math.min(1, percentage));

      setVolume(newVolume);
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleVolumeDragEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleVolumeDragEnd);
    };
  }, [isDragging]);

  return (
    <section>
      <div
        ref={volumeRef}
        className="volume-knob"
        onMouseDown={handleVolumeDragStart}
      >
        {/* You can style this element to represent your volume knob */}
      </div>
      <div className="control flex flex-col justify-start items-center">
        <input
          style={{
            width: '100%',
            marginTop: '.4rem',
            appearance: 'none',
            background: '#e3e8e7',
            borderRadius: '8px',
            height: '5px',
            color: '#444140',
          }}
          id="volume"
          name="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <label htmlFor="volume">Volume</label>
      </div>
    </section>
  )
}
