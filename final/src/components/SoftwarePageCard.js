import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ConstructionImage from '../images/Construction.png'

export default function NewPageCard() {
  return (
    <div>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ConstructionImage} />
      <Card.Body>
        <Card.Title>Software Development</Card.Title>
        <Card.Text>
          Take a Look at some examples of my Coding here
        </Card.Text>
        <Button variant="primary">Dive in</Button>
      </Card.Body>
    </Card>

    </div>
  )
}
