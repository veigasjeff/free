import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/BackgroundVideo.module.css";

const BackgroundVideo = ({ movie }) => {
  const iframeRef = useRef(null);
  const [clientRendered, setClientRendered] = useState(false);

  useEffect(() => {
    setClientRendered(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.iframeContainer}>
        {clientRendered && (
          <iframe
            ref={iframeRef}
            className={styles.backgroundIframe}
            src={movie}
            allowFullScreen
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
        )}
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default BackgroundVideo;
