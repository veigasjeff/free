import React, { useEffect } from 'react';
import Head from 'next/head';

const AdBlocker = () => {
  useEffect(() => {
    const style = document.createElement('link');
    style.href = '../styles/ad-blocker.module.css';
    style.rel = 'stylesheet';
    style.type = 'text/css';
    document.head.appendChild(style);
  }, []);

  return (
    <Head>
      <link rel="stylesheet" href="../styles/ad-blocker.module.css" />
    </Head>
  );
};

export default AdBlocker;
