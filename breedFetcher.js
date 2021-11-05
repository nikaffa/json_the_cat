const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const path = breedName.toLowerCase().slice(0, 3); //converts argv to first 3 letters
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + path;
  
  request(url, (error, response, body) => {
    const data = JSON.parse(body); //converts JSON string into an object
    //console.log(error);
    //console.log(response.statusCode);
    if (response.statusCode !== 200) {
      callback(data, null);
    } else if (data.length) {
      callback(null, data[0].description);
    } else {
      console.log('!!!!BREED NOT FOUND!!!!!!! ');
    }
  });
};
module.exports = { fetchBreedDescription };
