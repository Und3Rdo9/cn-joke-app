export const formatJokeOrderArray = (jokesArray) => {
  return jokesArray.map((joke) => {
    return joke.id;
  });
};

export const addJokeToFavoriteArray = (currentFavorites, newJokeId) => {
  const newFavorites = [...currentFavorites];
  if (newFavorites.includes(newJokeId)) {
    return newFavorites;
  }
  else {
    return [...newFavorites, newJokeId];
  }
};
