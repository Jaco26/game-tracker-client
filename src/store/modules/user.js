
function initialState() {
  const state = {
    playerId: null,
    name: '',
    roleId: null,
    gameId: null,
  }
  const session = JSON.parse(localStorage.getItem('player'));
  if (session) {
    Object.keys(session).forEach(key => {
      state[key] = session[key];
    });
  }
  return state;
}

export default {
  state: initialState(),
  mutations: {
    setUser(state, payload) {
      localStorage.setItem('player', JSON.stringify({ 
        playerId: payload.id,
        name: payload.name, 
      }));
      state.playerId = payload.id;
      state.name = payload.name;
    },
    logout(state) {
      localStorage.clear();
      state.playerId = null;
      state.name = '';
    }
  }

}