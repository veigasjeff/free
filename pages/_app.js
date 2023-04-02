
import '@styles/globals.css'
import Footer from '../components/Footer';
import Hamburger from '../components/Hamburger';
import { PageTransition } from "../components/PageTransition";
import React from 'react';
import ReactGA from 'react-ga';

function Application({ Component, pageProps }) {
  React.useEffect(() => {
    ReactGA.initialize('G-K8QKRZ4B44');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return ( 

      <PageTransition>  
  <Hamburger />

  
  <Component {...pageProps} />

  <Footer />

   </PageTransition>
  

  );
}

export default Application
