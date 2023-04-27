import '@styles/globals.css';
import Footer from '../components/Footer';
import Hamburger from '../components/Hamburger';
import { PageTransition } from "../components/PageTransition";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import Script from 'next/script';
import Maintenance from './maintenance';

function Application({ Component, pageProps }) {

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




export default Application;
