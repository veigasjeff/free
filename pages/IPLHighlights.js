import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const IPLHighlights = ({ }) => {
  const images = [
    { src: '/ipl-2023-highlight01.webp', alt: 'IPL MATCH 01 (2023)', link: '../../Sports-2023/IPL-Highlights/HighlightMatch01', text: 'IPL MATCH 01 GUJARAT TITANS VS CHENNAI SUPER KINGS (2023)' },
    { src: '/ipl-2023-highlight02.webp', alt: 'IPL MATCH 02 (2023)', link: '../../Sports-2023/IPL-Highlights/HighlightMatch02', text: 'IPL MATCH 02 PUNJAB KINGS VS KOLKATA KNIGHT RIDERS (2023)' },
    { src: '/ipl-2023-highlight03.webp', alt: 'IPL MATCH 03 (2023)', link: '../../Sports-2023/IPL-Highlights/HighlightMatch03', text: 'IPL MATCH 03 LUCKNOW SUPER GIANTS VS DELHI CAPITALS (2023)' },
    { src: '/ipl-2023-highlight04.webp', alt: 'IPL MATCH 04 (2023)', link: '../../Sports-2023/IPL-Highlights/HighlightMatch04', text: 'IPL MATCH 04 SUNRISERS HYDERABAD VS RAJASTHAN ROYALS (2023)' },
    { src: '/ipl-2023-highlight05.webp', alt: 'IPL MATCH 05 (2023)', link: '../../Sports-2023/IPL-Highlights/HighlightMatch05', text: 'IPL MATCH 05 ROYAL CHALLENGERS BANGALORE VS MUMBAI INDIANS (2023)' },
    { src: '/ipl-2023-highlight06.webp', alt: 'IPL MATCH 06 (2023)', link: '../../Sports-2023/IPL-Highlights/HighlightMatch06', text: 'IPL MATCH 06 CHENNAI SUPER KINGS vs LUCKNOW SUPER GIANTS (2023)' },
    { src: '/ipl-2023-highlight07.webp', alt: 'IPL MATCH 07 (2023)', link: '../../Sports-2023/IPL-Highlights/HighlightMatch07', text: 'IPL MATCH 07 DELHI CAPITALS vs GUJARAT TITANS (2023)' },
    { src: '/ipl-2023-highlight08.webp', alt: 'IPL MATCH 08 (2023)', link: '../../Sports-2023/IPL-Highlights/HighlightMatch08', text: 'IPL MATCH 08 RAJASTHAN ROYALS vs PUNJAB KINGS (2023)' },
  ];
 {/*
  link: '../../Adult/LoveGuruS2-P2-2023/LoveGuruS2P2'
 */} 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleImageClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="carousel-inner relative w-full cursor-pointer m-10 overflow-hidden">
      <h2 className="mb-4 py-5 font-bold leading-none tracking-tight text-white text-center text-2xl dark:text-white" style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}>
        IPL - 2023 MATCH HIGHLIGHTS </h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div onClick={() => handleImageClick(image.link)} style={{ display: "flex", justifyContent: "center", cursor: 'pointer' }}>
              <Image
                className="scale-100 hover:scale-105 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl "
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
              />
            </div>
            <div className="text-center mt-2 text-white text-xl font-bold" style={{ textShadow: "5px 5px 2px #000" }}>{image.text}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default IPLHighlights;
