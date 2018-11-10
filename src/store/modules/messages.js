export default {
  state: {
    messageList: [],
  },
  mutations: {
    SOCKET_connected(state, payload) {
      console.log('CONNECTED TO SERVER', payload);
    },
    SOCKET_messageRecieved(state, payload) {      
      state.messageList.push(payload)
    },
    SOCKET_allRooms(state, payload) {
      console.log('rooms', payload);
    },
    SOCKET_userJoined(state, payload) {
      console.log('user joined', payload);
      
    }
  },
  actions: {
    socket_newMessage() {},
    socket_joinRoom() {},
  }

}