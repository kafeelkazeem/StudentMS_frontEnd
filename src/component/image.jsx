import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function Img(props) {
  return (
    <Container>
    <Image src={props.src} rounded />
    </Container>
  );
}

export default Img;