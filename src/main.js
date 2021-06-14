import Vue from 'vue';
import App from './App';

new Vue({
  // el: '#app' Could do this as an alternative way to render an output to the HTML through the 'app' div, instead of the chained 'mount' at the end of the instance
  render: h => h(App) // Arrow function syntax, ES6
}).$mount('#app');
