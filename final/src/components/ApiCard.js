import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const ApiCard = ({ data, onSubmit, onReset, score, onRestart }) => {
  const [guesses, setGuesses] = useState({});
  const [showPrices, setShowPrices] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  const handleGuessChange = (itemId, value) => {
    setGuesses(prevGuesses => ({
      ...prevGuesses,
      [itemId]: value,
    }));
  };

  const handleSubmit = () => {
    setShowPrices(true); // Show prices on submit
    const correctGuesses = onSubmit(guesses);

    if (correctGuesses === 3) {
      setResultMessage('Congrats! You got all three correct!');
    } else {
      setResultMessage(`You got ${correctGuesses} out of 3 correct. Try Again?`);
    }
  };

  const handleReset = () => {
    setShowPrices(false); // Rehide prices
    setResultMessage(''); // Clear result message
    setGuesses({}); // Reset guesses
    onReset(); // Fetch new items
  };

  const handleRestart = () => {
    setShowPrices(false); // Rehide prices
    setResultMessage(''); // Clear result message
    setGuesses({}); // Reset guesses
    onRestart(); // Reset score and fetch new items
  };

  return (
    <Card>
      <Container>
        <Card.Title>Guess the Market</Card.Title>
        <Row>
          {data.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4}>
              <Card>
                <Container>
                  <Row className="justify-content-md-center">
                    <Col md="auto">
                      <Image src={item.iconLink} height="150" width="100" thumbnail />
                    </Col>
                  </Row>
                  <Row className="justify-content-md-center">
                    <Col md="auto">
                    <ListGroup variant="flush">
                      <Card.Title>{item.name}: {item.shortName}</Card.Title>
                          {showPrices ? (
                         item.sellFor && item.sellFor.length > 0 ? (
                      <ListGroup.Item>
                         You could sell this item for {item.sellFor[0].price || 0} {item.sellFor[0].source === 'Peacekeeper' ? 'USD' : 'Roubles'} to {item.sellFor[0].source}.
                          </ListGroup.Item>
                        ) : (
                      <ListGroup.Item>No selling price available.</ListGroup.Item>
                      )
                      ) : (
                    <ListGroup.Item>
                     Price information will be shown after submission.
                    </ListGroup.Item>
                      )}

                        <ListGroup.Item>
                          Where do you think this places in the cost range?
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <DropdownButton
                            id={`dropdown-${item.id}`}
                            title="Select High, Medium, or Low"
                            onSelect={(eventKey) => handleGuessChange(item.id, eventKey)}
                          >
                            <Dropdown.Item eventKey="High">High</Dropdown.Item>
                            <Dropdown.Item eventKey="Medium">Medium</Dropdown.Item>
                            <Dropdown.Item eventKey="Low">Low</Dropdown.Item>
                          </DropdownButton>
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: '30rem' }}>
              <Card.Header>Results</Card.Header>
              <ListGroup>
                <ListGroup.Item>{resultMessage}</ListGroup.Item> {/* Display the result message */}
                <ListGroup.Item>Your current wins: {score.wins}</ListGroup.Item>
                <ListGroup.Item>Your current losses: {score.losses}</ListGroup.Item>
                <ListGroup.Item>
                  <Row className="justify-content-md-center">
                    <Col md="auto">
                      <Button variant="secondary" size="lg" onClick={handleSubmit}>
                        Submit
                      </Button>
                    </Col>
                    <Col md="auto">
                      <Button variant="secondary" size="lg" onClick={handleReset}>
                        Try Again
                      </Button>
                    </Col>
                    <Col md="auto">
                      <Button variant="secondary" size="lg" onClick={handleRestart}>
                        Restart
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default ApiCard;