import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SurveyButtons from '../pages/Survey';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import useGmailClient, { createDraftMessage } from '../components/Draft'; // Adjust the import path

function SurveyModal({ show, handleClose }) {
  useGmailClient(); // Initialize the Google API client

  const handleSaveDraft = () => {
    // Replace with the actual email addresses
    const fromEmail = 'your-email@example.com';
    const toEmail = 'recipient-email@example.com';

    createDraftMessage(fromEmail, toEmail);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Survey</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
          <ListGroup variant="flush">
            <ListGroup.Item><Form>
              Did you come to my Portfolio for Art or for Software Development?
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Art"
                    name="portfolioType"
                    type={type}
                    id={`inline-${type}-art`}
                  />
                  <Form.Check
                    inline
                    label="Software Development"
                    name="portfolioType"
                    type={type}
                    id={`inline-${type}-software`}
                  />
                  <Form.Check
                    inline
                    label="Neither"
                    name="portfolioType"
                    type={type}
                    id={`inline-${type}-neither`}
                  />
                </div>
              ))}
             </Form></ListGroup.Item>
            <ListGroup.Item><Form>
              How would you rate your enjoyment of my website?
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="1"
                    name="portfolioType"
                    type={type}
                    id={`inline-${type}-one`}
                  />
                  <Form.Check
                    inline
                    label="2"
                    name="portfolioType"
                    type={type}
                    id={`inline-${type}-two`}
                  />
                  <Form.Check
                    inline
                    label="3"
                    name="portfolioType"
                    type={type}
                    id={`inline-${type}-three`}
                  />
                  <Form.Check
                    inline
                    label="4"
                    name="portfolioType"
                    type={type}
                    id={`inline-${type}-four`}
                  />
                  <Form.Check
                    inline
                    label="5"
                    name="portfolioType"
                    type={type}
                    id={`inline-${type}-five`}
                  />
                </div>
              ))}
            </Form></ListGroup.Item>
            <ListGroup.Item>
              <ButtonGroup size="lg" className="mb-2">
                <Button>Send Survey</Button>
                <Button onClick={handleSaveDraft}>Save Draft</Button>
                <Button>Delete Results</Button>
              </ButtonGroup>
            </ListGroup.Item>
          </ListGroup>
       
      </Modal.Body>
      <Modal.Footer>
        <SurveyButtons />
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SurveyModal;
