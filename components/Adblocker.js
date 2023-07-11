import React, { useEffect } from 'react';

const AdBlocker = () => {
  useEffect(() => {
    const style = document.createElement('link');
    style.href = '../styles/ad-blocker.module.css';
    style.rel = 'stylesheet';
    style.type = 'text/css';
    document.head.appendChild(style);
  }, []);

  return (
    // Rest of your component's content
    <div>
      {/* Your component's content here */}
    </div>
  );
};

export default AdBlocker;
