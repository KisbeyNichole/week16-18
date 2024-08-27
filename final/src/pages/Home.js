import React from 'react';
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BioCard from '../components/BioCard'
import SocialsCard from '../components/SocialsCard';
import ArtPageCard from '../components/ArtPageCard';
import SoftwarePageCard from '../components/SoftwarePageCard'
import AmissaraPageCard from '../components/AmissaraPageCard'

export default function Home() {
  return (
    <div>
      <NavBar />
      <Container>
      <Row>
        <Col><BioCard /></Col>
        <Col><SocialsCard /></Col>
      </Row>
      <Row>
        <Col><ArtPageCard /></Col>
        <Col><SoftwarePageCard /></Col>
        <Col><AmissaraPageCard /></Col>
      </Row>
    </Container>
    </div>
  );
}