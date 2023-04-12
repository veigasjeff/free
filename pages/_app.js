import '@styles/globals.css'
import Footer from '../components/Footer';
import Hamburger from '../components/Hamburger';
import { PageTransition } from "../components/PageTransition";
import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import Head from 'next/head';

function Application({ Component, pageProps }) {
 
  return ( 
    <>
     <div className="center">
    <GoogleAnalytics measurementId="G-K8QKRZ4B44" />
      <Head>
      <script async data-id="101405628" src="//static.getclicky.com/js"></script>
      </Head>
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
