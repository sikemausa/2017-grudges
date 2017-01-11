import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import List from './components/List';
import Jackal from './components/Jackal';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/List', component: List },
  { path: '/Jackal/:id', name: 'jackal', component: Jackal },
];

/* eslint-disable no-new */
export default new VueRouter({
  routes,
  mode: 'history',
});
