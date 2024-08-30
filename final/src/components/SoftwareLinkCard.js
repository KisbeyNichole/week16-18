import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SoftwareImage from '../images/Software.png'

export default function SoftwareLinkCard() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={SoftwareImage} />
    <Card.Body>
      <Card.Title>Page Example</Card.Title>
      <Card.Text>
        Check out an exampple of my work here!
      </Card.Text>
      <Button variant="primary">Go to page</Button>
    </Card.Body>
  </Card>
  )
}
