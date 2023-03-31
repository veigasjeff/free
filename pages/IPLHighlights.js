import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const IPLHighlights = ({ }) => {
  const images = [
    { src: '/ipl-2023-gtvscsk.webp', alt: 'IPL MATCH 01 GT VS CSK (2023)', link: '../../Hollywood/AntMan-2023/AntMan', text: 'IPL MATCH 01 GUJARAT TITANS VS CHENNAI SUPER KINGS (2023)' },
    { src: '/coming-soon.webp', alt: 'IPL MATCH 02 	PBKS VS KKR (2023)', link: '../../Bollywood/Farzi-2023/Farzi', text: 'IPL MATCH 02 PUNJAB KINGS VS KOLKATA KNIGHT RIDERS (2023)' },
    { src: '/coming-soon.webp', alt: 'IPL MATCH 03 LSG VS DC (2023)', link: '../../Hollywood/MayfairWitches-2023/MayfairWitchesP1', text: 'IPL MATCH 03 LUCKNOW SUPER GIANTS VS DELHI CAPITALS (2023)' },
    { src: '/coming-soon.webp', alt: 'IPL MATCH 04 SRH VS RR (2023)', link: '../../Adult/LadyDoctor-2023/LadyDoctor', text: 'IPL MATCH 04 SUNRISERS HYDERABAD VS RAJASTHAN ROYALS (2023)' },
    { src: '/coming-soon.webp', alt: 'IPL MATCH 05 RCB VS MI (2023)', link: '../../Bollywood/Hunt-2023/Hunt', text: 'IPL MATCH 05 ROYAL CHALLENGERS BANGALORE VS MUMBAI INDIANS (2023)' },
   

  ];

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
      <h2 className="mb-4 py-5 font-bold leading-none tracking-tight text-white text-center text-2xl dark:text-white">IPL - 2023 MATCH HIGHLIGHTS </h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div onClick={() => handleImageClick(image.link)} style={{ display: "flex", justifyContent: "center", cursor: 'pointer' }}>
              <Image
                className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl "
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
              />
            </div>
            <div className="text-center mt-2 text-white text-xl font-bold">{image.text}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default IPLHighlights;
