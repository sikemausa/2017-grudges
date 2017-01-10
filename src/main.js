import Vue from 'vue';
import VueResource from 'vue-resource';
import router from 'src/router';
import App from 'src/App';

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  http: {},
  template: '<App/>',
  components: { App },
});
