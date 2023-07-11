import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const HeroBanner = ({ src, alt }) => {
  return (
    <Container src={src} alt={alt}>
      
    </Container>
  );
};

export default HeroBanner;
