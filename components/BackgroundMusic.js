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

    if (isPlaying) {
      audio.play().catch((error) => {
        // Autoplay was prevented, handle the error here
        console.error("Autoplay was prevented:", error);
      });
    } else {
      audio.pause();
      audio.currentTime = 0; // Reset the audio to the beginning
    }

    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset the audio to the beginning
    };
  }, [isPlaying]);

  return (
    <button onClick={handleButtonClick}>
      {isPlaying ? "Stop Music" : "Play Music"}
    </button>
  );
};

export default BackgroundMusic;
