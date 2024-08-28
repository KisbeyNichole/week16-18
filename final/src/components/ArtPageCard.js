import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ConstructionImage from '../images/Construction.png'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


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
        <Button as={Link} to="/art" variant="primary">Dive In</Button>
      </Card.Body>
    </Card>

    </div>
  )
}
