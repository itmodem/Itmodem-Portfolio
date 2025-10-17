const jokes = require('one-liner-joke');

const getRandomJoke = jokes.getRandomJoke();

console.log("Here is your joke");

console.log(getRandomJoke.body);