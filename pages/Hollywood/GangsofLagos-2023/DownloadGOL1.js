
import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Max from 'pages/Max';
import ShareButtons from '@components/ShareButtons';
import Script from 'next/script';





function DownloadGOL1({ movie }) {
  

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
  const schemaData = 
  {
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": "Gangs of Lagos",
    "image": "https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681682711/gangs-of-lagos-2023_ppmnr0.webp",
    "description": "A group of friends who each have to navigate their own destiny, growing up on the bustling streets and neighborhood of Isale Eko, Lagos.",
    "genre": ["Crime", "Action", "Thriller"],
    "datePublished": "2023",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.3",
      "bestRating": "10",
      "worstRating": "0",
      "ratingCount": "100"
    },
    "actor": [
      {
        "@type": "Person",
        "name": "Tobi Bakre"
      },
      {
        "@type": "Person",
        "name": "Olarotimi Fakunle"
      },
      {
        "@type": "Person",
        "name": "Adesua Etomi-Wellington"
      },
      {
        "@type": "Person",
        "name": "Chike-Ezekpeazu Osebuka"
      }
    ],
    "director": {
      "@type": "Person",
      "name": "Jadesola Osiberu"
    },
    "countryOfOrigin": "USA",
    "url": "https://www.imdb.com/title/tt19704612/",
    "trailer": {
      "@type": "VideoObject",
      "name": "Gangs of Lagos Trailer",
      "description": "Official trailer for Gangs of Lagos movie",
      "thumbnailUrl": "https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681682711/gangs-of-lagos-2023_ppmnr0.webp",
      "embedUrl": "https://lvturbo.com/e/uf7wh3bgiy7g.html",
      "uploadDate": "2023-01-01T00:00:00Z",
      "duration": "PT2M30S",
      "contentUrl": "https://uwatchfree.vercel.app/Hollywood/GangsofLagos-2023/GangsofLagos"
     },
     
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
  } ;
  return (
    <div>
        <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
  />
    <Head>
     <title>Watch Gangs of Lagos (2023) Full Movie Online Free | Uwatchfree™</title>
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="keywords" content="uwatchfree,watch free movies,full movie online free,hd movies,movie 2023,latest movie,dubbed movies,free movie download,watch gangs of lagos movie,index of gangs of lagos movie,gangs of lagos movie 2023,gangs of lagos movie online,watch gangs of lagos movie online free,gangs of lagos tv series,gangs of lagos movie download,gangs of lagos movie free download,gangs of lagos movie download" />
<meta property="og:locale" content="en_US" />   

<meta name="robots" content="index, follow" />  
<meta name="revisit-after" content="1 days" />
<meta property="og:site_name" content="Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free" />
<meta property="og:type" content="movie" />
<meta property="og:title" content="Watch Gangs of Lagos (2023) | Uwatchfree™" />
<meta property="og:url" content="https://uwatchfree.vercel.app/Hollywood/GangsofLagos-2023/GangsofLagos" />
<meta property="og:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681682711/gangs-of-lagos-2023_ppmnr0.webp" />
<meta property="og:image:secure_url" content="https://uwatchfree.vercel.app/" />
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="720" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Watch Gangs of Lagos (2023) | Uwatchfree™" />
<meta name="twitter:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681682711/gangs-of-lagos-2023_ppmnr0.webp" />
<meta name="description" content="Watch GangsofLagos Full Movie Online on Uwatchfree™, You can also download Gangs of Lagos (2023) in full HD quality to watch later offline." />

<link rel="canonical" href="https://uwatchfree.vercel.app/Hollywood/GangsofLagos-2023/" />
       </Head>
<Script src="../../propler/ads.js" defer />

       <div className="bg-gray-600 shadow ">



     
  <div className="flex flex-col items-center  justify-center space-y-12">
<ShareButtons url="https://uwatchfree.vercel.app" title="Watch Movies, TV-Series & Sports Live Online Free" image="https://uwatchfree.vercel.app/og_image.jpg" />
  <img src={movie.poster} alt={`Poster for ${movie.title}`} loading="lazy" className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" />
  <h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
     DOWNLOAD {movie.title} (2023) </h2>
   
    
   
<a href={movie.down1link1} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>

<h2 className="text-blue-500 text-3xl title-font  mb-3 font-bold md:text-3xl">
Thank you for Dowloading and Enjoy. </h2>
<h2 className="text-blue-500 text-3xl title-font  mb-3 font-bold md:text-3xl ">
Please Share the Link.</h2>
<Max />



<a href="../../Hollywood/GangsofLagos-2023/GangsofLagos" >
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Back

</button></a>
 




 </div> 
    </div> </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://res.cloudinary.com/dezf3wemk/raw/upload/v1681831645/movies.json');

  const data = await res.json();
  const selectedMovie = data.find(movie => movie.id === 'GOL');
  return {
    props: {
      movie: selectedMovie
    }
  };
}
 
export default DownloadGOL1;
