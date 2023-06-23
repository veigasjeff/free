import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import styles from "../styles/BackgroundVideo.module.css";

const BackgroundVideo = ({ movie }) => {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    let player;

    if (iframeRef.current) {
      player = videojs(iframeRef.current.querySelector("video"), {}, () => {
        // Player ready callback
        player.fluid(true);
      });
      playerRef.current = player;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const handleOrientationChange = () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = videojs(iframeRef.current.querySelector("video"), {}, () => {
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
      <div className={styles.overlay}></div>
      <iframe
        ref={iframeRef}
        className={styles.backgroundIframe}
        src={movie[0]}
        allowFullScreen
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
      <style jsx>{`
        .background-video {
          position: relative;
          width: 100%;
          height: 100vh;
        }

        .backgroundIframe {
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
