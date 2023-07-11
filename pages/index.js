import React from "react";
import Head from "next/head";
import BackgroundVideo from "../components/BackgroundVideo";
import ShareButtons from "@components/ShareButtons";
import styled from "styled-components";
import HeroBanner from "../components/HeroBanner";
import BackgroundMusic from "@components/BackgroundMusic";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const HeroBannerContainer = styled.div`
  width: 1350px;
  height: auto;
  position: relative;
  top: 0;
  left: 0;
  z-index: -1;
`;

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://uwatchfree.vercel.app/",
      "url": "https://uwatchfree.vercel.app/",
      "name": "UWatchFree | Watch Movies and TV-Series Online Free",
      "isPartOf": {
        "@id": "https://uwatchfree.vercel.app/#website"
      },
      "about": {
        "@id": "https://uwatchfree.vercel.app/#organization"
      },
      "description": "Watch free movies online free. UWatchFree is a movie streaming site with all new Hollywood and Bollywood movies added daily. No registration required for free streaming movie.",
      "breadcrumb": {
        "@id": "https://uwatchfree.vercel.app/#breadcrumb"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://uwatchfree.vercel.app/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://uwatchfree.vercel.app/#website",
      "url": "https://uwatchfree.vercel.app/",
      "name": "Uwatchfree™",
      "description": "",
      "publisher": {
        "@id": "https://uwatchfree.vercel.app/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://uwatchfree.vercel.app/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      ],
      "inLanguage": "en-US"
    },
    {
      "@type": "Organization",
      "@id": "https://uwatchfree.vercel.app/#organization",
      "name": "Uwatchfree™",
      "url": "https://uwatchfree.vercel.app/",
      "logo": {
        "@type": "ImageObject",
        "inLanguage": "en-US",
        "@id": "https://uwatchfree.vercel.app/#/schema/logo/image/",
        "url": "https://uwatchfree.vercel.app/logo.png",
        "contentUrl": "https://uwatchfree.vercel.app/logo.png",
        "width": 834,
        "height": 135,
        "caption": "Uwatchfree™"
      },
      "image": {
        "@id": "https://uwatchfree.vercel.app/#/schema/logo/image/"
      }
    }
  ]
};



const LandingPage = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Head>
        {/* Head content */}
      </Head>
      <div>
        <BackgroundMusic />
        <ShareButtons
          url="https://uwatchfree.vercel.app"
          title="Watch Movies, TV-Series & Sports Live Online Free"
          image="https://uwatchfree.vercel.app/og_image.jpg"
        />

        <HeroBannerContainer>
          <HeroBanner
            src="/Image.jpg" // Update the file name and extension accordingly
            alt="Uwatchfree Image"
            layout="responsive"
            width={1350}
            height="auto"
          />
        </HeroBannerContainer>

        <h1 className="text-center font-bold text-3xl py-5 text-green-500">
          Uwatchfree™
        </h1>

        <section className="box">
          <BackgroundVideo
            src="https://ik.imagekit.io/lwkyvy5lo/trailer.mp4?updatedAt=1683813651866"
            srcMobile="https://ik.imagekit.io/lwkyvy5lo/trailer.mp4?updatedAt=1683813651866"
          />

          {/* Additional styles */}
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
