
import Link from 'next/link'
import Rating from 'pages/Rating';
import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import styles from '@styles/video-player.module.css';
import Max from 'pages/Max';
import ShareButtons from '@components/ShareButtons';
import Script from 'next/script';





function TheTraitorsP5({ movie }) {
  

  if (!movie) {
    return <div className="text-3xl text-red-600 text-center">Loading...</div>;
  }
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])
  const scrollSearch = myKey => {
    window.scrollTo(0, 0);
    frontMatter.handleSearch(myKey)
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
    "episode": [
      {
        "@type": "TVEpisode",
        "name": "The Traitors S01 Episode 1",
        "url": "https://uwatchfree.vercel.app/Hollywood/TheTraitors-2023/TheTraitorsP1"
      },
      {
        "@type": "TVEpisode",
        "name": "The Traitors S01 Episode 2",
        "url": "https://uwatchfree.vercel.app/Hollywood/TheTraitors-2023/TheTraitorsP2"
      },
      {
        "@type": "TVEpisode",
        "name": "The Traitors S01 Episode 3",
        "url": "https://uwatchfree.vercel.app/Hollywood/TheTraitors-2023/TheTraitorsP3"
      },
      {
        "@type": "TVEpisode",
        "name": "The Traitors S01 Episode 4",
        "url": "https://uwatchfree.vercel.app/Hollywood/TheTraitors-2023/TheTraitorsP4"
      },
      {
        "@type": "TVEpisode",
        "name": "The Traitors S01 Episode 5",
        "url": "https://uwatchfree.vercel.app/Hollywood/TheTraitors-2023/TheTraitorsP5"
      },
      {
        "@type": "TVEpisode",
        "name": "The Traitors S01 Episode 6",
        "url": "https://uwatchfree.vercel.app/Hollywood/TheTraitors-2023/TheTraitorsP6"
      },
      {
        "@type": "TVEpisode",
        "name": "The Traitors S01 Episode 7",
        "url": "https://uwatchfree.vercel.app/Hollywood/TheTraitors-2023/TheTraitorsP7"
      },
      {
        "@type": "TVEpisode",
        "name": "The Traitors S01 Episode 8",
        "url": "https://uwatchfree.vercel.app/Hollywood/TheTraitors-2023/TheTraitorsP8"
      },
      {
        "@type": "TVEpisode",
        "name": "The Traitors S01 Episode 9",
        "url": "https://uwatchfree.vercel.app/Hollywood/TheTraitors-2023/TheTraitorsP9"
      },
      {
        "@type": "TVEpisode",
        "name": "The Traitors S01 Episode 10",
        "url": "https://uwatchfree.vercel.app/Hollywood/TheTraitors-2023/TheTraitorsP10"
      }
    ],
    "author": [{
      "@type": "Person",
      "name": "DrTrailer",
      "url": "https://uwatchfree.vercel.app/DrTrailer.png"
    }],
  
  "publisher": {
      "@type": "Organization",
      "name": "Uwatchfree",
      "logo": {
        "@type": "ImageObject",
        "url": "https://uwatchfree.vercel.app/og_image.jpg"
      }
    },
    potentialAction: {
      "@type": "WatchAction",
      "name": "The Traitors S01 (2023)",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://uwatchfree.vercel.app/Hollywood/TheTraitors-2023/TheTraitorsP1",
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
     <title>Watch The Traitors S01 (2023) Full Movie Online Free | Uwatchfree™</title>
     <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="keywords" content="uwatchfree,watch free movies,full movie online free,hd movies,movie 2023,latest movie,dubbed movies,free movie download,watch the the traitors s01 movie,index of the the traitors s01 movie,the giftedS01 movie 2023,the the traitors s01 movie online,watch the the traitors s01 movie online free,the the traitors s01 tv series,the the traitors s01 movie download,the the traitors s01 movie free download,the the traitors s01 movie download" />
<meta property="og:locale" content="en_US" />   

<meta name="robots" content="index, follow" />  
<meta name="revisit-after" content="1 days" />
<meta property="og:site_name" content="Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free" />
<meta property="og:type" content="movie" />

<meta property="og:title" content="Watch The Traitors S01 (2023) | Uwatchfree™" />
<meta property="og:url" content="https://uwatchfree.vercel.app/Hollywood/TheTraitors-2023/TheTraitorsP1" />
<meta property="og:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681682713/the-trator-2023_rp9lhs.webp" />
<meta property="og:image:secure_url" content="https://uwatchfree.vercel.app/" />
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="720" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Watch The Traitors S01 (2023) | Uwatchfree™" />
<meta name="twitter:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681682713/the-trator-2023_rp9lhs.webp" />
<meta name="description" content="Watch The Gifted S01 Full Movie Online on Uwatchfree™, You can also download The Traitors S01 (2023)
 in full HD quality to watch later offline." />

<link rel="canonical" href="https://uwatchfree.vercel.app/Hollywood/TheTraitors-2023/" />  
       </Head>
<Script src="../../propler/ads.js" defer />
 
       <div className="bg-gray-600 shadow ">
      <h1 className="flex flex-col text-center py-5 font-bold text-3xl items-center justify-center" style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}>{movie.title} - EPISODE 5</h1>
      <div className={styles['iframe-container']}>
      <iframe className="  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 "
        src={movie['movie.watchP5']}
        width="100%"
        height="500px"
        allowFullScreen
      ></iframe>
           </div>  
           <h3 className="mb-9 text-bg  text-black-500 text-red-600 text-center xl:px-4 ">*Note: Pls Select the in the Player to Change your Language of your Choice and Setting  to Change the Quality of Video.</h3>
<ShareButtons url="https://uwatchfree.vercel.app" title="Watch Movies, TV-Series & Sports Live Online Free" image="https://uwatchfree.vercel.app/og_image.jpg" />


           <div className="grid grid-cols-1 mx-20 sm:grid-cols-2  x:grid-cols-3 gap-4">
    
    <div className="flex justify-center">
    <Link href="../../Hollywood/TheTraitors-2023/TheTraitorsP1">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dTAR:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dTAR:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dTAR:bg-gray-900 group-hover:bg-opacity-0 ">
  Episode 1
      </button></Link>
    </div>
    <div className="flex justify-center">
    <Link href="../../Hollywood/TheTraitors-2023/TheTraitorsP2">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dTAR:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dTAR:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dTAR:bg-gray-900 group-hover:bg-opacity-0 ">
  Episode 2
      </button></Link>
    </div>
    <div className="flex justify-center">
    <Link href="../../Hollywood/TheTraitors-2023/TheTraitorsP3">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dTAR:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dTAR:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dTAR:bg-gray-900 group-hover:bg-opacity-0 ">
  Episode 3
      </button></Link>
      </div>
      <div className="flex justify-center">
      <Link href="../../Hollywood/TheTraitors-2023/TheTraitorsP4">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dTAR:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dTAR:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dTAR:bg-gray-900 group-hover:bg-opacity-0 ">
  Episode 4
      </button></Link>
      </div>
      <div className="flex justify-center">
      <Link href="../../Hollywood/TheTraitors-2023/TheTraitorsP5">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dTAR:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dTAR:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dTAR:bg-gray-900 group-hover:bg-opacity-0 ">
  Episode 5
      </button></Link>
      </div>
      <div className="flex justify-center">
      <Link href="../../Hollywood/TheTraitors-2023/TheTraitorsP6">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dTAR:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dTAR:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dTAR:bg-gray-900 group-hover:bg-opacity-0 ">
  Episode 6
      </button></Link>
      </div>
      <div className="flex justify-center">
      <Link href="../../Hollywood/TheTraitors-2023/TheTraitorsP7">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dTAR:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dTAR:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dTAR:bg-gray-900 group-hover:bg-opacity-0 ">
  Episode 7
      </button></Link>
      </div>
      <div className="flex justify-center">
      <Link href="../../Hollywood/TheTraitors-2023/TheTraitorsP8">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dTAR:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dTAR:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dTAR:bg-gray-900 group-hover:bg-opacity-0 ">
  Episode 8
      </button></Link>
      </div>
      <div className="flex justify-center">
      <Link href="../../Hollywood/TheTraitors-2023/TheTraitorsP9">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dTAR:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dTAR:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dTAR:bg-gray-900 group-hover:bg-opacity-0 ">
  Episode 9
      </button></Link>
      </div>
      <div className="flex justify-center">
      <Link href="../../Hollywood/TheTraitors-2023/TheTraitorsP10">
  <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dTAR:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dTAR:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dTAR:bg-gray-900 group-hover:bg-opacity-0 ">
  Episode 10
      </button></Link>
      </div>
   
      </div>
           <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dTAR:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dTAR:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dTAR:bg-gray-900 group-hover:bg-opacity-0 ">
           <a href="../TheTraitors-2023/TARSR5" >  
      <h2 > Watch {movie.name} (2023) Server 2</h2></a></button>
      <Rating />
      <a href={movie.link} className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dTAR:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dTAR:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dTAR:bg-gray-900 group-hover:bg-opacity-0 " target="_blank">IMDb Rating: {movie.rating}</a>  
      
      <ul className="flex container flex-col items-center justify-center space-y-3 text-xl font-bold text-center text-yellow-100/50"style={{ textShadow: "0px 0px 2px #000" }}>
        <li>Starring: {movie.starring.join(', ')}</li>
        <li>Year of release: {movie.yearRelease}</li>
        <li>Director: {movie.director}</li>
        <li>Country: {movie.country}</li>
        <li>Genre: {movie.genre}</li>
        <p className="flex container flex-col items-center justify-center space-y-3 text-xl font-bold text-center text-yellow-100/50"style={{ textShadow: "0px 0px 2px #000" }}>Synopsis:{movie.synopsis}</p>
      </ul>
     
           <img  src={movie.poster} alt={`Poster for ${movie.title}`} className="mx-auto my-10 rounded-3xl  " />
       
   
      <div className="flex flex-col py-10  text-blue-600 text-center items-center justify-center">

<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dTAR:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dTAR:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dTAR:bg-gray-900 group-hover:bg-opacity-0 "  onClick={togglePopup} >

        <h2 >Watch Offical Trailer</h2></button>
        </div>
   
        {showPopup && (
        <div className="popup-overlay">
         
         <div className="popup ">
               <button className="close-button" onClick={togglePopup}>
               <h2 className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dTAR:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dTAR:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dTAR:bg-gray-900 group-hover:bg-opacity-0 " >  Close</h2>  
          </button>
          <h2 className="text-2xl font-bold" >Offical Trailer {movie.name} (2023) </h2>
           <div className={styles['iframe-container']}>
 <iframe className="  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 " webkitallowFullScreen mozallowFullScreen allowFullScreen  src={movie['movie.trailer']} />
                   
             </div></div>
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
  <div className="flex flex-col py-10  text-blue-600 text-center items-center justify-center">
 
 <h3  className="text-2xl font-bold leading-normal mt-0 mb-2 text-blue-600 ">{movie.name} (2023) </h3>
 <a href={movie.download1} >
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dTAR:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dTAR:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dTAR:bg-gray-900 group-hover:bg-opacity-0 ">
Download 

</button></a>

<h3 className="text-2xl font-bold leading-normal mt-0 mb-2 text-blue-600 ">{movie.name} (2023)</h3>
<a href={movie.download2} >
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dTAR:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dTAR:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dTAR:bg-gray-900 group-hover:bg-opacity-0 ">
Download 

</button></a>


<Max />

<Link href="../../BollywoodAds"><buton className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dTAR:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dTAR:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dTAR:bg-gray-900 group-hover:bg-opacity-0 ">
 
  Back To Bollywood Section

</buton></Link>
 




 </div> 
    </div> </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://uwatchfree.vercel.app/movies.json');

  const data = await res.json();
  const selectedMovie = data.find(movie => movie.id === 'TAR');
  return {
    props: {
      movie: selectedMovie
    }
  };
}
 
export default TheTraitorsP5;
