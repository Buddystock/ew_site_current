'use client';
import React, { useEffect, useState } from 'react';
import { Howl, Howler } from 'howler';
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

  function setSongVolume(value: number) {
    if (howl) {
      howl.volume(value);
    }
  }

  return (
    <section className="m-4">
      <div className="flex justify-between items-center">
        <div className="control  flex flex-col justify-start items-center">
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
            max="1"
            step="0.1"
            value="1"
            onChange={(e) => setSongVolume(parseFloat(e.target.value))}
          />
          <label htmlFor="volume">Volume</label>
        </div>
      </div>
    </section>
  );
}
