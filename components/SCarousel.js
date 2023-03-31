import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export const Carousel = () => {
  const images = [
    { src: '/coming-soon.webp', alt: 'Gandi Baat S7', link: '/' },
    { src: '/coming-soon.webp', alt: 'Jungle Cottage', link: '/' },
    { src: '/coming-soon.webp', alt: 'Nasha', link: '/' },
    { src: '/coming-soon.webp', alt: 'Mohan Chabhiwala', link: '/' },
    { src: '/coming-soon.webp', alt: 'Love Guru S2 P2', link: '/' },
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
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <div onClick={() => handleImageClick(image.link)} style={{  display: "flex", justifyContent: "center", cursor: 'pointer' }} >
            <Image
              className="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl"
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};
