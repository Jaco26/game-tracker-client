export default {
  state: {
    adminKey: '',
  },
  getters: {
    isAdmin: state => state.adminKey === 'jacoAdmin',
  }
};