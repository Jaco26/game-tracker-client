import io from 'socket.io-client'

export default {
  install(Vue, { store } ) {
    const rootUrl = process.env.NODE_ENV !== 'production' ? 'http://172.16.0.2:5000' : '';
    const socket = io(`${rootUrl}`, {
      autoConnect: false,
    });

    if (store) {
      store.subscribeAction((action, state) => {
        if (action.type.includes('socket_')) {
          const event = action.type.slice(action.type.indexOf('socket_')).replace('socket_', '');
          socket.emit(event, action.payload);
        }
      });
  
      const mutations = store._mutations;
      Object.keys(mutations).forEach(key => {
        if (key.includes('SOCKET_')) {
          const event = key.slice(key.indexOf('SOCKET_')).replace('SOCKET_', '');        
          socket.on(event, (data) => {          
            store.commit(key, data);
          });
        }
      });
    }
    
    Vue.prototype.$socket = socket;
    
  }
}








