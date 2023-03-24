const express = require('express')
const app = express()
app.listen(3000)

app.get('/search', async (req, res) => {
    let yelpAPIKey = '1dmbcU3MUPgl9HrOLMgcjmUaVTiN4Zhz7uSN5oT_MWpz9yFiUYpdzaooVHE2y72tlh1suFKCCnZxdi2iPo5KJ7JntNsumSWCazEP2Qc0Phe3r7Fe1QIHm3ND1CURZHYx';
    let searchURL = 'https://api.yelp.com/v3/business/search';
    let queryParams = req.query;

    const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${yelpAPIKey}`,
        },
      };
    
      try {
        const yelpResponse = await fetch(`${searchURL}?${new URLSearchParams(queryParams)}`, requestOptions);
        const yelpData = await yelpResponse.json();
        res.json(yelpData);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data from Yelp API' });
      }
    });
    
    async function () {
      fetch = await import('node-fetch').then(module => module.default);
    };