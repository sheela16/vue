import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase"



Vue.config.productionTip = false;
var firebaseConfig = {
  apiKey: "AIzaSyBvCUFaX7iPJiYE7AIj7BKA9ZNXPLoVn2E",
  authDomain: "mloka-647f3.firebaseapp.com",
  databaseURL: "https://mloka-647f3.firebaseio.com",
  projectId: "mloka-647f3",
  storageBucket: "mloka-647f3.appspot.com",
  messagingSenderId: "944501202737",
  appId: "1:944501202737:web:e952da38400fc7b7611a10",
  measurementId: "G-SV0WSTPMHZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
