import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import cities from './modules/cities'
import player from './modules/player'
import allPlayers from './modules/all-players'

Vue.use(Vuex);

export const store = new Vuex.Store(wrap({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    cities,
    player,
    allPlayers,
  },
}));


function wrap(mod) {
  const wrapped = Object.assign({
    namespaced: true,
    state: {},
    mutations: {
      setState,
    },
    actions: {},
    getters: {},
    modules: {},
  }, mod);

  wrapped.modules = wrapModules(wrapped.modules);

  return wrapped;
}

function wrapModules(mods) {
  return Object.keys(mods).reduce((wrappedMods, name) => {
    wrappedMods[name] = wrap(mods[name]);
    return wrappedMods;
  }, {});
}

function reduceNamespace(namespace, key) {
  let mockState = store.state;
  return [...namespace.split('/'), key].reduce((a, b) => {
    mockState = mockState[b];
    return mockState;
  }, mockState);
}

export function bindState(namespace, items) {
  return items.reduce((accum, b) => {   
    accum[b] = {
      get: () => reduceNamespace(namespace, b),
      set: val => store.commit(namespace + '/setState', { key: b, data: val })
    }
    return accum;
  }, {});
}

function setState(state, { key, data }) {  
  let stateCopy = state;
  key.split('.').reduce((a, b, i, arr) => {
    if (i === arr.length - 1) {
      stateCopy[b] = data;
    } else {
      stateCopy = stateCopy[b];
    }
    return stateCopy;
  }, stateCopy);
}
