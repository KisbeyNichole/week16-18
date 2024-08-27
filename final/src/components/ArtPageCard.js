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
        <Card.Title>Visual Design</Card.Title>
        <Card.Text>
          See My Portfolio here with My  favorite Peices in each category.
        </Card.Text>
        <Button variant="primary">Dive In</Button>
      </Card.Body>
    </Card>

    </div>
  )
}
