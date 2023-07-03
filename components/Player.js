import { useEffect } from "react";

const Player = ({ src }) => {

  return (
    <div className="wrapper">
      <iframe id="main-video" src={src} allowFullScreen   webkitallowfullscreen
            mozallowFullScreen="true"/>
    

      <style jsx>{`
        .wrapper {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%; /* Aspect ratio of 16:9 (360/640 = 0.5625) */
          box-shadow: 0 18px 20px 6px rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 700px; /* Set the desired height for the video */
        }

        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .controls {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px;
        }

        button {
          background-color: transparent;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
        }

        input[type="range"] {
          width: 200px;
          margin: 0 8px;
        }
      `}</style>
    </div>
  );
};

export default Player;
