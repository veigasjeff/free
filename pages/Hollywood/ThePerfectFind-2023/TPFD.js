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


function ThePerfectFind({ movie }) {
 
  
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
          name: " The Perfect Find (2023)",
          urlTemplate:
            "https://uwatchfree.vercel.app/Hollywood/ThePerfectFind-2023/TPFD ",
            inLanguage: movie.language,
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          }
        ]
      },
      releasedEvent: {
        "@type": "PublicationEvent",
        startDate: movie.date,
        location: {
          "@type": "Country",
          name: movie.country,
        }
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
          Watch The Perfect Find (2023) Full Movie Online Free | Uwatchfree™
        </title>
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
      content="the perfect find, the perfect find 2023 online, watch english movie the perfect find online, index of the perfect find movie, watch the perfect find 2023, the perfect find hd streaming online, the perfect find videos, action, drama, the perfect find cast, english movie, the perfect find action movie, the perfect find movie download, new release, new english movie, uwatchfree, blockbuster movie, uwatchfree movies"
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
          content="Watch The Perfect Find (2023) | Uwatchfree™"
        />
        <meta
          property="og:url"
          content="https://uwatchfree.vercel.app/Hollywood/ThePerfectFind-2023/TPFD "
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1687853537/the_perfect_find_2023_gxsxvk.webp"
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
          content="Watch The Perfect Find (2023) | Uwatchfree™"
        />
        
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1687853537/the_perfect_find_2023_gxsxvk.webp"
        />
        <meta
          name="description"
          content="Watch The Perfect Find Full Movie Online on Uwatchfree™, You can also Watch Now  The Perfect Find (2023) Or Download To Watch Later!"
        />

        <link
          rel="canonical"
          href="https://uwatchfree.vercel.app/Hollywood/ThePerfectFind-2023/The-Perfect-Find"
        />
      </Head>
      <Script src="../../propler/ads.js" defer />
      <div className="bg-gray-600 shadow ">
        <h1
          className="flex flex-col text-center py-5 font-bold text-3xl items-center justify-center"
          style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}
        >
            The Perfect Find - 2023
        </h1>

        <div className={styles["iframe-container"]}>
        <Player src={movie["movie.watchSR1"]} />
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
                 <button className="relative inline-flex items-center animate-pulse rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2">
           <a href="../../Hollywood/ThePerfectFind-2023/The-Perfect-Find" >  
      <h2 > Change Server {movie.name}   </h2></a>  </button>
    
      <h3 className="mb-9 text-bg  text-black-500 text-blue-600 text-center xl:px-4 ">
        If Player Stops Playing Change Server</h3>
        <h2
          className="flex container flex-col items-center py-5 justify-center space-y-3 text-3xl font-bold text-center text-text-white"
          style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}
        >
          Listen to Audio Summary   The Perfect Find (2023)
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
           <source src="https://res.cloudinary.com/db36kfuq3/video/upload/v1687852256/The_Perfect_Find_drdbbn.mp3" />
          </audio>
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
                src="https://cps-static.rovicorp.com/2/Open/Getty/Gabrielle%20Union/_derived_jpg_q90_310x470_m0/91080873.jpg"
                alt="Gabrielle Union Image"
                layout="responsive"
                width={250}
                height={250}
                title="Gabrielle Union."
              />
            </div>
            <div className="circle">
              <Image
                src="https://nettv4u.com/imagine/15-04-2021/keith-powers.jpg"
                alt="Keith Powers Image"
                layout="responsive"
                width={250}
                height={250}
                title="Keith Powers."
              />
            </div>
            <div className="circle">
              <Image
                src="https://qt.azureedge.net/resources/authors-images-large/gina-torres.jpg"
                alt="Gina Torres Image"
                layout="responsive"
                width={250}
                height={250}
                title="Gina Torres."
              />
            </div>
            <div className="circle">
              <Image
                src="https://m.media-amazon.com/images/M/MV5BNTA1MDA3NTUxM15BMl5BanBnXkFtZTcwMzU5Njc4OQ@@._V1_.jpg"
                alt="La La Anthony Image"
                layout="responsive"
                width={250}
                height={250}
                title="La La Anthony."
              />
            </div>
            <div className="circle">
              <Image
                src="https://www.tvguide.com/a/img/resize/eed8a8d4ab268863656dd2eef37b4af9234843a7/catalog/provider/10/9/10-159A3AC7-ED2D-4724-A954-1B72CB29F119.png?auto=webp&fit=crop&height=300&width=200"
                alt="Aisha Hinds Image"
                layout="responsive"
                width={250}
                height={250}
                title="Aisha Hinds."
              />
            </div>
          </div>
          <li>Year of release: {movie.yearRelease}</li>
          <li>Director: {movie.director}</li>
          <div style={{ display: 'flex', gap: '10px' }}>
          <a href="https://en.wikipedia.org/wiki/George_Kay_(writer)">
            <div className="circle  animate-pulse style={{ animationDelay: '12s' }}">
              <Image
                src="https://miro.medium.com/v2/resize:fit:750/1*W87dbhuZUIKhTQYmhIWIhA.jpeg"
                alt="Numa Perrier Image"
                layout="responsive"
                width={250}
                height={250}
                title="Numa Perrier."
              />
            </div>
          </a>
    </div>
          <li>Country of origin: {movie.country}</li>
          <li>Language: {movie.language}</li>
          <li>Genre: {movie.genre}</li>
          <li>Content Rating: {movie.contentRating}</li>
          <li>Original Network: {movie.Originalnetwork}</li>
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
            In the Movie   The Perfect Find - 2023
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
          <a href={movie.down2link1} target="_blank">
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
  const selectedMovie = data.find((movie) => movie.id === "INDEX05");
  return {
    props: {
      movie: selectedMovie,
    },
  };
}

export default ThePerfectFind;
