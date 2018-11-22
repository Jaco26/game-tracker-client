import axios from 'axios';

const api = axios.create({
  baseURL: '/api'
});

export default function makeCall(method, url, payload) {
  return api[method](url, payload)
    .then(res => res.data)
    .catch(err => err);
}
