import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": "https://uwatchfree.vercel.app/",
          url: "https://uwatchfree.vercel.app/",
          name: "Uwatchfree™ | Watch Movies & TV-Series Online Free",
          isPartOf: {
            "@id": "https://uwatchfree.vercel.app/#website",
          },
          about: {
            "@id": "https://uwatchfree.vercel.app/#organization",
          },
          description: "Uwatchfree™ - Watch Movies & TV-Series Online Free",
          breadcrumb: {
            "@id": "https://uwatchfree.vercel.app/#breadcrumb",
          },
          inLanguage: "en-US",
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://uwatchfree.vercel.app/#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Uwatchfree™ | Watch Movies & TV-Series Online Free",
            },
          ],
        },
        {
          "@type": "WebSite",
          "@id": "https://uwatchfree.vercel.app/#website",
          url: "https://uwatchfree.vercel.app/",
          name: "Uwatchfree™ | Watch Movies & TV-Series Online Free",
          description: "Uwatchfree™ - Watch Movies & TV-Series Online Free",
          publisher: {
            "@id": "https://uwatchfree.vercel.app/#organization",
          },
          potentialAction: [
            {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://uwatchfree.vercel.app/?s={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          ],
          inLanguage: "en-US",
        },
        {
          "@type": "Organization",
          "@id": "https://uwatchfree.vercel.app/#organization",
          name: "Uwatchfree™ | Watch Movies & TV-Series Online Free",
          url: "https://uwatchfree.vercel.app/",
          logo: {
            "@type": "ImageObject",
            inLanguage: "en-US",
            "@id": "https://uwatchfree.vercel.app/#/schema/logo/image/",
            url: "https://uwatchfree.vercel.app/logo.png",
            contentUrl: "https://uwatchfree.vercel.app/logo.png",
            width: 834,
            height: 135,
            caption: "Uwatchfree™ | Watch Movies & TV-Series Online Free",
          },
          image: {
            "@id": "https://uwatchfree.vercel.app/#/schema/logo/image/",
          },
        },
      ],
    };
    return (
      <Html>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
        <title>Uwatchfree™ | Watch Movies & TV-Series Online Free</title>
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
