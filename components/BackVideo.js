import React from 'react';

const BackVideo = ({ src, srcMobile }) => {
    const isMobile = /* Logic to determine if it's a mobile device */ true;

  return (
    <div className="background-video">
      {isMobile ? (
        <iframe
          src={srcMobile}
          frameBorder="0"
          allowFullScreen
          controll
          style={{ width: '100%', height: '100vh' }}
        ></iframe>
      ) : (
        <video autoPlay loop muted playsInline className="video">
          <source src={src} type="video/mp4" />
        </video>
      )}

      <style jsx>{`
        .background-video {
          position: relative;
          width: 100%;
          height: 100vh;
        }

        .video {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default BackVideo;
