import React, { useState, useEffect } from 'react';
import styles from '../styles/BackgroundVideo.module.css';
import Link from 'next/link'
import ShareButtons from '@components/ShareButtons';

const BackgroundVideo = ({ src, srcMobile }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prevState) => !prevState);
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="background-video">
      <video autoPlay loop muted playsInline className={styles.video}>
        <source src={isMobile ? srcMobile : src} type="video/mp4" />
      </video>
  
      <div className={styles.overlay}>
      <section className="box">
      <style jsx>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: nexa;
          }
          ul {
            list-style: none;
          }
          a {
            text-decoration: none;
            color: inherit;
            cursor: pointer;
          }
          .box {
            position: relative;
            justify-content: center;
            min-height: 100vh;
            color: #fff;
            text-align: center;
          }
          .box video {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
          }
          .box h1 {
            margin-bottom: 15px;
            font-size: 65px;
            text-transform: uppercase;
            text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
          }
          .box h3 {
            margin-bottom: 40px;
            font-size: 25px;
          }
          .box a.boxBtn {
            padding: 15px 35px;
            background: transparent;
            border-radius: 50px;
            color: #fff;
            text-transform: uppercase;
            border: 4px solid #fff;
            transition: all 0.5s;
          }
          .box a.boxBtn:hover {
            background: #fff;
            color: #000;
          }
          @media (max-width: 800px) {
            .box {
              min-height: 600px;
            }
            .box h1 {
              font-size: 32px;
            }
            .box h3 {
              font-size: 20px;
            }
            .box a.boxBtn {
              padding: 15px 40px;
            }
          }
        `}</style>
<h1>Uwatchfree™</h1>
        <h3>Watch Movies, TV Series & Sports Live.</h3>
        <a href="/Movies" className="boxBtn">
          Enter Now
        </a>
    
      </section>
      

     
      
      </div>
    
    </div>
      

       
  );
};

export default BackgroundVideo;
