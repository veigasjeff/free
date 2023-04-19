import '@styles/globals.css'
import Footer from '../components/Footer';
import Hamburger from '../components/Hamburger';
import { PageTransition } from "../components/PageTransition";
import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import Maintenance from './maintenance';
import Script from 'next/script';

function Application({ Component, pageProps }) {
  // Check if maintenance mode is enabled
    const isMaintenanceMode = false;

    if (isMaintenanceMode) {
      return <Maintenance />;
    }
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

export default Application
