
import AdultSkipAds from '@components/AdultSkipAds'
import Max from 'pages/Max';

import ShareButtons from '@components/ShareButtons';
import Script from 'next/script';
import Ads from '@components/Ads';


import Head from "next/head"
import Image from 'next/image';

const DownloadIQY2 = () => {

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
  
  return (
    <div>
           <div className="bg-gray-600 ">
{showAd && <Ads onClose={handleAdClose} />}
  <Head>
    
 

</Head>
<Script src="../../propler/ads.js" defer />

<AdultSkipAds />
  <div className="flex flex-col items-center  justify-center space-y-12">
<ShareButtons url="https://uwatchfree.vercel.app" title="Watch Movies, TV-Series & Sports Live Online Free" image="https://uwatchfree.vercel.app/og_image.jpg" />
  <h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
     DOWNLOAD MOVIE ISHQIYA - 2023 LINK BELOW </h2>
  
    <img className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert  drop-shadowrounded-3xl"  src='https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681610077/ishqiya-2023_aq0hec.webp' alt='ISHQIYA - 2023'  width={1000}  height={562.5}  loading="lazy"/>

<a href="https://dood.yt/d/ct3cpowk0th6" target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500 text-lg title-font  mb-3 font-bold md:text-lg ">
Thank you for Dowloading and Enjoy. </h2>
<h2 className="text-blue-500 text-lg title-font  mb-3 font-bold md:text-lg ">
Please Share the Link.</h2>
<Max />



<a href="../../Adult/Ishqiya-2023/IQASR2" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Back

</button></a>



</div></div>
    </div> 

  )
}

export default DownloadIQY2;
