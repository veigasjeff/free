
import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Max from 'pages/Max';
import ShareButtons from '@components/ShareButtons';
import Script from 'next/script';





function DownloadSBL1({ movie }) {
  

  if (!movie) {
    return <div className="text-3xl text-red-600 text-center">Loading...</div>;
  }
  useEffect(() => {
    const handleContextmenu = e => {
        e.preveTOFefault()
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
        "name": "The Boarding School: Las CumbresEpisode 1",
        "url": "https://uwatchfree.vercel.app/Bollywood/SaasBahuAurFlamingo-2023/SBLSR1"
      },
      {
        "@type": "TVEpisode",
        "name": "The Boarding School: Las CumbresEpisode 2",
        "url": "https://uwatchfree.vercel.app/Bollywood/SaasBahuAurFlamingo-2023/SBLSR2"
      },
    
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
      "name": "Saas Bahu Aur Flamingo (2023)",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://uwatchfree.vercel.app/Bollywood/SaasBahuAurFlamingo-2023/SaasBahuAurFlamingoP1",
      },
    },
    "additionalProperty": {
      "@type": "PropertyValue",
      "name": "Action Platform",
      "value": [
        "Desktop Web Platform",
        "iOS Platform",
        "Android Platform"
      ]
    }
  });
    
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJsonData }}
      />
<Head>
     <title>Watch Saas Bahu Aur Flamingo (2023) Full Movie Online Free | Uwatchfree™</title>
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="keywords" content="uwatchfree,saas bahu aur flamingo tv series,saas bahu aur flamingo 2023,index of saas bahu aur flamingo tv series,saas bahu aur flamingo cast,saas bahu aur flamingo trailer,saas bahu aur flamingo release date,saas bahu aur flamingo plot,saas bahu aur flamingo reviews,saas bahu aur flamingo streaming,saas bahu aur flamingo watch online,saas bahu aur flamingo download,saas bahu aur flamingo full episodes,saas bahu aur flamingo tv series download,saas bahu aur flamingo tv series free download,saas bahu aur flamingo tv series online,saas bahu aur flamingo tv series watch online" />
<meta property="og:locale" content="en_US" />   

<meta name="robots" content="index, follow" />  
<meta name="revisit-after" content="1 days" />
<meta property="og:site_name" content="Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free" />
<meta property="og:type" content="movie" />
<meta property="og:title" content="Watch Saas Bahu Aur Flamingo (2023) | Uwatchfree™" />
<meta property="og:url" content="https://uwatchfree.vercel.app/Bollywood/SaasBahuAurFlamingo-2023/SaasBahuAurFlamingoP1" />
<meta property="og:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1683907530/saas-bahu-aur-flamingo-2023_fvwuhe.webp" />
<meta property="og:image:secure_url" content="https://uwatchfree.vercel.app/" />
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="720" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Watch Saas Bahu Aur Flamingo (2023) | Uwatchfree™" />
<meta name="twitter:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1683907530/saas-bahu-aur-flamingo-2023_fvwuhe.webp" />
<meta name="description" content="Watch Fireflies: The Boarding School: Las CumbresFull Movie Online on Uwatchfree™, You can also download Saas Bahu Aur Flamingo (2023) in full HD quality to watch later offline." />

<link rel="canonical" href="https://uwatchfree.vercel.app/Bollywood/SaasBahuAurFlamingo-2023/" />

       </Head>
<Script src="../../propler/ads.js" defer />

       <div className="bg-gray-600 shadow ">




     
       <div className="flex flex-col items-center  justify-center space-y-12">
<ShareButtons url="https://uwatchfree.vercel.app" title="Watch Movies, TV-Series & Sports Live Online Free" image="https://uwatchfree.vercel.app/og_image.jpg" />
<img src={movie.banner} alt={`Banner for ${movie.title}`} loading="lazy" className=" rounded-3xl  mx-auto my-10 "  />
  <h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
     DOWNLOAD {movie.title}  </h2>
  
  
    
    <h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
    {movie.name} Part 1  </h2>
<a href={movie.down1link1} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name} Part 2  </h2>
<a href={movie.down1link2} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>



<h2 className="text-blue-500 text-3xl title-font  mb-3 font-bold md:text-3xl">
Thank you for Dowloading and Enjoy. </h2>
<h2 className="text-blue-500 text-3xl title-font  mb-3 font-bold md:text-3xl ">
Please Share the Link.</h2>
<Max />



<a href="../../Hollywood/CitadelS01-2023/CitadelP1" >
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Back

</button></a>
 




 </div> 
    </div> </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://uwatchfree.vercel.app/movies.json');

  const data = await res.json();
  const selectedMovie = data.find(movie => movie.id === 'SBL');
  return {
    props: {
      movie: selectedMovie
    }
  };
}
 
export default DownloadSBL1;
