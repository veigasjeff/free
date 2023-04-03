
import '@styles/globals.css'
import Footer from '../components/Footer';
import Hamburger from '../components/Hamburger';
import { PageTransition } from "../components/PageTransition";
import GoogleAnalytics from "@bradgarropy/next-google-analytics"


function Application({ Component, pageProps }) {
 
  return ( 
    <>
    <GoogleAnalytics measurementId="G-K8QKRZ4B44" />
      <PageTransition>  
  <Hamburger />

  
  <Component {...pageProps} />

  <Footer />

   </PageTransition>
   </>

  );
}

export default Application
