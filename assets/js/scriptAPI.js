
// Fetch yelp Fusion API
/* const apiKey =
  

fetch(endpoint, {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    // code to filter and sort restaurant data
    const filteredData = data.businesses.filter(
      (restaurant) => restaurant.rating <= 2.5
    );
    const sortedData = filteredData.sort((a, b) => a.rating - b.rating);
  })
  .catch((error) => console.error(error));

const restaurantList = document.querySelector(".restaurant-list");
sortedData.forEach((restaurant) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
      <h2>${restaurant.name}</h2>
      <p>Rating: ${restaurant.rating}</p>
      <h3>Reviews:</h3>
      <ul>
        ${restaurant.reviews
          .map((review) => `<li>${review.text}</li>`)
          .join("")}
      </ul>
    `;
  restaurantList.appendChild(listItem);
}); */
