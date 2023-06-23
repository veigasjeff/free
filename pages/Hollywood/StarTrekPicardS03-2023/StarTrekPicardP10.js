import Link from "next/link";
import Rating from "pages/Rating";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "@styles/video-player.module.css";
import Max from "pages/Max";
import ShareButtons from "@components/ShareButtons";
import Script from "next/script";
import { Image } from "cloudinary-react";
import videojs from "video.js";

function StarTrekPicardP10({ movie }) {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var player = videojs(
        document.querySelector("iframe").querySelector("video")
      );
      player.fluid(true);
    });
  }, []);
  
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
  const scrollSearch = (myKey) => {
    window.scrollTo(0, 0);
    frontMatter.handleSearch(myKey);
  };
  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }
  const ldJsonData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TVSeries",
    name: movie.name,
    description: movie.synopsis,
    image: movie.poster,
    genre: movie.genre,
    datePublished: movie.yearRelease,
    director: movie.director,
    actor: movie.starring,
    url: movie.link,

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: movie.rating,
      bestRating: 10,
      worstRating: 0,
      ratingCount: 1,
    },
    episode: [
      {
        "@type": "TVEpisode",
        name: "StarTrekPicard S01 Episode 1",
        url: "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP1",
      },
      {
        "@type": "TVEpisode",
        name: "StarTrekPicard S01 Episode 2",
        url: "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP2",
      },
      {
        "@type": "TVEpisode",
        name: "StarTrekPicard S01 Episode 3",
        url: "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP3",
      },
      {
        "@type": "TVEpisode",
        name: "StarTrekPicard S01 Episode 4",
        url: "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP4",
      },
      {
        "@type": "TVEpisode",
        name: "StarTrekPicard S01 Episode 5",
        url: "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP5",
      },
      {
        "@type": "TVEpisode",
        name: "StarTrekPicard S01 Episode 6",
        url: "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP6",
      },
      {
        "@type": "TVEpisode",
        name: "StarTrekPicard S01 Episode 7",
        url: "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP7",
      },
      {
        "@type": "TVEpisode",
        name: "StarTrekPicard S01 Episode 8",
        url: "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP8",
      },
      {
        "@type": "TVEpisode",
        name: "StarTrekPicard S01 Episode 9",
        url: "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP9",
      },
      {
        "@type": "TVEpisode",
        name: "StarTrekPicard S01 Episode 10",
        url: "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP10",
      },
    ],
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
    potentialAction: {
      "@type": "WatchAction",
      name: "Star Trek Picard S01 (2023)",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP1",
      },
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
          Watch Star Trek Picard S01 (2023) Full Movie Online Free | Uwatchfree™
        </title>
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="uwatchfree,watch free movies,full movie online free,hd movies,movie 2023,latest movie,dubbed movies,free movie download,watch star trek picard s01 movie,index of star trek picard s01 movie,star trek picard s01 movie 2023,star trek picard s01 movie online,watch star trek picard s01 movie online free,star trek picard s01 tv series,star trek picard s01 movie download,star trek picard s01 movie free download,star trek picard s01 movie download"
        />
        <meta property="og:locale" content="en_US" />

        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta
          property="og:site_name"
          content="Uwatchfree™ | Watch Movies & TV-Series Online Free"
        />
        <meta property="og:type" content="movie" />

        <meta
          property="og:title"
          content="Watch Star Trek Picard S01 (2023) | Uwatchfree™"
        />
        <meta
          property="og:url"
          content="https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP1"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1682464976/star-trek-picard-s01_vyb1jt.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://uwatchfree.vercel.app/"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Watch Star Trek Picard S01 (2023) | Uwatchfree™"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1682464976/star-trek-picard-s01_vyb1jt.webp"
        />
        <meta
          name="description"
          content="Watch StarTrekPicard S01 Full Movie Online on Uwatchfree™, You can also download Star Trek Picard S01 (2023) in full HD quality to watch later offline."
        />

        <link
          rel="canonical"
          href="https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/"
        />
      </Head>
      <Script src="../../propler/ads.js" defer />
      <div className="bg-gray-600 shadow ">
        <h1
          className="flex flex-col text-center py-5 font-bold text-3xl items-center justify-center"
          style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}
        >
          {movie.title} - EPISODE 10
        </h1>
        <div className={styles["iframe-container"]}>
          <iframe
            className="  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 "
            src={movie["movie.watchP10"]}
            width="100%"
            height="700"
            allowFullScreen
            webkitallowfullscreen
            mozallowFullScreen="true"
          ></iframe>
        </div>
        <h3 className="mb-9 text-bg  text-black-500 text-red-600 text-center xl:px-4 ">
          *Note: Pls Select the in the Player to Change your Language of your
          Choice and Setting to Change the Quality of Video.
        </h3>
        <ShareButtons
          url="https://uwatchfree.vercel.app"
          title="Watch Movies & TV-Series Online Free"
          image="https://uwatchfree.vercel.app/og_image.jpg"
        />
        <Image
          src={movie.poster}
          alt={`Banner for ${movie.title}`}
          loading="lazy"
          className=" animate-pulse rounded-3xl  mx-auto my-10 "
          style={{ height: "300px", width: "900px" }}
        />
        <h1
          className="flex flex-col text-center py-5 font-bold text-3xl items-center justify-center"
          style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}
        >
          {movie.title} - EPISODE 10
        </h1>
        <div className={styles["iframe-container"]}>
          <iframe
            className="  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 "
            src={movie["movie.watchSR10"]}
            width="100%"
            height="700"
            allowFullScreen
            webkitallowfullscreen
            mozallowFullScreen="true"
          ></iframe>
        </div>
        <h3 className="mb-9 text-bg  text-black-500 text-red-600 text-center xl:px-4 ">
          *Note: Pls Select the in the Player to Change your Language of your
          Choice and Setting to Change the Quality of Video.
        </h3>
        <ShareButtons
          url="https://uwatchfree.vercel.app"
          title="Watch Movies & TV-Series Online Free"
          image="https://uwatchfree.vercel.app/og_image.jpg"
        />
        <div className="grid grid-cols-1 mx-20 sm:grid-cols-2  x:grid-cols-3 gap-4">
          <div className="flex justify-center">
            <Link href="../../Hollywood/StarTrekPicardS03-2023/StarTrekPicardP1">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dSTP:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dSTP:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dSTP:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2">
                Episode 1
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/StarTrekPicardS03-2023/StarTrekPicardP2">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dSTP:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dSTP:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dSTP:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2 ">
                Episode 2
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/StarTrekPicardS03-2023/StarTrekPicardP3">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dSTP:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dSTP:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dSTP:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2">
                Episode 3
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/StarTrekPicardS03-2023/StarTrekPicardP4">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dSTP:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dSTP:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dSTP:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2">
                Episode 4
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/StarTrekPicardS03-2023/StarTrekPicardP5">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dSTP:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dSTP:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dSTP:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2">
                Episode 5
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/StarTrekPicardS03-2023/StarTrekPicardP6">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dSTP:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dSTP:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dSTP:bg-gray-900 group-hover:bg-opacity-0border-white-500 border-2 ">
                Episode 6
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/StarTrekPicardS03-2023/StarTrekPicardP7">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dSTP:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dSTP:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dSTP:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2 ">
                Episode 7
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="../../Hollywood/StarTrekPicardS03-2023/StarTrekPicardP8">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dSTP:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dSTP:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dSTP:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2">
                Episode 8
              </button>
            </Link>
          </div>{" "}
        </div>
        <div className="flex justify-center">
          <Link href="../../Hollywood/StarTrekPicardS03-2023/StarTrekPicardP9">
            <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dSTP:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dSTP:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dSTP:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2">
              Episode 9
            </button>
          </Link>
        </div>

        <Rating />
        <a
          href={movie.link}
          className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dSTP:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dSTP:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dSTP:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2"
          STPget="_blank"
        >
          IMDb Rating: {movie.rating}
        </a>

        <ul
          className="flex container flex-col items-center justify-center space-y-3 text-xl font-bold text-center text-white"
          style={{ color: "#40D7BC", textShadow: "0px 0px 2px #000" }}
        >
          <li>Starring: {movie.starring.join(", ")}</li>
          <li>Year of release: {movie.yearRelease}</li>
          <li>Director: {movie.director}</li>
          <li>Country: {movie.country}</li>
          <li>Genre: {movie.genre}</li>
          <h2>Synopsis :</h2>
          <h2
            className="flex container flex-col items-center justify-center space-y-3 text-xl font-bold text-center text-text-white"
            style={{ textShadow: "0px 0px 2px #000" }}
          >
            {movie.synopsis}
          </h2>
        </ul>

        <div className="flex flex-col py-10  text-blue-600 text-center items-center justify-center">
          <button
            className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dSTP:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dSTP:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dSTP:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2"
            onClick={togglePopup}
          >
            <h2>Watch Offical Trailer</h2>
          </button>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup ">
              <button className="close-button" onClick={togglePopup}>
                <h2 className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dSTP:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dSTP:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dSTP:bg-gray-900 group-hover:bg-opacity-0 ">
                  {" "}
                  Close
                </h2>
              </button>
              <h2 className="text-2xl font-bold">
                Offical Trailer {movie.name} (2023){" "}
              </h2>
              <video
                src={movie["movie.trailer"]}
                autoPlay
                controls
                loop
                width="840"
                height="360"
              />
            </div>
          </div>
        )}

        <style jsx>{`
          .popup-overlay {
            position: relative;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .popup {
            width: 800px;
            background-color: gray;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            animation: slide-down 0.5s ease;
          }

          @keyframes slide-down {
            from {
              transform: translateY(-100%);
            }
            to {
              transform: translateY(0);
            }
          }
        `}</style>
        <Image
          src={movie.poster}
          alt={`Banner for ${movie.title}`}
          loading="lazy"
          className=" animate-pulse rounded-3xl  mx-auto my-10 "
          style={{ height: "300px", width: "900px" }}
        />
        <div className="flex flex-col py-10  text-blue-600 text-center items-center justify-center">
          <h3 className="text-3xl font-bold leading-normal mt-0 mb-2 text-blue-600">
            Link 1 {movie.name} (2023)
          </h3>
          <a href={movie.down1link10} target="_blank">
            <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2">
              Download Episode 10
            </button>
          </a>
          <h3 className="text-3xl font-bold leading-normal mt-0 mb-2 text-blue-600">
            Link 2 {movie.name} (2023)
          </h3>
          <a href={movie.down2link10} target="_blank">
            <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2">
              Download Episode 10
            </button>
          </a>
          <Max />

          <Link href="../../HollywoodAds">
            <buton className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dSTP:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dSTP:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dSTP:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2">
              Back To Movie Selection
            </buton>
          </Link>
        </div>
      </div>{" "}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://uwatchfree.vercel.app/movies.json");

  const data = await res.json();
  const selectedMovie = data.find((movie) => movie.id === "STP03");
  return {
    props: {
      movie: selectedMovie,
    },
  };
}

export default StarTrekPicardP10;
