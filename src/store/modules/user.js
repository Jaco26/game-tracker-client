export default {
  state: {
    playerId: null,
    name: '',
    roleId: null,
    gameId: null,
  },
  mutations: {
    setUser(state, payload) {
      state.playerId = payload.id;
      state.name = payload.name;
    }
  }

}