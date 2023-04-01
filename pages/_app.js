
import '@styles/globals.css'
import Footer from '../components/Footer';
import Hamburger from '../components/Hamburger';
import { PageTransition } from "../components/PageTransition";
import Document, { Html, Head, Main, NextScript } from 'next/document';

function Application({ Component, pageProps }) {

  return ( 

      <PageTransition>  
  <Hamburger />

  
  <Component {...pageProps} />

  <Footer />

   </PageTransition>
  

  );
}

export default Application
