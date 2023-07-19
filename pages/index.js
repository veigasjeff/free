import Head from "next/head";
import styles from "../styles/Home.module.css";
import ShareButtons from "@components/ShareButtons";
import { Image } from "cloudinary-react";
import { useState, useRef, useEffect } from "react";
import YoutubePlayer from "@components/YoutubePlayer";

export default function Home({ movie }) {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isMobile && isVisible && isPlaying) {
      videoRef.current.play();
    }
  }, [isMobile, isVisible, isPlaying]);

  const handleVideoClick = () => {
    if (isMobile && !isPlaying) {
      setIsPlaying(true);
    }
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

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch("https://uwatchfree.vercel.app/movies.json");
      const data = await response.json();
      setMovies(data);
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);




  return (
    <div>
      <div className={styles.container}>
        <Head>
          {/* Head content here */}
        </Head>

        <main className={styles.main}>
          <section className={`${styles.movies} bg-gray-600  py-5`}>
            <ShareButtons
              url="https://uwatchfree.vercel.app"
              title="Watch Latest Movies & TV-Series Online Free"
              image="https://uwatchfree.vercel.app/og_image.jpg"
            />

            <h1
              className="text-center font-bold text-3xl  py-5"
              style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}
            >
              Uwatchfree™ - HD Latest Movies & TV-Series Online Free.{" "}
            </h1>

            <div className="flex flex-wrap justify-center">
              {Array.isArray(movies) &&
                movies.slice(1).map((movie, index) => (
                  <div
                    className="w-full md:w-1/2 lg:w-1/3 p-2 "
                    key={movie.title}
                  >
                    <div className="relative overflow-hidden rounded-3xl border border-white shadow-md">
                      <Image
                        className="w-full h-full object-cover  rounded-3xl border border-white shadow-md"
                        loading="eager"
                        src={movie.poster}
                        alt={movie.title}
                        width={1000}
                        height={562.5}
                        effect="blur"
                      />
                      <div>
                      {hovered === index && (
                          <div className="iframe-container">
                            <YoutubePlayer videoId={movie["movie.trailer"]} />
                          </div>
                        )}
                         <style>
          {`
          /* Make the youtube video responsive */
          .iframe-container {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%;
            height: 0;
          }
          .iframe-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          `}
        </style>
                      </div>

                      <a
                        href={movie["movie.watch"]}
                        id={movie.id}
                        className="absolute inset-0 flex items-center justify-center"
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                      ></a>

                      <span
                        className={`${
                          movie.status === "New Movie" ||
                          movie.badge === "New Movie"
                            ? "bg-green-500 border border-white"
                            : movie.status === "Tv Series" ||
                              movie.badge === "Tv Series"
                            ? "bg-yellow-500 border border-white"
                            : movie.status === "Tv Series UpDated" ||
                              movie.badge === "Tv Series UpDated"
                            ? "bg-yellow-500 border border-white"
                            : movie.status === "Live Sports" ||
                              movie.badge === "Live Sports"
                            ? "bg-red-500 border border-white"
                            : movie.status === "Tv Show" ||
                              movie.badge === "Tv Show"
                            ? movie.badge === "blue"
                              ? "bg-blue-500 border border-white"
                              : "bg-blue-500 border border-white"
                            : movie.status === "Sports" ||
                              movie.badge === "Sports"
                            ? movie.badge === "orange"
                              ? "bg-orange-500 border border-white"
                              : "bg-orange-500 border border-white"
                            : ""
                        } text-black font-bold py-2 px-4 rounded-3xl absolute top-0 right-0 m-1 animate-pulse ${
                          movie.status === "new" || movie.badge === "new"
                            ? "-slow"
                            : ""
                        }`}
                      >
                        {movie.status || movie.badge}
                      </span>
                    </div>
                    <div className="mt-4">
                      <h2
                        className="text-2xl font-bold leading-normal mb-2"
                        style={{
                          color: "#40D7BC",
                          textShadow: "5px 5px 2px #000",
                        }}
                      >
                        {movie.title}
                      </h2>
                      <div className="flex flex-wrap justify-center py-5">
                        <audio
                          controls
                          preload="metadata"
                          playsInline
                          loop
                          crossOrigin="anonymous"
                          controlsList="nodownload"
                        >
                          <source src={movie.audio} id={movie.id} />
                        </audio>
                      </div>
                      <a
                        href={movie.link}
                        className="text-xl font-bold leading-normal mb-2 text-yellow-500 "
                        target="_blank"
                        style={{ textShadow: "2px 2px 4px #000" }}
                      >
                        IMDb Rating : {movie.rating}
                      </a>

                      <p
                        className={`${styles.yearRelease} text-xl font-bold leading-normal mb-2 text-white`}
                        style={{ textShadow: "5px 5px 2px #000" }}
                      >
                        Year Release : {movie.yearRelease}
                      </p>

                      <p
                        className={`${styles.genre} text-xl font-bold leading-normal mb-2 text-white`}
                        style={{ textShadow: "5px 5px 2px #000" }}
                      >
                        Genre : {movie.genre}
                      </p>
                    </div>
                    <a href={movie["movie.watch"]} id={movie.id}>
                      <button
                        className={`${styles["watch-now-button"]} rounded-3xl border shadow-md `}
                      >
                        Watch Now
                        </button>
                    </a>
                  </div>
                ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}