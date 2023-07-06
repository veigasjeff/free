import Link from "next/link";
import Rating from "pages/Rating";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "@styles/video-player.module.css";
import Max from "pages/Max";
import ShareButtons from "@components/ShareButtons";
import Script from "next/script";
import { Image } from "cloudinary-react";
import ComingPop from "@components/ComingPop";
import Player from "@components/Player";


function JackRyan ({ movie }) {
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Additional logic for mouse enter event
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Additional logic for mouse leave event
  };

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
          name: " Jack Ryan Season 4 (2023)",
          urlTemplate:
            "https://uwatchfree.vercel.app/Hollywood/JackRayan-2023/DownloadJackRyan-EP1",
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
          Watch  Jack Ryan Season 4 (2023) Full Movie Online Free | Uwatchfree™
        </title>
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="uwatchfree,Jack Ryan Season 4 movie,Jack Ryan Season 4 2023,index of Jack Ryan Season 4 movie,Jack Ryan Season 4 cast,Jack Ryan Season 4 trailer,Jack Ryan Season 4 release date,Jack Ryan Season 4 plot,Jack Ryan Season 4 reviews,Jack Ryan Season 4 streaming,Jack Ryan Season 4 watch online,Jack Ryan Season 4 download,Jack Ryan Season 4 full movie,Jack Ryan Season 4 movie download,Jack Ryan Season 4 movie free download,Jack Ryan Season 4 movie online,Jack Ryan Season 4 movie watch online"
        />
        <meta property="og:locale" content="en_US" />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index,follow"/>
        <meta name="revisit-after" content="1 days" />
        <meta
          property="og:site_name"
          content="Uwatchfree™ | Watch Movies & TV-Series Online Free"
        />
        <meta property="og:type" content="movie" />
        <meta
          property="og:title"
          content="Watch Jack Ryan Season 4 (2023) | Uwatchfree™"
        />
        <meta
          property="og:url"
          content="https://uwatchfree.vercel.app/Hollywood/JackRayan-2023/DownloadJackRyan-EP1"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1688158915/Tom-Clancys-Jack-Ryan-S04_rxnbdt.webp"
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
          content="Watch Jack Ryan Season 4 (2023) | Uwatchfree™"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1688158915/Tom-Clancys-Jack-Ryan-S04_rxnbdt.webp"
        />
        <meta
          name="description"
          content="Watch Jack Ryan Season 4 Full Movie Online on Uwatchfree™, You can also download  Jack Ryan Season 4 (2023) in full HD quality to watch later offline."
        />

        <link
          rel="canonical"
          href="https://uwatchfree.vercel.app/Hollywood/JackRayan-2023/"
        />
      </Head>
      <Script src="../../propler/ads.js" defer />
      <div className="bg-gray-600 shadow ">
    
        <h1
          className="flex flex-col text-center py-5 font-bold text-3xl items-center justify-center"
          style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}
        >
             Jack Ryan Season 4 Episode 1 - 2023
        </h1>

        <div className={styles["iframe-container"]}>
          <Player src={movie["movie.watchP1"]} />
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
        <h2
          className="flex container flex-col items-center py-5 justify-center space-y-3 text-3xl font-bold text-center text-text-white"
          style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}
        >
          Listen to Audio Summary The Movie  Jack Ryan Season 4 (2023)
        </h2>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="py-10"
        >
          <audio
            controls
            preload="metadata"
            playsInline
            crossOrigin="anonymous"
            controlsList="nodownload"
          >
           <source src="https://res.cloudinary.com/db36kfuq3/video/upload/v1688660140/JackRyan_jbet0p.mp3" />
          </audio>
        </div>
      
        
          <div className="flex justify-center">
            <Link href="../../Hollywood/JackRayan-2023/DownloadJackRyan-EP2">
              <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2">
                Episode 2
              </button>
            </Link>
          </div>
        
        <Rating />
        <a
          href={movie.link}
          className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2"
          target="_blank"
        >
          IMDb Rating: {movie.rating}
        </a>

        <ul
          className="flex container flex-col items-center justify-center space-y-3 text-xl font-bold text-center text-white"
          style={{ color: "#40D7BC", textShadow: "0px 0px 2px #000" }}
        >
           <li>Starring: {movie.starring.join(", ")}</li>
          <div className="grid grid-cols-1 mx-20 sm:grid-cols-5  x:grid-cols-5 gap-4">
            <div className="circle">
              <Image
                src="https://hips.hearstapps.com/hmg-prod/images/john-krasinski-GettyImages-517027236_1600.jpg?resize=1200:*"
                alt="John Krasinski Image"
                layout="responsive"
                width={250}
                height={250}
                title="John Krasinski."
              />
            </div>
            <div className="circle">
              <Image
                src="https://ntvb.tmsimg.com/assets/assets/65671_v9_bc.jpg?w=270&h=360"
                alt="Wendell Pierce Image"
                layout="responsive"
                width={250}
                height={250}
                title="Wendell Pierce."
              />
            </div>
            <div className="circle">
              <Image
                src="https://ntvb.tmsimg.com/assets/assets/166378_v9_bb.jpg?w=270&h=360"
                alt="Michael Kelly Image"
                layout="responsive"
                width={250}
                height={250}
                title="Michael Kelly."
              />
            </div>
            <div className="circle">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/0/03/Abbie_Cornish_TIFF_4%2C_2012.jpg"
                alt="Abbie Cornish Image"
                layout="responsive"
                width={250}
                height={250}
                title="Abbie Cornish."
              />
            </div>
            <div className="circle">
              <Image
                src="https://media1.popsugar-assets.com/files/thumbor/jiCXrMy8HG_qlSW9qY95gdhrP4c/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/01/11/118/n/1922153/571717195e6ee62d_GettyImages-903990898/i/Betty-Gabriel.jpg"
                alt="Betty Gabriel Image"
                layout="responsive"
                width={250}
                height={250}
                title="Betty Gabriel."
              />
            </div>
          </div>
          <li>Year of release: {movie.yearRelease}</li>
       
          <li>Director: {movie.director}</li>

          <div style={{ display: 'flex', gap: '10px' }}>
     
       <a href="https://en.wikipedia.org/wiki/Jim_Field_Smith">
            <div className="circle">
              <Image
                src="https://assets.fxnetworks.com/cms-next/production/cms/2017/06/05/web_crew_carltoncuse_the-strain_570x698.jpg"
                alt="Carlton Cuse Image"
                layout="responsive"
                width={250}
                height={250}
                title="Carlton Cuse."
              />
            </div>
          </a>
          <a href="https://en.wikipedia.org/wiki/George_Kay_(writer)">
            <div className="circle">
              <Image
                src="https://tribalbusinessnews.com/images/Graham_Roland.jpeg"
                alt="Graham Roland Image"
                layout="responsive"
                width={250}
                height={250}
                title="Graham Roland."
              />
            </div>
          </a>
    </div>
    
          <li>Country of origin: {movie.country}</li>
          <li>Language: {movie.language}</li>
          <li>Genre: {movie.genre}</li>
          <li>Content Rating: {movie.contentRating}</li>
          <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer' }}
      >
          <li>Original Network: {movie.Originalnetwork}</li>
          </span>
      {isHovered && (
        <img
          src="https://images.news18.com/ibnlive/uploads/2021/10/amazon-prime.jpg" // Replace with the actual path or URL of the hover image
          alt="Disney+ Hover Image"
          style={{ width: '200px', height: 'auto' }}
        />
      )}
          <h1
            className="flex container flex-col items-center justify-center space-y-3 text-2xl font-bold text-center text-text-white"
            style={{ textShadow: "0px 0px 2px #000" }}
          >
            Movie Synopsis:{" "}
          </h1>
          <h2
            className="flex container flex-col items-center justify-center space-y-3 text-3xl font-bold text-center text-text-white"
            style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}
          >
            In the Movie Jack Ryan Season 4 - 2023
          </h2>
          <p style={paragraphStyle}>{movie.synopsis}</p>
          
        </ul>

        <div className="flex flex-col py-10  text-blue-600 text-center items-center justify-center">
          <button
            className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2"
            onClick={togglePopup}
          >
            <h2>Watch Offical Trailer</h2>
          </button>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup ">
              <button className="close-button" onClick={togglePopup}>
                <h2 className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
                  {" "}
                  Close
                </h2>
              </button>
              <h2 className="text-2xl font-bold">
                Offical Trailer {movie.name}{" "}
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
          <style jsx>{`
          .circle {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid #40d7bc;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          .circle img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
            filter: contrast(1.2) saturate(1.2);
          }

          @media (max-width: 600px) {
            .circle {
              width: 120px;
              height: 120px;
            }
          }
        `}</style>
        <Image
          src={movie.banner}
          alt={`Banner for ${movie.title}`}
          loading="lazy"
          className=" rounded-3xl animate-pulse mx-auto my-10 "
        />
        <div className="flex flex-col py-10  text-blue-600 text-center items-center justify-center">
          <h3 className="text-3xl font-bold leading-normal mt-0 mb-2 text-blue-600">
            Link  {movie.name}
          </h3>
          <a href={movie.down1link1} target="_blank">
            <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2">
              Download
            </button>
          </a>
        
        
          <Max />

          <Link href="../../HollywoodAds">
            <buton className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2">
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
  const selectedMovie = data.find((movie) => movie.id === "INDEX14");
  return {
    props: {
      movie: selectedMovie,
    },
  };
}

export default JackRyan;
