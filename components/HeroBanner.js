import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%; /* 16:9 aspect ratio (height divided by width) */
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* or object-fit: cover; */
`;


const HeroBanner = ({ src, alt }) => {
  return (
    <Container>
      <Image src={src} alt={alt} />
    </Container>
  );
};

export default HeroBanner;
