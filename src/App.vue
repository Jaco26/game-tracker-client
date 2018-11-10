<template>
  <div id="app" class="container">
    <form @keydown.enter="sendMessage" @submit.prevent="sendMessage">
      <div class="row">
        <div class="f1 t-center">
          <input type="text" v-model="newMessage">
        </div>
      </div>
      <div class="row">
        <div class="f1 t-center">
          <ul style="list-style: none;">
            <li v-for="(msg, i) in messages" :key="i">{{msg.message}}</li>
          </ul>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      newMessage: '',
      messages: [],
    };
  },
  mounted() {
    const SOCKET = this.$socket.open();
    // console.log(SOCKET);
    
    this.$socket.on('connect', this.handleConnect)
    this.$socket.on('messageRecieved', this.addToMessages)
  },
  methods: {
    handleConnect(data) {
     
      if (data) {
        //  console.log('CONNECTED:', this.$socket);
        this.$socket.emit('join', { room: 'theRoom' })
      }
    },
    addToMessages(msg) {
      console.log(msg);
      
      this.messages.push(msg)
    },
    sendMessage() {
      if (this.newMessage.trim().length) {        
        this.$socket.emit('newMessage', { message: this.newMessage });
        this.newMessage = '';
      }
    }
  }

} 
</script>


<style lang="scss">

html, body {
  margin: 0;
  height: 100%;
}

input[type=text] {
  resize: none;
  font-size: 16px;
  width: 300px;
}

button {
  min-width: 50px;
  min-height: 30px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
 
.container {
  display: block;
  padding: 2em;
  width: 100%;
  height: 100%;
  background-color: beige;
}

.row {
  display: flex;
  flex-direction: row;
}


.f1 {
  flex: 1;
  padding: .2em;
}

.f2 {
  flex: 2;
  padding: .2em;
}

.f3 {
  flex: 3;
  padding: .2em;
}

.f4 {
  flex: 4;
  padding: .2em;
}

.f5 {
  flex: 5;
  padding: .2em;
}

.t-center {
  text-align: center;
}


</style>
