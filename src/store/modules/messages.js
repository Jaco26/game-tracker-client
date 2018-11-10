export default {
  state: {
    messages: [],
  },
  mutations: {
    SOCKET_messageRecieved(state, payload) {      
      state.messages.push(payload)
    },
    SOCKET_allRooms(state, payload) {
      console.log('rooms', payload);
    }
  },
  actions: {
    socket_newMessage() {},
    socket_joinRoom() {},
  }

}