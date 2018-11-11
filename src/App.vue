<template>
  <b-container class="align-items-center" fluid id="app">
    Hi
    <router-view></router-view>
  </b-container>
  <!-- <div id="app" class="container">
    <div class="row">
      <div class="f1 t-center">
        <input type="text" placeholder="Enter your name" v-model="name">
      </div>
    </div>
    <form @submit.prevent="sendMessage(newMessage)">
      <div class="row">
        <div class="f1 t-center">
          <input  type="text" v-model="newMessage">
        </div>
      </div>
      <div class="row">
          <ul class="messages t-center">
            <li class="row message-row" v-for="(msg, i) in messageList" :key="i">
              <span class="username"><b>{{msg.user}}:</b></span> 
              <span class="message">{{msg.message}}</span>
            </li>
          </ul>
      </div>
    </form>
  </div> -->
</template>

<script>
import { mapActions } from 'vuex';
import { bindState } from '@/store';
export default {
  // mounted() {    
  //   this.$socket.open();
  //   this.joinRoom({ room: 'myRoom' });    
  // },
  // computed: {
  //   ...bindState('messages', [
  //     'messageList',
  //     'newMessage'
  //   ]),
  //   ...bindState('player', [
  //     'name'
  //   ]),
  // },
  // methods: {
  //   sendMessage() {
  //     console.log('HEHEHE');
  //     const message = {
  //       message: this.newMessage,
  //       user: this.name,
  //     };
  //     this.$store.dispatch('messages/socket_newMessage', message);
  //     this.newMessage = '';
  //   },
  //   ...mapActions('messages', {
  //     joinRoom: 'socket_joinRoom',
  //   })
  // }

} 
</script>


<style lang="scss">

html, body {
  margin: 0;
  height: 100%;
}

#app {
  background-color: beige;
  height: 100%;
}

// input[type=text] {
//   resize: none;
//   font-size: 16px;
//   width: 300px;
// }

// button {
//   min-width: 50px;
//   min-height: 30px;
// }

// .messages {
//   list-style: none;
//   width: 400px;
//   // background-color: #bde7d4;
//   margin: auto;
// }

// .message-row {
//   margin: 10px 0;
// }

// .message {
//   margin-left: 20px;
// }

// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
 
// .container {
//   display: block;
//   padding: 2em;
//   width: 100%;
//   height: 100%;
//   background-color: beige;
// }

// .row {
//   display: flex;
//   flex-direction: row;
// }


// .f1 {
//   flex: 1;
//   padding: .2em;
// }

// .f2 {
//   flex: 2;
//   padding: .2em;
// }

// .f3 {
//   flex: 3;
//   padding: .2em;
// }

// .f4 {
//   flex: 4;
//   padding: .2em;
// }

// .f5 {
//   flex: 5;
//   padding: .2em;
// }

// .t-center {
//   text-align: center;
// }


</style>
