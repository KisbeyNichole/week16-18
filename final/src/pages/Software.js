import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApiCard from '../components/ApiCard';
import SoftwareLinkCard from '../components/SoftwareLinkCard';

export default function Software() {
  const [items, setItems] = useState([]);
  const [score, setScore] = useState({ wins: 0, losses: 0 });

  const handleFetchItems = async () => {
    try {
      const response = await fetch('https://api.tarkov.dev/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              items {
                id
                name
                shortName
                iconLink
                sellFor {
                  price
                }
              }
            }
          `,
        }),
      });
      const jsonResponse = await response.json();
      const shuffledData = jsonResponse.data.items.sort(() => 0.5 - Math.random()).slice(0, 3);
  
      // Handle items with no price and set it to 0
      const processedData = shuffledData.map(item => ({
        ...item,
        sellFor: item.sellFor && item.sellFor.length > 0 ? item.sellFor : [{ price: 0 }]
      }));
  
      setItems(processedData);
    } catch (err) {
      console.error('Error fetching data', err);
    }
  };

  // Rank the items based on their prices
  const determineItemCostRange = (items) => {
    // Sort items by price in ascending order
    const sortedItems = [...items].sort((a, b) => a.sellFor[0].price - b.sellFor[0].price);
    
    // Map the sorted items to their respective ranks
    const rankings = {
      [sortedItems[0].id]: 'Low',    // Lowest price
      [sortedItems[1].id]: 'Medium', // Middle price
      [sortedItems[2].id]: 'High'    // Highest price
    };

    return rankings;
  };

  const handleSubmit = (guesses) => {
    const rankings = determineItemCostRange(items);
    let correctGuesses = 0;

    items.forEach(item => {
      const guess = guesses[item.id];
      if (guess === rankings[item.id]) {
        correctGuesses++;
      }
    });

    if (correctGuesses === 3) {
      setScore(prevScore => ({ ...prevScore, wins: prevScore.wins + 1 }));
    } else {
      setScore(prevScore => ({ ...prevScore, losses: prevScore.losses + 1 }));
    }

    return correctGuesses;
  };

  const handleReset = () => {
    handleFetchItems();
  };

  const handleRestart = () => {
    setScore({ wins: 0, losses: 0 }); // Reset the score
    handleFetchItems(); // Fetch new items
  };

  useEffect(() => {
    handleFetchItems();
  }, []);

  return (
    <Container fluid>
      <NavBar />
      <Row>
        <Col>
          <ApiCard data={items} onSubmit={handleSubmit} onReset={handleReset} onRestart={handleRestart} score={score} />
        </Col>
      </Row>
      <Row>
        <Col><SoftwareLinkCard/></Col>
        <Col><SoftwareLinkCard/></Col>
        <Col><SoftwareLinkCard/></Col>
      </Row>
    </Container>
  );
}


