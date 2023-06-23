import React, { useEffect, useRef } from "react";
import styles from "../styles/BackgroundVideo.module.css";
import videojs from "video.js";

const BackgroundVideo = ({ movie }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoNode = videoRef.current;
    let player;

    if (videoNode) {
      player = videojs(videoNode);

      // Make the player fluid
      player.fluid(true);
    }

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <div className={`background-video ${styles.container}`}>
      <iframe
        ref={videoRef}
        className={styles.backgroundIframe}
        src={movie[0]}
        allowFullScreen
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
      <iframe
        ref={videoRef}
        className={styles.backgroundIframe}
        src={movie[1]}
        allowFullScreen
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
      <div className={styles.overlay}></div>
      <style jsx>{`
        .background-video {
          position: relative;
          width: 100%;
          height: 100vh;
        }

        .background-video iframe {
          width: 100%;
          height: 100%;
          border-radius: 15px;
        }
      `}</style>
    </div>
  );
};

export default BackgroundVideo;
