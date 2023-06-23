import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import styles from "../styles/BackgroundVideo.module.css";

const BackgroundVideo = ({ movie }) => {
  const iframeRef = useRef(null);
  const [clientRendered, setClientRendered] = useState(false);

  useEffect(() => {
    setClientRendered(true);
  }, []);

  useEffect(() => {
    let player;

    if (clientRendered && iframeRef.current) {
      const video = iframeRef.current.querySelector("video");

      player = videojs(video, {}, () => {
        // Player ready callback
      });
      player.fluid(true);
    }

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [clientRendered]);

  useEffect(() => {
    const handleOrientationChange = () => {
      // Add your code or logic here to handle the orientation change event
    };

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return (
    <div className={`background-video ${styles.container}`}>
      <div className={styles.iframeContainer}>
        <iframe
          ref={iframeRef}
          className={`${styles.backgroundIframe} video-js`}
          src={movie[0]}
          allowFullScreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        >
          {clientRendered && <video className="video-js"></video>}
        </iframe>
      </div>
      <div className={styles.overlay}></div>
      <style jsx>{`
        .background-video {
          position: relative;
          width: 100%;
          height: 100vh;
        }

        .iframeContainer {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio (modify as per your iframe aspect ratio) */
          height: 0;
          overflow: hidden;
        }

        .iframeContainer iframe {
          position: absolute;
          top: 0;
          left: 0;
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

        /* Styles for landscape orientation */
        @media screen and (orientation: landscape) {
          /* Add your landscape styles here */
        }

        /* Styles for portrait orientation */
        @media screen and (orientation: portrait) {
          /* Add your portrait styles here */
        }
      `}</style>
    </div>
  );
};

export default BackgroundVideo;
