import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import styles from "../styles/BackgroundVideo.module.css";

const BackgroundVideo = ({ movie }) => {
  const iframeRef = useRef(null);
  const [clientRendered, setClientRendered] = useState(false);

  useEffect(() => {
    let player;
  
    if (clientRendered && iframeRef.current) {
      const video = document.createElement("video");
      iframeRef.current.appendChild(video);
  
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
  
  return (
    <div className={styles.container}>
      <div className={styles.iframeContainer}>
        {movie && (
          <iframe
            ref={iframeRef}
            className={`${styles.backgroundIframe} video-js`}
            src={movie[0]}
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
