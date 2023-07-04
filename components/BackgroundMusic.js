import { useEffect, useState } from "react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(
      "https://res.cloudinary.com/db36kfuq3/video/upload/v1688484639/background-music-1_fc5ool.mp3"
    );

    const handleClick = () => {
      setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    };

    document.addEventListener("click", handleClick);

    if (isPlaying) {
      audio.loop = true; // Enable looping
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
      document.removeEventListener("click", handleClick);
    };
  }, [isPlaying]);

  return null;
};

export default BackgroundMusic;
