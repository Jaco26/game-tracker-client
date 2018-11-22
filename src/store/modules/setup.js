import  { makeCall }  from '@/api/index';

const actions = {
  game: {
    async fetchGames({ commit }) {
      try {
        const result = await makeCall('get', '/games');
        commit('setGames', result.games);
      } catch (err) {
        console.log(err);
      }
    },
    async addGame({ state, dispatch, commit }) {
      try {        
        const game = { name: state.newGame };
        await makeCall('post', '/games', game);
        commit('setState', { key: 'newGame', data: '' });
        dispatch('fetchGames');
      } catch (err) {
        console.log(`There was an error adding ${state.newGame} to games:`, err);
      }
    },
    async deleteGame({ dispatch }, gameId) {
      try {
        await makeCall('delete', `/game/${gameId}`);
        dispatch('fetchGames');
      } catch (err) {
        console.log(`There was an error deleting game ${gameId}`, err);
      }
    },
  },

  player: {
    async fetchPlayers({ commit }) {
      try {
        const result = await makeCall('get', '/players');
        commit('setState', { key: 'players', data: result });
      } catch (err) {
        console.log(`There was an error getting all players`, err);
      }
    },
  },

  role: {
    async fetchRoles({ commit }) {
      try {
        const result = await makeCall('get', '/roles');
        console.log('fetch roles result', result);
        
      } catch (err) {
        console.log(`There was an error getting all roles`, err);
      }
    }
  }
}


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
    ...actions.game,
    ...actions.player,
    ...actions.role,
  },
};