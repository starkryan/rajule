import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa"; // Import React Icons
import math

export default function SongSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    // Set the total duration of the audio when it is loaded
    audio.onloadedmetadata = () => {
      setDuration(audio.duration);
    };

    // Update current time while the audio is playing
    const updateCurrentTime = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("timeupdate", updateCurrentTime);

    return () => {
      audio.removeEventListener("timeupdate", updateCurrentTime);
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Format time in minutes:seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex items-center justify-center  bg-gray-900">
      <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
        {/* Play/Pause Button */}
        <button
          className="text-white text-3xl hover:text-indigo-500 transition-all"
          onClick={togglePlayPause}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        {/* Track Line */}
        <div className="flex-1 h-1 bg-gray-600 rounded-full relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-indigo-500"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>

        {/* Timer */}
        <div className="text-white text-sm w-16 text-center">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>

        {/* Audio Element */}
        <audio ref={audioRef} src="/music.mp3" />
      </div>
    </div>
  );
}
