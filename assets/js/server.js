import express from 'express';

const app = express();
const port = 3000;
let fetch;

app.use(express.json());

app.get('/search', async (req, res) => {
  const yelpAPIKey = '1dmbcU3MUPgl9HrOLMgcjmUaVTiN4Zhz7uSN5oT_MWpz9yFiUYpdzaooVHE2y72tlh1suFKCCnZxdi2iPo5KJ7JntNsumSWCazEP2Qc0Phe3r7Fe1QIHm3ND1CURZHYx';
  const searchUrl = 'https://api.yelp.com/v3/businesses/search';
  const queryParams = req.query;

  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${yelpAPIKey}`,
    },
  };

  try {
    const yelpResponse = await fetch(`${searchUrl}?${new URLSearchParams(queryParams)}`, requestOptions);
    const yelpData = await yelpResponse.json();
    res.json(yelpData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from Yelp API' });
  }
});

async function startServer() {
  fetch = await import('node-fetch').then(module => module.default);
};