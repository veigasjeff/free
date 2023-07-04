import { useEffect, useState } from "react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio('https://res.cloudinary.com/db36kfuq3/video/upload/v1688484639/background-music-1_fc5ool.mp3');


    const handleClick = () => {
      setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    };

    const handleButtonClick = () => {
      setIsPlaying(false);
    };

    document.addEventListener("click", handleClick);
    document.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });

    if (isPlaying) {
      audio.play();
      audio.loop = true; // Enable looping
    } else {
      audio.pause();
      audio.currentTime = 0; // Reset the audio to the beginning
    }

    return () => {
      audio.pause();
      document.removeEventListener("click", handleClick);
      document.querySelectorAll("button").forEach((button) => {
        button.removeEventListener("click", handleButtonClick);
      });
    };
  }, [isPlaying]);

  useEffect(() => {
    setIsPlaying(true); // Autoplay the music when the component mounts
  }, []);

  useEffect(() => {
    const handleLocalClick = (event) => {
      const clickedElement = event.target;
      if (clickedElement.tagName === "BUTTON") {
        setIsPlaying(false);
      }
    };

    document.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", handleLocalClick);
    });

    return () => {
      document.querySelectorAll("button").forEach((button) => {
        button.removeEventListener("click", handleLocalClick);
      });
    };
  }, []);

  return null;
};

export default BackgroundMusic;
