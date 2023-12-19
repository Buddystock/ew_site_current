'use client';
import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';
import {
  PiPauseDuotone,
  PiPlayDuotone,
  PiSkipBackDuotone,
  PiSkipForwardDuotone,
  PiStopDuotone,
} from 'react-icons/pi';

interface AudioPlayerProps {
  playlist: string[];
}

export default function AudioPlayer({ playlist }: AudioPlayerProps) {
  const [howl, setHowl] = useState<Howl | null>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.5);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    function initializeAudio() {
      setHowl(
        new Howl({
          src: [playlist[currentSongIndex]],
          preload: true,
          autoplay: false,
          volume: volume,
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

  useEffect(() => {
    setVolume(volume);
  }, [volume]);

  function handlePlay() {
    if (howl) {
      howl.play();
    }
    setIsPlaying(true);
  }

  function handlePause() {
    if (howl && howl?.playing()) {
      howl.pause()
    }
    setIsPlaying(false);
  }


  function stopSong() {
    if (howl) {
      howl.stop();
    }
  }

  function playNextSong() {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  }

  function previousSong() {
    setCurrentSongIndex((prevIndex) => ((prevIndex - 1 + playlist.length) % playlist.length));
  }

  function handleVolumeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (howl) {
      howl.volume(newVolume);
    }
  }

  return (
    <section className="w-full h-full mx-auto flex justify-between items-center p-8">
      <div className="control flex flex-col justify-end items-center">
        {howl?.playing() ? (
          <>
            <button onClick={handlePause}>
              <PiPauseDuotone size={24} />
              Pause
            </button>
          </>
        ) : (
          <>
            <button onClick={handlePlay}>
              <PiPlayDuotone size={24} />
              Play
            </button>
          </>
        )}
      </div>
      <div className="control flex flex-col justify-start items-center">
        <button onClick={stopSong}>
          <PiStopDuotone size={24} />
          Stop
        </button>
      </div>
      <div className="control flex flex-col justify-start items-center">
        <button onClick={previousSong}>
          <PiSkipBackDuotone size={24} />
          Previous
        </button>
      </div>
      <div className="control flex flex-col justify-start items-center">
        <button onClick={playNextSong}>
          <PiSkipForwardDuotone size={24} />
          Next
        </button>
      </div>
      <div className="control flex flex-col justify-start items-center">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </section>
  );
}
