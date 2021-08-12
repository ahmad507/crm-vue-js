require('./bootstrap');
window.Vue = require('vue').default;
import Vue from 'vue'


Vue.component('admin-component', require('./components/admins/Index').default)
Vue.component('user-component', require('./components/users/Index').default)



const app = new Vue({
    el: '#app',
});
