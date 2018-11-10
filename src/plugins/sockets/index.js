import io from 'socket.io-client'

export default {
  install(Vue, { store} ) {
    const rootUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000/' : '';
    const socket = io(`${rootUrl}`, {
      autoConnect: false,
    });

    Vue.prototype.$socket = socket;
    
  }
}