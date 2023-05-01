
import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Max from 'pages/Max';
import Ad from '@components/Ad';
import ShareButtons from '@components/ShareButtons';
import Script from 'next/script';





function DownloadSTP1({ movie }) {
  

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
        "name": "StarTrekPicard S03 Episode 1",
        "url": "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP1"
      },
      {
        "@type": "TVEpisode",
        "name": "StarTrekPicard S03 Episode 2",
        "url": "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP2"
      },
      {
        "@type": "TVEpisode",
        "name": "StarTrekPicard S03 Episode 3",
        "url": "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP3"
      },
      {
        "@type": "TVEpisode",
        "name": "StarTrekPicard S03 Episode 4",
        "url": "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP4"
      },
      {
        "@type": "TVEpisode",
        "name": "StarTrekPicard S03 Episode 5",
        "url": "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP5"
      },
      {
        "@type": "TVEpisode",
        "name": "StarTrekPicard S03 Episode 6",
        "url": "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP6"
      },
      {
        "@type": "TVEpisode",
        "name": "StarTrekPicard S03 Episode 7",
        "url": "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP7"
      },
      {
        "@type": "TVEpisode",
        "name": "StarTrekPicard S03 Episode 8",
        "url": "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP8"
      },
      {
        "@type": "TVEpisode",
        "name": "StarTrekPicard S03 Episode 9",
        "url": "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP9"
      },
      {
        "@type": "TVEpisode",
        "name": "StarTrekPicard S03 Episode 10",
        "url": "https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP10"
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
      "name": "Star Trek Picard S03 (2023)",
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
     <title>Watch  StarTrekPicard S03  (2023) Full Movie Online Free | Uwatchfree™</title>
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="keywords" content="uwatchfree,watch free movies,full movie online free,hd movies,movie 2023,latest movie,dubbed movies,free movie download,watch the watchful eye movie,index of the watchful eye movie,the watchful eye movie 2023,the watchful eye movie online,watch the watchful eye movie online free,the watchful eye tv series,the watchful eye movie download,the watchful eye movie free download,the watchful eye movie download" />
<meta property="og:locale" content="en_US" />   

<meta name="robots" content="index, follow" />  
<meta name="revisit-after" content="1 days" />
<meta property="og:site_name" content="Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free" />
<meta property="og:type" content="movie" />
<meta property="og:title" content="Watch  StarTrekPicard S03  (2023) | Uwatchfree™" />
<meta property="og:url" content="https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/StarTrekPicardP1
" />
<meta property="og:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681682712/the-gifted-s02_ynhaoq.webp" />
<meta property="og:image:secure_url" content="https://uwatchfree.vercel.app/" />
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="720" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Watch  StarTrekPicard S03  (2023) | Uwatchfree™" />
<meta name="twitter:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681682712/the-gifted-s02_ynhaoq.webp" />
<meta name="description" content="Watch  StarTrekPicard S03  Full Movie Online on Uwatchfree™, You can also download  StarTrekPicard S03  (2023) in full HD quality to watch later offline." />

<link rel="canonical" href="https://uwatchfree.vercel.app/Hollywood/StarTrekPicardS03-2023/" />
       </Head>
<Script src="../../propler/ads.js" defer />

       <div className="bg-gray-600 shadow ">



     
       <div className="flex flex-col items-center  justify-center space-y-12">
<ShareButtons url="https://uwatchfree.vercel.app" title="Watch Movies, TV-Series & Sports Live Online Free" image="https://uwatchfree.vercel.app/og_image.jpg" />
<img src={movie.poster} alt={`Poster for ${movie.title}`} loading="lazy" className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl " />
  <h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
     DOWNLOAD {movie.title} (2023) </h2>
  
  
    
    <h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
    {movie.name} Episode 1 (2023) </h2>
<a href={movie.down1link1} STPget={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name} Episode 2 (2023) </h2>
<a href={movie.down1link2} STPget={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name} Episode 3 (2023) </h2>
<a href={movie.down1link3} STPget={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 4 (2023) </h2>
<a href={movie.down1link4} STPget={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 5 (2023) </h2>
<a href={movie.down1link5} STPget={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 6 (2023) </h2>
<a href={movie.down1link6} STPget={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 7 (2023) </h2>
<a href={movie.down1link7} STPget={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 8 (2023) </h2>
<a href={movie.down1link8} STPget={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 9 (2023) </h2>
<a href={movie.down1link9} STPget={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 10 (2023) </h2>
<a href={movie.down1link10} STPget={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>



<h2 className="text-blue-500 text-lg title-font  mb-3 font-bold md:text-lg ">
Thank you for Dowloading and Enjoy. </h2>
<h2 className="text-blue-500 text-lg title-font  mb-3 font-bold md:text-lg ">
Please Share the Link.</h2>
<Max />



<a href="../../Hollywood/StarTrekPicardS03-2023/StarTrekPicardP1" >
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Back

</button></a>
 




 </div> 
    </div> </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/movies.json');

  const data = await res.json();
  const selectedMovie = data.find(movie => movie.id === 'STP03');
  return {
    props: {
      movie: selectedMovie
    }
  };
}
 
export default DownloadSTP1;
