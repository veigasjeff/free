import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import NextImage from 'next/image'; // Rename the imported component

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%; /* 16:9 aspect ratio (height divided by width) */
`;

const StyledImage = styled(NextImage)` // Rename the styled component
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* or object-fit: cover; */
`;

const LazyImage = ({ src, alt }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Load image only once
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (inView) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsLoaded(true);
      };
    }
  }, [inView, src]);

  return (
    <Container ref={ref}>
      {isLoaded ? (
        <StyledImage ref={imgRef} src={src} alt={alt} layout="fill" objectFit="cover" />
      ) : (
        <div
          style={{
            aspectRatio: '16/9', // Maintain aspect ratio
            backgroundColor: '#f1f1f1', // Placeholder color
          }}
        />
      )}
    </Container>
  );
};

const HeroBanner = ({ src, alt }) => {
  return <LazyImage src={src} alt={alt} />;
};

export default HeroBanner;
