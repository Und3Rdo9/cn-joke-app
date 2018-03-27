export const getPersistedState = () => {
  try {
    const serializedState = localStorage.getItem('chucksFavorites');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  }
  catch (err) {
    console.error(err);
    return undefined;
  }
};

export const persistState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('chucksFavorites', serializedState);
  }
  catch (err) {
    console.error(err);
  }

};
