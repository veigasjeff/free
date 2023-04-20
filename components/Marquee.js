import React from 'react';
import styles from '../styles/Marquee.module.css';

const Marquee = ({ text, fontSize, color, isBold, speed = 10 }) => {
  const textLength = text.length;
  const animationDuration = textLength / speed;

  return (
    <div className={styles.marquee} style={{ width: '100%', overflow: 'hidden'}}>
      <div className={styles.content} style={{ 
          whiteSpace: 'nowrap', 
          fontSize: fontSize, 
          color: color, 
          fontWeight: isBold ? 'bold' : 'normal',
          textShadow: "2px 2px 5px #000",
        }}>
        {text}
      </div>
    </div>
  );
};

export default Marquee;
