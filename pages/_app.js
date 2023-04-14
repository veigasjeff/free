import dynamic from 'next/dynamic';
import { useState } from 'react';
import '@styles/globals.css'
import Footer from '../components/Footer';
import Hamburger from '../components/Hamburger';
import { PageTransition } from "../components/PageTransition";
import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import Script from 'next/script';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/DynamicComponent').then((mod) => mod.DynamicComponent),
  { ssr: false }
);

function Application({ Component, pageProps }) {
  const [showDynamicComponent, setShowDynamicComponent] = useState(false);

  const handleClick = () => {
    setShowDynamicComponent(true);
  };

  return (
    <>
      <div className="center">
        <GoogleAnalytics measurementId="G-K8QKRZ4B44" />
        <Script async data-id="101405628" src="//static.getclicky.com/js"></Script>

        <PageTransition>
          <Hamburger />
          <Component {...pageProps} />
          {showDynamicComponent && <DynamicComponentWithNoSSR />}
          <Footer />
        </PageTransition>
      </div>
    </>
  );
}

export default Application;
