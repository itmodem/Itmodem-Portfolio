const jokes = require('one-liner-joke');

const getRandomJoke = jokes.getRandomJoke();
console.log("Bhai tere liye ek joke:");
console.log(getRandomJoke.body);
