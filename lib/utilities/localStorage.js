export const getPersistedState = () => {
  return localStorage.getItem('chucksFavorites');
};

export const persistState = (state) => {
  localStorage.setItem('chucksFavorites', state);
};
