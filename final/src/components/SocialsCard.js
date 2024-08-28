import React, { useState } from 'react'; // Import useState
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div> 
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="/socials">
            <Nav.Item>
              <Nav.Link>Socials</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  onClick={handleShow}>Contact Me</Nav.Link>
              <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Nichole Kisbey</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              amissarafilesofficial@gmail.com<br/>
              Concept Artist, Visual Designer, Software Developer. <br />
              2D Digital Artist(Freelance), Open For work.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body as="socials">
          <Card.Title>Check Out My Socials!</Card.Title>
          <Card.Text>
            If you want to find more or get notifications when I post, here are my
            active Medias!
          </Card.Text>
          <ButtonGroup className="mb-2">
            <Button href="https://www.instagram.com/blooerror404/">Instagram</Button>
            <Button href="https://www.deviantart.com/blooerror404">DeviantArt</Button>
            <Button href="https://cara.app/blooerror404">Cara</Button>
            <Button href="https://discord.gg/ECRaHKXR8m">Discord</Button>
          </ButtonGroup>
        </Card.Body>
        
      </Card>
    </div>
  );
}

export default Example;
