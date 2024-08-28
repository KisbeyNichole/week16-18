import React, { useState } from 'react';
import { Carousel, Button, Card, Modal, Container, Row, Col } from 'react-bootstrap';

function ImageCarousel({ title, description, images }) {
  const [modalShow, setModalShow] = useState(false);
  const [nestedModalShow, setNestedModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setNestedModalShow(true);
  };

  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`Slide ${index}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            See All
          </Button>
        </Card.Body>
      </Card>

      {/* Full-page modal for displaying grid */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        fullscreen={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row>
              {images.map((image, index) => (
                <Col xs={6} md={4} key={index} className="mb-3">
                  <img
                    src={image}
                    alt={`Grid Image ${index}`}
                    className="img-fluid"
                    onClick={() => handleImageClick(image)}  // Click handler to open nested modal
                    style={{ cursor: 'pointer' }}  // Cursor pointer to indicate it's clickable
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Nested modal for displaying clicked image */}
      <Modal
        show={nestedModalShow}
        onHide={() => setNestedModalShow(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Close Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="img-fluid"
              style={{ maxWidth: '100%' }}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setNestedModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ImageCarousel;
