import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from './components/Hello';

Vue.use(VueRouter);

const Home = { template: '<div>Hello!!!!!,</div>' };

const routes = [
  { path: '/', component: Hello },
  { path: '/home', component: Home },
];

/* eslint-disable no-new */
export default new VueRouter({
  routes,
  mode: 'history',
});
