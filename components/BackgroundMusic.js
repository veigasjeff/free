import { useEffect, useState } from "react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  useEffect(() => {
    const audio = new Audio(
      "https://res.cloudinary.com/db36kfuq3/video/upload/v1688484639/background-music-1_fc5ool.mp3"
    );

    audio.loop = true; // Enable looping

    const playMusic = () => {
      audio.play().catch((error) => {
        // Autoplay was prevented, handle the error here
        console.error("Autoplay was prevented:", error);
      });
    };

    const stopMusic = () => {
      audio.pause();
      audio.currentTime = 0; // Reset the audio to the beginning
    };

    if (isPlaying) {
      playMusic(); // Start playing the music when isPlaying is true
    } else {
      stopMusic(); // Stop the music when isPlaying is false
    }

    return () => {
      stopMusic(); // Stop the music when the component unmounts
    };
  }, [isPlaying]);

  useEffect(() => {
    // Autoplay the music when the component mounts
    setIsPlaying(true);
  }, []);

  return (
    <button onClick={handleButtonClick}>
      {isPlaying ? "Stop Music" : "Play Music"}
    </button>
  );
};

export default BackgroundMusic;
