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


function IB71 ({ movie }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
          name: " IB71 (2023)",
          urlTemplate:
            "https://uwatchfree.vercel.app/Bollywood/IB71-2023/IB71IB",
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
          Watch IB 71 (2023) Full Movie Online Free | Uwatchfree™
        </title>
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      <meta
          name="keywords"
          content="uwatchfree,ib 71 movie,ib 71 2023,index of ib 71 movie,ib 71 cast,ib 71 trailer,ib 71 release date,ib 71 plot,ib 71 reviews,ib 71 streaming,ib 71 watch online,ib 71 download,ib 71 full movie,ib 71 movie download,ib 71 movie free download,ib 71 movie online,ib 71 movie watch online"
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
          content="Watch IB 71 (2023) | Uwatchfree™"
        />
        <meta
          property="og:url"
          content="https://uwatchfree.vercel.app/Bollywood/IB71-2023/IB71IB"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1688789873/IB_71_2023_ja3fp9.webp"
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
          content="Watch IB 71 (2023) | Uwatchfree™"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1688789873/IB_71_2023_ja3fp9.webp"
        />
        <meta
          name="description"
          content="Watch IB 71 Full Movie Online on Uwatchfree™, You can also download IB 71 (2023) in full HD quality to watch later offline."
        />

        <link
          rel="canonical"
          href="https://uwatchfree.vercel.app/Bollywood/IB71-2023/"
        />
      </Head>
      <Script src="../../propler/ads.js" defer />
      <div className="bg-gray-600 shadow ">
        <h1
          className="flex flex-col text-center py-5 font-bold text-3xl items-center justify-center"
          style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}
        >
            IB 71 - 2023
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
           <a href="../../Bollywood/IB71-2023/IB71" >  
      <h2 > Change Server {movie.name}   </h2></a>  </button>
    
      <h3 className="mb-9 text-bg  text-black-500 text-blue-600 text-center xl:px-4 ">
        If Player Stops Playing Change Server</h3>
        <h2
          className="flex container flex-col items-center py-5 justify-center space-y-3 text-3xl font-bold text-center text-text-white"
          style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}
        >
          Listen to Audio Summary IB 71 (2023)
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
           <source src="https://ik.imagekit.io/gmcl6xvq6/IB_71___Official_Trailer.mp4?updatedAt=1688789628611" />
          </audio>
        </div>
     
        <Rating />
        <div className="flex justify-center space-x-4 ">
        <a
          href={movie.link}
          className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2"
          target="_blank"
        >
          IMDb Rating: {movie.rating}
        </a>
        <a
          href={movie.link2}
          className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2"
          target="_blank"
        >
          Wikipedia
        </a>
     

        </div>
        <ul
          className="flex container flex-col items-center justify-center space-y-3 text-xl font-bold text-center text-white"
          style={{ color: "#40D7BC", textShadow: "0px 0px 2px #000" }}
        >
          <li>Starring: {movie.starring.join(", ")}</li>
          <div className="grid grid-cols-1 mx-20 sm:grid-cols-5  x:grid-cols-5 gap-4">
          <a href="https://www.imdb.com/name/nm0451600/?ref_=ttfc_fc_cl_t1" target="_blank">
            <div className="circle">
              <Image
                src="https://static.joonsite.com/seelatest/topic/anupam-kher.jpg"
                alt=" Anupam Kher Image"
                layout="responsive"
                width={250}
                height={250}
                title=" Anupam Kher."
              />
            </div></a>
            <a href="https://www.imdb.com/name/nm4651098/?ref_=ttfc_fc_cl_t2" target="_blank">
            <div className="circle">
              <Image
                src="https://static.joonsite.com/seelatest/topic/vidyut-jammwal.jpg"
                alt=" Vidyut Jammwal Image"
                layout="responsive"
                width={250}
                height={250}
                title=" Vidyut Jammwal."
              />
            </div></a>
            <a href="https://www.imdb.com/name/nm1261907/?ref_=ttfc_fc_cl_t3" target="_blank">
            <div className="circle">
              <Image
                src="https://nettv4u.com/imagine/02-01-2017/bijay-anand.png"
                alt=" Bijay Anand Image"
                layout="responsive"
                width={250}
                height={250}
                title=" Bijay Anand."
              />
            </div></a>
            <a href="https://www.imdb.com/name/nm0451281/?ref_=ttfc_fc_cl_t4" target="_blank">
            <div className="circle">
              <Image
                src="https://nettv4u.com/imagine/06-03-2017/nissar-khan.jpg"
                alt="Nissar Khan Image"
                layout="responsive"
                width={250}
                height={250}
                title="Nissar Khan."
              />
            </div></a>
            <a href="https://www.imdb.com/name/nm0846681/?ref_=ttfc_fc_cl_t6" target="_blank">
            <div className="circle">
              <Image
                src="https://nettv4u.com/serialimages/22-08-2019/dalip-tahil.jpg"
                alt="Dalip Tahil Image"
                layout="responsive"
                width={250}
                height={250}
                title="Dalip Tahil."
              />
            </div></a>
          </div>
          <li>Year of release: {movie.yearRelease}</li>

          <li>Director: {movie.director}</li>
     
          <div style={{ display: 'flex', gap: '10px' }}>
     
     <a href="https://www.imdb.com/name/nm8623146/?ref_=ttfc_fc_dr1">
          <div className="circle animate-pulse style={{ animationDelay: '12s' }}">
            <Image
              src="https://static.toiimg.com/thumb/61419503.cms?width=170&height=240"
              alt="Sankalp Reddy Image"
              layout="responsive"
              width={250}
              height={250}
              title="Sankalp Reddy."
            />
          </div>
        </a>
        <a href="https://www.imdb.com/name/nm0924121/?ref_=ttfc_fc_dr2">
          <div className="circle animate-pulse style={{ animationDelay: '12s' }}">
            <Image
              src="https://nettv4u.com/imagine/l/e/e/0/w/h/lee-whittaker.jpg"
              alt="Lee Whittaker Image"
              layout="responsive"
              width={250}
              height={250}
              title="Lee Whittaker."
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
        <div style={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img
    src="https://pbs.twimg.com/profile_images/1559438969531781120/Mn8ztk4f_400x400.jpg" // Replace with the actual path or URL of the image
    alt="prime video Image"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>

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
            In the Movie IB 71 - 2023
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
            Link {movie.name}
          </h3>
          <a href={movie.down2link1} target="_blank">
            <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 border-white-500 border-2">
              Download
            </button>
          </a>
       
          <Max />

          <Link href="../../BollywoodAds">
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
  const selectedMovie = data.find((movie) => movie.id === "INDEX35");
  return {
    props: {
      movie: selectedMovie,
    },
  };
}

export default IB71 ;
