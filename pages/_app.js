import '@styles/globals.css'
import Footer from '../components/Footer';
import Hamburger from '../components/Hamburger';
import { PageTransition } from "../components/PageTransition";
import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import Maintenance from './maintenance';
import Script from 'next/script';
import React, { useState } from 'react';


function Application({ Component, pageProps }) {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(true); // true is on for 3 hours

  const renderContent = () => {
    if (isMaintenanceMode) {
      return <Maintenance setIsMaintenanceMode={setIsMaintenanceMode} />;
    } else {
      return (
        <>
          <div className="center">
            <GoogleAnalytics measurementId="G-K8QKRZ4B44" />
            <Script async data-id="101405628" src="//static.getclicky.com/js"></Script>
     
            <PageTransition>  
              <Hamburger />
              <Component {...pageProps} />
              <Footer />
            </PageTransition>
          </div>
        </>
      );
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
}

export default Application;