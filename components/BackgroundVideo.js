import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import styles from "../styles/BackgroundVideo.module.css";

const BackgroundVideo = ({ movie }) => {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    let player;

    if (containerRef.current) {
      player = videojs(containerRef.current, {}, () => {
        // Player ready callback
        player.fluid(true);
      });
      playerRef.current = player;
    }

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  useEffect(() => {
    const handleOrientationChange = () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = videojs(containerRef.current, {}, () => {
          // Player ready callback
          playerRef.current.fluid(true);
        });
      }
    };

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return (
    <div className={`background-video ${styles.container}`}>
      <div ref={containerRef} className={`video-js ${styles.videoPlayer}`}>
        <video className={`video-js ${styles.videoPlayer}`} ref={containerRef}>
          <source src={movie[0]} type="video/mp4" />
        </video>
      </div>
      <div className={styles.overlay}></div>
      <style jsx>{`
        .background-video {
          position: relative;
          width: 100%;
          height: 100vh;
        }

        .video-player {
          width: 100%;
          height: 100%;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Change the background color and opacity as needed */
        }
      `}</style>
    </div>
  );
};

export default BackgroundVideo;
