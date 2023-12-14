'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Howl, Howler } from 'howler';
import {
  PiPauseDuotone,
  PiPlayDuotone,
  PiSkipBackDuotone,
  PiSkipForwardDuotone,
  PiStopDuotone,
} from 'react-icons/pi';
import VolumeKnob from './VolumeKnob';

interface AudioPlayerProps {
  playlist: string[];
}

export default function AudioPlayer({ playlist }: AudioPlayerProps) {
  const sound = useRef<Howl | null>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [howl, setHowl] = useState<Howl | null>(null);

  useEffect(() => {
    function initializeAudio() {
      setHowl(
        new Howl({
          src: [playlist[currentSongIndex]],
          preload: true,
          html5: true,
          autoplay: false,
          volume: 0.5,
          onend: () => playNextSong()
        })
      );
    }

    initializeAudio();

    return () => {
      if (howl) {
        howl.unload();
      }
    };
  }, [playlist, currentSongIndex]);

  function handlePlayPause() {
    if (howl && howl.playing()) {
      howl.pause();
    } else {
      howl?.play();
    }
  }

  function stopSong() {
    if (howl) {
      howl.stop();
    }
  }

  function playNextSong() {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  }

  function playPreviousSong() {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
  }

  return (
    <section className="w-full h-full mx-auto flex justify-between items-center p-8">
      <div className="control flex flex-col justify-end items-center">
        {howl?.playing() ? (
          <>
            <PiPauseDuotone size={24} />
            <button onClick={handlePlayPause}>Pause</button>
          </>
        ) : (
          <>
            <PiPlayDuotone size={24} />
            <button onClick={handlePlayPause}>Play</button>
          </>
        )}
      </div>
      <div className="control  flex flex-col justify-start items-center">
        <PiStopDuotone size={24} />
        <button onClick={stopSong}>Stop</button>
      </div>
      <div className="control  flex flex-col justify-start items-center">
        <PiSkipBackDuotone size={24} />
        <button onClick={playPreviousSong}>Previous</button>
      </div>
      <div className="control  flex flex-col justify-start items-center">
        <PiSkipForwardDuotone size={24} />
        <button onClick={playNextSong}>Next</button>
      </div>
     <VolumeKnob sound={sound} />
    </section>
  );
}
