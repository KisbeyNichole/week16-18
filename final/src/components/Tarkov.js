import React, { useEffect, useState } from 'react';
import ApiCard from './ApiCard'; // Importing the ApiCard component

const Tarkov = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
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
                  wikiLink
                  iconLink
                  sellFor {
                    price
                    source
                  }
                  updated
                }
              }
            `,
          }),
        });
        const jsonResponse = await response.json();
        const result = jsonResponse.data.items;

        // Shuffle the array to randomize the items
        const shuffledData = result.sort(() => 0.5 - Math.random());

        // Get only the first three items
        const limitedData = shuffledData.slice(0, 3);

        setData(limitedData);
      } catch (err) {
        setError('Error fetching data');
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {data ? (
        <ApiCard data={data} /> // Pass the fetched data to ApiCard
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Tarkov;