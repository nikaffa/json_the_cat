//Takes a cat breed name as argv, prints out a description using API fetch data
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('!!!!FETCH ERROR!!!!!!! ');
  } else if (!description) {
    console.log('!!!!BREED NOT FOUND!!!!!!! ');
  } else {
    console.log(description);
  }
});