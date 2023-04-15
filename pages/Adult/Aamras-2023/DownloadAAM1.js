
import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Max from 'pages/Max';
import ShareButtons from '@components/ShareButtons';


import AdultSkipAds from '@components/AdultSkipAds'


function DownloadAAM1({ movie }) {
  

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
  const schemaData   = {
    "@context": "https://schema.org",
    
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://uwatchfree.vercel.app/Adult/Aamras-2023/Aamras"
      
    },
    "headline": "Aamras (2023) Full Movie Online Free | Uwatchfree™",
    "image": "https://uwatchfree.vercel.app/aamras-2023.webp",
  
    "datePublished": '2023-01-01T09:00:00.000Z',
    "dateModified": '2023-01-01T09:00:00.000Z',
    "author": [{
        "@type": "Person",
        "name": "DrTrailer",
        "url": "https://uwatchfree.vercel.app/DrTrailer.webp"
      }],
    
    "publisher": {
        "@type": "Organization",
        "name": "Uwatchfree",
        "logo": {
          "@type": "ImageObject",
          "url": "https://uwatchfree.vercel.app/og_image.jpg"
        }
      },
    "description": "Uwatchfree™ Aamras (2023) Full Movie Online Free | Watch Movies, TV-Series & Sports Live Online Free"
  
  };
  return (
    <div>
        <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
  />
    <Head>
     <title>Watch {movie.name} (2023) Full Movie Online Free | Uwatchfree™</title>
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="keywords" content="uwatchfree,watch free movies,full movie online free,hd movies,movie 2023,latest movie,dubbed movies,free movie download,watch Aamras movie,index of Aamras movie,Aamras movie 2023,Aamras movie online,watch Aamras movie online free,Aamras tv series,Aamras movie download,Aamras movie free download,Aamras movie download" />
<meta property="og:locale" content="en_US" />   

<meta name="robots" content="index, follow" />  
<meta name="revisit-after" content="1 days" />
<meta property="og:site_name" content="Uwatchfree™ | Watch Movies, TV-Series & Sports Live Online Free" />
<meta property="og:type" content="movie" />
<meta property="og:title" content="Watch Aamras (2023) | Uwatchfree™" />
<meta property="og:url" content="https://uwatchfree.vercel.app/Adult/Aamras-2023/Aamras" />
<meta property="og:image" content="https://uwatchfree.vercel.app/aamras-2023.webp" />
<meta property="og:image:secure_url" content="https://uwatchfree.vercel.app/" />
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="720" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Watch Aamras (2023) | Uwatchfree™" />
<meta name="twitter:image" content="https://uwatchfree.vercel.app/aamras-2023.webp" />
<meta name="description" content="Watch Aamras Full Movie Online on Uwatchfree™, You can also download Aamras (2023) in full HD quality to watch later offline." />
<script src="../../propler/ads.js" defer></script> 
<link rel="canonical" href="https://uwatchfree.vercel.app/Adult/Aamras-2023/" />
       </Head>

       <div className="bg-gray-600 shadow ">
       <AdultSkipAds/>


     
  <div className="flex flex-col items-center  justify-center space-y-12">
<ShareButtons url="https://uwatchfree.vercel.app" title="Watch Movies, TV-Series & Sports Live Online Free" image="https://uwatchfree.vercel.app/og_image.jpg" />
  <img src={movie.poster} alt={`Poster for ${movie.title}`} loading="lazy" className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" />
  <h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
     DOWNLOAD {movie.title} (2023) </h2>
  
  
    
    <h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
    {movie.name} (2023) </h2>
<a href={movie.down1link1} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>

<h2 className="text-blue-500 text-lg title-font  mb-3 font-bold md:text-lg ">
Thank you for Dowloading and Enjoy. </h2>
<h2 className="text-blue-500 text-lg title-font  mb-3 font-bold md:text-lg ">
Please Share the Link.</h2>
<Max />



<a href="../../Adult/Aamras-2023/Aamras" >
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Back

</button></a>
 




 </div> 
    </div> </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://uwatchfree.vercel.app/movies.json');

  const data = await res.json();
  const selectedMovie = data.find(movie => movie.id === 'AAM');
  return {
    props: {
      movie: selectedMovie
    }
  };
}
 
export default DownloadAAM1;
