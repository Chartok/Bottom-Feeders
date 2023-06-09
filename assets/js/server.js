// Node Packages; initialize express as variable 'app'
const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

// yelpFUSION API Endpoint
const YELP_API_URL = 'https://api.yelp.com/v3/business/search';

// Express to use CORS wildcard '*' middleware bypassing CORS error
app.use(cors({
    origin: '*'
}));

// Express fetching restaurant data from yelpAPI Endpoint ./businesses/search by specifying parameters to get back only data relevant to the user's story
app.get('/search', async (req, res) => {
    const yelpAPIKey = 'yelp_api_key';
    const searchTerm = 'restaurants';
    
    // Use location sent from request; default to Houston
    const location = req.query.location || 'Houston';
  
    const url = 'https://api.yelp.com/v3/businesses/search';
    
    // Request parameters to receive relevant data for user's story
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${yelpAPIKey}`,
      },
      params: {
        term: searchTerm,
        location: location,
        sort_by: 'rating',
        categories: 'restaurants',
        price: '1,2',
        rating: '1.0,2.5',
      },
    };
  
    // Try-Catch to handle request to and response from yelpAPI and stores response into yelpData variable; logs any errors to the console and responds to the client with .json message 500 status code
    try {
      const yelpResponse = await axios(url, requestOptions);
      const yelpData = yelpResponse.data;
      res.json(yelpData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch data from Yelp API' });
    }
  });
  
  // Initializing Port; Express listen for requests through defined port; if environment port variable is not set, 3000 will be default value for PORT; logs port # on to the console
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });