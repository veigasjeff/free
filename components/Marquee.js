import React from 'react';
import styles from '../styles/Marquee.module.css';

const Marquee = ({ text, fontSize, color, isBold, speed = 10 }) => {
  return (
    <div className={styles.marquee} style={{ width: '100%', overflow: 'hidden'}}>
      <div className={styles.content} style={{ 
          whiteSpace: 'nowrap', 
          fontSize: fontSize, 
          color: color, 
          fontWeight: isBold ? 'bold' : 'normal',
        }}>
        {text}
      </div>
    </div>
  );
};

export default Marquee;
