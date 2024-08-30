// SurveyModual.js
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SurveyModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Survey</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Survey content goes here */}
        Woohoo, you are reading this text in a modal!
      </Modal.Body>
      <Modal.Footer>
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
