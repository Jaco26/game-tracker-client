import axios from 'axios';

const api = axios.create({
  baseURL: '/api'
});

const games = {
  getAll() {
    return api.get('/games')
      .then(res => res.data)
      .catch(err => err);
  },
  add(game) {
    return api.post('/games', game)
      .then(res => res.data)
      .catch(err => err);
  },
}


export default {
  games,
};