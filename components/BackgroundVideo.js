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
    </div>
  );
};

export default BackgroundVideo;
