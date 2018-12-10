import Vue from 'vue';
import App from './App';

import Eagle from 'eagle.js';
import 'eagle.js/dist/eagle.css';

Vue.use(Eagle);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
});