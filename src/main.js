import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyATrXiKZf3uBZ-GM1tAkrIXFzH8v6ylPDc",
  authDomain: "vuefs-prod-2f412.firebaseapp.com",
  databaseURL: "https://vuefs-prod-2f412.firebaseio.com",
  projectId: "vuefs-prod-2f412",
  storageBucket: "vuefs-prod-2f412.appspot.com",
  messagingSenderId: "917692270721",
  appId: "1:917692270721:web:11073e3a85deecc2c8a580",
  measurementId: "G-VKD3R0DDHQ"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
