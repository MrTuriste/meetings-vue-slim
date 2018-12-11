import Vue from 'vue';
import Meetings from './Meetings.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueResource from "vue-resource";
Vue.http.options.root = '/api';

Vue.use(VueResource);
new Vue({
  render: h => h(Meetings),
}).$mount('#app');
