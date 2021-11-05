//Takes a cat breed name as argv, prints out a description using API fetch data
const request = require('request');

const breedFetcher = () => {
  
  const path = process.argv.slice(2)[0].toLowerCase().slice(0, 3); //converts argv to first 3 letters
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + path;

  request(url, (error, response, body) => {
    const data = JSON.parse(body); //converts JSON string into an object
    if (error) {
      console.log('!!!!PAGE NOT FOUND!!!!!!! ', error.message);
      return;
    }
    if (!data.length) {
      console.log('!!!!BREED NOT FOUND!!!!', response.statusCode);
      return;
    }
    console.log(data[0].description);
  });
};

breedFetcher();