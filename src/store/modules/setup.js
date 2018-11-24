import  { makeCall }  from '@/api/index';


function formatGameDate(game) {
  const date = new Date(game.date_created);
  const tzOffset = date.getTimezoneOffset() * 60000;
  const time = date.getTime();
  game.date_created = new Date(time - tzOffset).toLocaleString();
  return game;
}

const apiActions = {
  game: {
    async fetchGames({ commit }) {
      try {
        const result = await makeCall('get', '/games');
        commit('setGames', result.games);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchGame({ commit }, gameId) {
      try {
        const result = await makeCall('get', `/game/${gameId}`);
        commit('updateGames', result.game)
      } catch (err) {
        console.log('There was an error getting game', gameId);
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
    async addPlayer({ commit, dispatch, state }) {
      try {
        const player = { name: state.newPlayer };
        await makeCall('post', '/players', player);
        commit('setState', { key: 'newPlayer', data: '' });
        dispatch('fetchPlayers');
      } catch (err) {
        console.log(`There was an error adding player`, err);
      }
    },
    async joinGame({ commit, dispatch, rootState }, gameId) {
      try {
        const playerId = rootState.user.playerId;
        await makeCall('patch', `/game/${gameId}`, { player_id: playerId });
        dispatch('fetchGame', gameId);
      } catch (err) {
        console.log(`There was an error joining the game`, err);
      }
    } 
  },

  role: {
    async fetchRoles({ commit }) {
      try {
        const result = await makeCall('get', '/roles');
        commit('setState', { key: 'roles', data: result });
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
    newGame: '', 
    players: [], // list of all previously registered players
    newPlayer: '',
  },
  mutations: {
    setGames(state, games) {
      state.games = [];
      games.forEach(game => {
        state.games.push(formatGameDate(game));
      });
    },
    updateGames(state, game) {
      const gameIndex = state.games.map(g => g.id).indexOf(game.id);
      state.games.splice(gameIndex, 1, formatGameDate(game));
    },
  },
  actions: {
    ...apiActions.game,
    ...apiActions.player,
    ...apiActions.role,
    selectPlayer({ commit, state }, playerId) {
      const player = state.players.find(p => p.id === playerId);
      commit('user/setUser', player, { root: true });
    }
  },
};