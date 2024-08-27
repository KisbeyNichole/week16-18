import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import MwompImage from '../images/Mwomp.gif'

export default function BioCard() {
  return (
    <div>
        <Card>
      <Card.Header>Nichole Kisbey</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <Image height="100px" src={MwompImage} roundedCircle />
          <p>
            {' '}
            Do Folks Find it Odd <br></br>
            That I Name myself as Blue<br></br>
            Even though I'm Orange{' '}
          </p>
          <footer className="blockquote-footer">
            404 Color not found 
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </div>
  )
}
