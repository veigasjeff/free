import Link from "next/link";
import Rating from "pages/Rating";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "@styles/video-player.module.css";
import Max from "pages/Max";
import ShareButtons from "@components/ShareButtons";
import Script from "next/script";
import { Image } from "cloudinary-react";
import Player from "@components/Player";
import ComingSoon from "@components/ComingSoon";


function RaidOn({ movie }) {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var player = videojs(
        document.querySelector("iframe").querySelector("video")
      );
      player.fluid(true);
    });
  }, []);
  
  const scrollSearch = (myKey) => {
    window.scrollTo(0, 0);
    frontMatter.handleSearch(myKey);
  };

  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowAd(true);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAdClose = () => {
    setShowAd(false);
  };

  if (!movie) {
    return <div className="text-3xl text-red-600 text-center">Loading...</div>;
  }
  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }
  const paragraphStyle = {
    whiteSpace: "pre-line",
  };
  const ldJsonData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Movie",
    name: movie.name,
    description: movie.synopsis,
    image: movie.poster,
    genre: movie.genre,
    datePublished: movie.yearRelease,
    director: movie.director,
    actor: movie.starring,
    contentRating: movie.contentRating,
    url: movie.link,
    potentialAction: {
      "@type": "WatchAction",
      target: [
        {
          "@type": "EntryPoint",
          name: "Bloody Daddy (2023)",
          urlTemplate:
            "https://uwatchfree.vercel.app/Bollywood/BloodyDaddy-2023/Watch-Bloody-Daddy-2023-Movie",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: movie.rating,
      bestRating: 10,
      worstRating: 0,
      ratingCount: 100,
    },
    author: [
      {
        "@type": "Person",
        name: "DrTrailer",
        url: "https://uwatchfree.vercel.app/DrTrailer.png",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Uwatchfree",
      logo: {
        "@type": "ImageObject",
        url: "https://uwatchfree.vercel.app/og_image.jpg",
      },
    },
    additionalProperty: {
      "@type": "PropertyValue",
      name: "Action Platform",
      value: ["Desktop Web Platform", "iOS Platform", "Android Platform"],
    },
  });

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJsonData }}
      />
      <Head>
        <title>
          Watch Bloody Daddy (2023) Full Movie Online Free | Uwatchfree™
        </title>
        {/* Rest of the meta tags */}
      </Head>
      <Script src="../../propler/ads.js" defer />
      <div className="bg-gray-600 shadow">
      <ComingSoon movie={movie} poster={movie.poster} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://uwatchfree.vercel.app/movies.json");
  const data = await res.json();
  const selectedMovie = data.find((movie) => movie.id === "INDEX97");
  return {
    props: {
      movie: selectedMovie,
    },
  };
}

export default RaidOn;
