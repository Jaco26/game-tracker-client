import api from '@/api/index'
const { games } = api;


export default {
  state: {
    roles: [], // list of all player roles
    games: [], // list of all previously registered games
    players: [], // list of all previously registered players
    newGame: '', 
  },
  mutations: {
    setGames(state, games) {
      state.games = [];
      games.forEach(game => {
        const date = new Date(game.date_created);
        const tzOffset = date.getTimezoneOffset() * 60000;
        const time = date.getTime();
        game.date_created = new Date(time - tzOffset).toLocaleString();
        state.games.push(game);
      });
    },
  },
  actions: {
    async fetchGames({ commit }) {
      try {
        const result = await games.getAll();
        commit('setGames', result.games);
      } catch (err) {
        console.log(err);
      }
    },
    async addGame({ state, dispatch, commit }) {
      try {        
        const game = { name: state.newGame };
        await games.add(game);
        commit('setState', { key: 'newGame', data: '' });
        dispatch('fetchGames');
      } catch (err) {
        console.log(`There was an error adding ${state.newGame} to games:`, err);
      }
    },
    async deleteGame({ dispatch }, gameId) {
      try {
        await games.delete(gameId);
        dispatch('fetchGames');
      } catch (err) {
        console.log(`There was an error deleting game ${gameId}`, err);
      }
    }
  },
};