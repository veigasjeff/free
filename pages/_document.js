import Document, { Html, Head, Main, NextScript } from 'next/document';

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

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        <link
          rel="preload"
          href="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610087/og_image_okmgde.jpg"
          as="image"
        />
        <link rel="canonical" href="https://uwatchfree.vercel.app/" />
        <link rel="preconnect" href="https://uwatchfree.vercel.app/" />
        <link rel="dns-prefetch" href="https://uwatchfree.vercel.app/" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <link
            rel="stylesheet"
            href="../styles/ad-blocker.module.css" // Adjust the path as needed
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
