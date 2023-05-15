import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import HeroBanner from '../components/HeroBanner';
import style from '../styles/styles.module.css';
import BackgroundVideo from '../components/BackgroundVideo';
import ShareButtons from '@components/ShareButtons';
import { Image } from 'cloudinary-react'

const scrollSearch = myKey => {
  window.scrollTo(0, 0);
  frontMatter.handleSearch(myKey)
};



const schemaData   = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"CollectionPage",
      "@id":"https://uwatchfree.vercel.app/",
      "url":"https://uwatchfree.vercel.app/",
      "name":"Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free",
      "isPartOf":{
        "@id":"https://uwatchfree.vercel.app/#website"
      },
      "about":{
        "@id":"https://uwatchfree.vercel.app/#organization"
      },
      "description":"Uwatchfree™ - Watch Movies, TV-Series & Sports Live Online Free",
      "breadcrumb":{
        "@id":"https://uwatchfree.vercel.app/#breadcrumb"
      },
      "inLanguage":"en-US"
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://uwatchfree.vercel.app/#breadcrumb",
      "itemListElement":[
        {
          "@type":"ListItem",
          "position":1,
          "name":"Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free"
        }
      ]
    },
    {
      "@type":"WebSite",
      "@id":"https://uwatchfree.vercel.app/#website",
      "url":"https://uwatchfree.vercel.app/",
      "name":"Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free",
      "description":"Uwatchfree™ - Watch Movies, TV-Series & Sports Live Online Free",
      "publisher":{
        "@id":"https://uwatchfree.vercel.app/#organization"
      },
      "potentialAction":[
        {
          "@type":"SearchAction",
          "target":{
            "@type":"EntryPoint",
            "urlTemplate":"https://uwatchfree.vercel.app/?s={search_term_string}"
          },
          "query-input":"required name=search_term_string"
        }
      ],
      "inLanguage":"en-US"
    },
    {
      "@type":"Organization",
      "@id":"https://uwatchfree.vercel.app/#organization",
      "name":"Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free",
      "url":"https://uwatchfree.vercel.app/",
      "logo":{
        "@type":"ImageObject",
        "inLanguage":"en-US",
        "@id":"https://uwatchfree.vercel.app/#/schema/logo/image/",
        "url":"https://uwatchfree.vercel.app/logo.png",
        "contentUrl":"https://uwatchfree.vercel.app/logo.png",
        "width":834,
        "height":135,
        "caption":"Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free"
      },
      "image":{
        "@id":"https://uwatchfree.vercel.app/#/schema/logo/image/"
      }
    }
  ]
};

const LandingPage = () => {


  return (
    <>
     <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
  />
     <Head>
        <title>Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free</title>
        <meta name="robots" content="index, follow" />  
        <meta name="revisit-after" content="1 days" />
        <meta name="facebook-domain-verification" content="13auzwhblf4oo4jn5vl6gcmebugsqb" />
        <meta property="fb:app_id" content="602176271414602" />
        <meta name='dailymotion-domain-verification' content='dmv6sg06w9r5eji88' />
        <meta name="monetag" content="076afbb772da1a62ef6f43756dfa5f65"></meta>
      <meta name="google-site-verification" content="4dFu4PUk1pc1IYqU6Brt84akCwNxaoUpKSO3gDW0kJ0" />
        <meta name="description" content="Uwatchfree™ - Watch Movies, TV-Series & Sports Live Online Free" />
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="keywords" content="uwatchfree,streaming,latest movies,online tv,latest free movies,watch latest movies online" />
	     <meta property="og:locale" content="en_US" /> 
      <meta property="og:locale" content="en_US" />   
      <meta property=" Content-Security-Policy: frame-ancestors 'self' uwatchfree.vercel.app *.uwatchfree.vercel.app;" />
      <meta property="og:site_name" content="Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free " />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free " />
      <meta property="og:description" content="Uwatchfree™ - Watch Movies, TV-Series & Sports Live Online Free " />
      <meta property="og:url" content="https://uwatchfree.vercel.app/" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image" content="https://uwatchfree.vercel.app/og_image.jpg" />
      <meta property="og:image:secure_url" content="https://uwatchfree.vercel.app/og_image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Uwatchfree™ - Watch Movies, TV-Series & Sports Live Online Free " />
      <meta name="twitter:description" content=" Uwatchfree™ - Watch Movies, TV-Series & Sports Live Online Free " />
      <meta name="twitter:image" content="https://uwatchfree.vercel.app/og_image.jpg" />
    

      <link rel="alternate" hrefLang="en-us" 	href="https://uwatchfree.vercel.app/"/>
  <link rel="alternate" hrefLang="en-gb" 	href="https://uwatchfree.vercel.app/"/>
  <link rel="alternate" hrefLang="en-ca" 	href="https://uwatchfree.vercel.app/"/>
  <link rel="alternate" hrefLang="en-au" 	href="https://uwatchfree.vercel.app/"/>
  <link rel="alternate" hrefLang="en-se" 	href="https://uwatchfree.vercel.app/"/>
  <link rel="alternate" hrefLang="en-fr" 	href="https://uwatchfree.vercel.app/"/>
  <link rel="alternate" hrefLang="en-dk" 	href="https://uwatchfree.vercel.app/"/>
  <link rel="alternate" hrefLang="en-no" 	href="https://uwatchfree.vercel.app/"/>
  <link rel="alternate" hrefLang="x-default" 	href="https://uwatchfree.vercel.app/"/>
  
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest"></link>
  <link rel="canonical" href="https://uwatchfree.vercel.app/" />

      </Head>
      <div className="bg-gray-600 shadow ">
   
      <Image
  src="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610087/og_image_okmgde.jpg"
  alt="Hero banner"
  loading="lazy"
  style={{ display: "block", width: "100%" }}
/>

       <ShareButtons url="https://uwatchfree.vercel.app" title="Watch Movies, TV-Series & Sports Live Online Free" image="https://uwatchfree.vercel.app/og_image.jpg" />
      

         <h1 className="text-center font-bold text-3xl  py-5" style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}>Uwatchfree™ -Watch Movies Tv Series & Sports Live. </h1>
       
     

      <BackgroundVideo  
        src="https://ik.imagekit.io/lwkyvy5lo/trailer.mp4?updatedAt=1683813651866"
        srcMobile="https://ik.imagekit.io/lwkyvy5lo/trailer.mp4?updatedAt=1683813651866"
      />

      </div>
   

    </>
  );
}

export default LandingPage;
