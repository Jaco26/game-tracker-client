import io from 'socket.io-client'


function modHasMods(mod) {
  return Object.keys(mod.modules).length;
}

function withReduce(mod, prevNamespace) {
  const modules = mod.modules;
  if (modules) {
    return Object.keys(modules).reduce((accum, modName) => {
      const namespace = prevNamespace ? prevNamespace + '/' + modName : modName;
      const actions = Object.keys(modules[modName].actions).filter(item => item.startsWith('socket_'));
      const mutations = Object.keys(modules[modName].mutations).filter(item => item.startsWith('SOCKET_'));
      accum.push({
        namespace,
        actions,
        mutations,
      });
      if (modHasMods(modules[modName])) {        
        accum.push(...withReduce(modules[modName], namespace));
      }
      return accum;
    }, []);
  }
 
}


export default {
  install(Vue, { store} ) {
    const rootUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : '';
    const socket = io(`${rootUrl}`, {
      autoConnect: false,
    });
    const socketActionsAndMutations = withReduce(store._modules.root._rawModule);
    console.log(socketActionsAndMutations);
        
    Vue.prototype.$socket = socket;
    
  }
}








