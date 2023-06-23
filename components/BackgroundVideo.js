import React, { useState, useEffect } from 'react';
import styles from '../styles/BackgroundVideo.module.css';

const BackgroundVideo = ({ movie }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div className={`background-video ${styles.container}`}>
      <iframe
        className={styles.backgroundIframe}
        src={movie[0]}
        allowFullScreen
        webkitallowfullscreen
        mozallowfullscreen="true"
      ></iframe>
      <iframe
        className={styles.backgroundIframe}
        src={movie[1]}
        allowFullScreen
        webkitallowfullscreen
        mozallowfullscreen="true"
      ></iframe>
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