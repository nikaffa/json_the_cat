const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const path = breedName.toLowerCase().slice(0, 3); //converts argv to first 3 letters
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + path;
  
  request(url, (error, response, body) => {
    const data = JSON.parse(body); //converts JSON string into an object

    if (error) { //fetch error
      callback(error, null);
    } else if (!data.length) { //breed doesn't exist
      callback(null, null);
    } else if (data.length) {
      callback(null, data[0].description); //data
    }
  });
};
module.exports = { fetchBreedDescription };
