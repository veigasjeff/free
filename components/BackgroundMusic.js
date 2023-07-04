import { useEffect } from "react";

const BackgroundMusic = () => {
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

    playMusic(); // Start playing the music when the component mounts

    return () => {
      stopMusic(); // Stop the music when the component unmounts
    };
  }, []);

  return null;
};

export default BackgroundMusic;
