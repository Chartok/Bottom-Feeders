// yelp Fusion API
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 1dmbcU3MUPgl9HrOLMgcjmUaVTiN4Zhz7uSN5oT_MWpz9yFiUYpdzaooVHE2y72tlh1suFKCCnZxdi2iPo5KJ7JntNsumSWCazEP2Qc0Phe3r7Fe1QIHm3ND1CURZHYx'
  }
};

fetch('https://api.yelp.com/v3/businesses/search?location=Houston%2520Texas&sort_by=best_match&limit=20', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
