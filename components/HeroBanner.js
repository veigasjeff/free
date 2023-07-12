import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import Image from 'next/image';


const HeroBannerContainer = styled.div`
  width: 100%;
  height: 0;
  padding-top: 56.25%; /* 16:9 aspect ratio (height divided by width) */
`;


const HeroBanner = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      layout="responsive"
      width={1350}
      height={760}
    />
  );
};

export default HeroBanner;
