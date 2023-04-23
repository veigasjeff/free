import { useState, useEffect } from "react";
import styles from "../styles/Ad.module.css";
import Script from 'next/script';
import movie from '../public/movies.json';

const Ad1 = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 30000); // 5 seconds delay in milliseconds

    const interval = setInterval(() => {
      setIsVisible(true);
    }, 600000); // 10 minutes in milliseconds

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
    
      {isVisible && movie && (
        <div className={styles.adContainer}>
          <div className={styles.adContent}>
            
            <span className={styles.closeButton}  onClick={handleClose}>
            <h2 className=" text-red-600 font-bold" >
           Close Ad   &times;</h2>
            </span>
           
            <Script type="text/javascript" language="javascript">
              var aax_size='300x250';
              var aax_pubname = 'rnd01-21';
              var aax_src='302';
            </Script>
            <Script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></Script>
            <div className="flex container flex-col items-center justify-center">
            <iframe src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=rnd01-21&language=en_IN&marketplace=amazon&region=IN&placement=B0B8BXGSSR&asins=B0B8BXGSSR&linkId=b8b4c9e0471bf57b619072186cac29e3&show_border=true&link_opens_in_new_window=true" style={{ width: "120px", height: "240px" }} ></iframe>
            
            <video  src="https://ik.imagekit.io/lwkyvy5lo/GRENARO_Wireless_Microphone_with_Digital.mp4?updatedAt=1682036002335" autoPlay controls muted loop width="640" height="360"> </video>
             
          

          </div>
        </div>
        </div>
      )}
    </>
  );
};

 
export default Ad1;


//{showAd && <Ad onClose={handleAdClose} />}

