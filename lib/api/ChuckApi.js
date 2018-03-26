import axios from 'axios';
import config from './../config.js';

export const getRandomJokes = (amount) => {
  return new Promise((resolve, reject) => {
    axios.get(`${config.chuckApiUri}${amount}`)
      .then((response)  => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
