export default {
  state: {
    messageList: [],
    newMessage: ''
  },
  mutations: {
    SOCKET_connected(state, payload) {
      state.messageList = payload;
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
    socket_newMessage(ctx, payload) {
      console.log(payload);
      
    },
    socket_joinRoom() {},
  }

}