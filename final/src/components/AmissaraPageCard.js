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
        <Card.Title>Amissara</Card.Title>
        <Card.Text>
         Check Out my personal Project for Amissara! 
        </Card.Text>
        <Button as={Link} to="/amissara" variant="primary">Dive in</Button>
      </Card.Body>
    </Card>

    </div>
  )
}
