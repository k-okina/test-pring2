import Vue from 'vue';
import App from './App.vue';
import firebase from 'firebase';
import * as Pring from 'pring';


const app = firebase.initializeApp({
  apiKey: 'hoge',
  authDomain: 'hoge',
  databaseURL: 'hoge',
  projectId: 'hoge',
  storageBucket: 'hoge',
  messagingSenderId: 'hoge',
  timestampsInSnapshots: true,
});
Pring.initialize(app.firestore(), firebase.firestore.FieldValue.serverTimestamp());


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
