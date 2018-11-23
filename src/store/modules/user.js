function loadStoredId() {
  const player = JSON.parse(localStorage.getItem('player'))
  return player && player.id ? player.id : null;
}

export default {
  state: {
    playerId: loadStoredId(),
    name: '',
    roleId: null,
    gameId: null,
  },
  mutations: {
    setUser(state, payload) {
      state.playerId = payload.id;
      state.name = payload.name;
    },
    logout(state) {
      localStorage.clear();
      state.playerId = null;
    }
  }

}