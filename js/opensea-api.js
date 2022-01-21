axios
  .get("https://api.opensea.io/api/v1/collection/the-oven-pizzas")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => console.log(error));
