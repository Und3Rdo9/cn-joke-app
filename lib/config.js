module.exports = {
  port: process.env.PORT || 8080,
  chuckApiUri: 'http://api.icndb.com/jokes/random/',
  maxFavorites: 10,
  autoAddInterval: 5000
};
