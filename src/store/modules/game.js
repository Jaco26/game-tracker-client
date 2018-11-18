import players from './players'

export default {
  state: {
    id: null,
    name: '',
    dateCreated: null,
    dateStarted: null,
    dateFinished: null,
  },
  modules: {
    players
  }
}