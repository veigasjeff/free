import '@styles/globals.css';
import Footer from '../components/Footer';
import Hamburger from '../components/Hamburger';
import { PageTransition } from "../components/PageTransition";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import Script from 'next/script';
import Head from 'next/head';

function Application({ Component, pageProps }) {
  
  return ( 
    <>
      
          <Head>
      
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="1 days" />
      <meta
        name="facebook-domain-verification"
        content="13auzwhblf4oo4jn5vl6gcmebugsqb"
      />
      <meta property="fb:app_id" content="602176271414602" />
      <meta
        name="dailymotion-domain-verification"
        content="dmv6sg06w9r5eji88"
      />
      <meta
        name="monetag"
        content="076afbb772da1a62ef6f43756dfa5f65"
      ></meta>
      <meta
        name="google-site-verification"
        content="4dFu4PUk1pc1IYqU6Brt84akCwNxaoUpKSO3gDW0kJ0"
      />
      <meta
        name="description"
        content="Uwatchfree™ - Watch Movies & TV-Series Online Free"
      />
      <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="keywords"
        content="uwatchfree,new movies 2023,movies 2023,streaming,latest movies,online tv,latest free movies,watch latest movies online"
      />
      <meta property="og:locale" content="en_US" />
      <meta property=" Content-Security-Policy: frame-ancestors 'self' uwatchfree.vercel.app *.uwatchfree.vercel.app;" />
      <meta
        property="og:site_name"
        content="Uwatchfree™ | Watch Movies & TV-Series Online Free "
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Uwatchfree™ | Watch Movies & TV-Series Online Free "
      />
      <meta
        property="og:description"
        content="Uwatchfree™ - Watch Movies & TV-Series Online Free "
      />
      <meta property="og:url" content="https://uwatchfree.vercel.app/" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta
        property="og:image"
        content="https://uwatchfree.vercel.app/og_image.jpg"
      />
      <meta
        property="og:image:secure_url"
        content="https://uwatchfree.vercel.app/og_image.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Uwatchfree™ - Watch Movies & TV-Series Online Free "
      />
      <meta
        name="twitter:description"
        content=" Uwatchfree™ - Watch Movies & TV-Series Online Free "
      />
      <meta
        name="twitter:image"
        content="https://uwatchfree.vercel.app/og_image.jpg"
      />

      <link
        rel="alternate"
        hrefLang="en-us"
        href="https://uwatchfree.vercel.app/"
      />
      <link
        rel="alternate"
        hrefLang="en-gb"
        href="https://uwatchfree.vercel.app/"
      />
      <link
        rel="alternate"
        hrefLang="en-ca"
        href="https://uwatchfree.vercel.app/"
      />
      <link
        rel="alternate"
        hrefLang="en-au"
        href="https://uwatchfree.vercel.app/"
      />
      <link
        rel="alternate"
        hrefLang="en-se"
        href="https://uwatchfree.vercel.app/"
      />
      <link
        rel="alternate"
        hrefLang="en-fr"
        href="https://uwatchfree.vercel.app/"
      />
      <link
        rel="alternate"
        hrefLang="en-dk"
        href="https://uwatchfree.vercel.app/"
      />
      <link
        rel="alternate"
        hrefLang="en-no"
        href="https://uwatchfree.vercel.app/"
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://uwatchfree.vercel.app/"
      />

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest"></link>
      <link rel="canonical" href="https://uwatchfree.vercel.app/" />
    <link
        rel="stylesheet"
        href="https://vjs.zencdn.net/7.15.4/video-js.css"
      />
      <script src="https://vjs.zencdn.net/7.15.4/video.js"></script>
    </Head>
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
