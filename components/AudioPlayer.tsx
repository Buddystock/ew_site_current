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
    <section className=" absolute left-1/2 transform -translate-x-1/2 bottom-4 z-10 w-full h-full mx-auto flex justify-between items-center p-8">
      <div className="flex justify-center items-center">
        {howl?.playing() ? (
          <button onClick={handlePause} className="flex flex-col justify-center items-center">
            <PiPauseDuotone size={24} />
            Pause
          </button>
        ) : (
          <button onClick={handlePlay} className="flex flex-col justify-center items-center">
            <PiPlayDuotone size={24} />
            Play
          </button>
        )}
      </div>
      <div className="flex justify-center items-center">
        <button onClick={stopSong} className="flex flex-col justify-center items-center">
          <PiStopDuotone size={24} />
          Stop
        </button>
      </div>
      <div className="flex justify-center items-center">
        <button onClick={previousSong} className="flex flex-col justify-center items-center">
          <PiSkipBackDuotone size={24} />
          Previous
        </button>
      </div>
      <div className="flex justify-center items-center">
        <button onClick={playNextSong} className="flex flex-col justify-center items-center">
          <PiSkipForwardDuotone size={24} />
          Next
        </button>
      </div>
      <div className="slidecontainer flex justify-center items-center">
        <input
          className="slider"
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
