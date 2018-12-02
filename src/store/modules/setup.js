import  { makeCall }  from '@/api/index';


function formatGameDate(game) {
  const date = new Date(game.date_created);
  const tzOffset = date.getTimezoneOffset() * 60000;
  const time = date.getTime();
  game.date_created = new Date(time - tzOffset).toLocaleDateString();
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

  players: {
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

  },

  player: {
    async fetchPlayer({ commit }, playerId) {
      try {
        const result = await makeCall('get', `/player/${playerId}`);
        commit('user/setUser', result, { root: true })  
      } catch (err) {
        console.log('There was an error getting the player', err);
      }
    },
    async updatePlayerName({ dispatch }, { playerId, name }) {
      try {
        await makeCall('put', `/player/${playerId}`, { name });
        dispatch('fetchPlayers');
      } catch (err) {
        console.log(`There was an error updating the player name`, err);
      }
    },
    async deletePlayer({ dispatch }, playerId) {
      try {
        await makeCall('delete', `/player/${playerId}`);
        dispatch('fetchPlayers');
      } catch (err) {
        console.log(`There was an error deleting the player`, err);
      }
    },
    async joinGame({ commit, dispatch, state }, { playerId }) {
      try {
        const gameId = state.selectedGameId;
        await makeCall('post', `/game/${gameId}/join`, { player_id: playerId });
        commit('user/setState', { key: 'gameId', data: gameId }, { root: true })
        dispatch('fetchGame', gameId);
      } catch (err) {
        console.log(`There was an error joining the game`, err);
      }
    },
    async chooseRole({ dispatch, state }, { roleId, playerId }) {
      try {
        const gameId = state.selectedGameId;
        console.log(gameId, playerId, roleId);
        
        const result = await makeCall('post', `/game/${gameId}/role`, { player_id: playerId, role_id: roleId});
        dispatch('fetchGame', gameId);
      } catch (err) {
        console.log('There was an error choosing a role.');
      }
    },
  },


  roles: {
    async fetchRoles({ commit }) {
      try {
        const result = await makeCall('get', '/roles');
        commit('setState', { key: 'roles', data: result });
      } catch (err) {
        console.log(`There was an error getting all roles`, err);
      }
    },
  },
};


export default {
  state: {
    roles: [], // list of all player roles
    games: [], // list of all previously registered games
    selectedGameId: '',
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
    ...apiActions.players,
    ...apiActions.player,
    ...apiActions.roles,
    // selectPlayer({ commit, state }, playerId) {
    //   const player = state.players.find(p => p.id === playerId);
    //   commit('user/setUser', player, { root: true });
    // }
  },
  getters: {
    selectedGame: state => state.games.find(g => g.id == state.selectedGameId),
  }
};