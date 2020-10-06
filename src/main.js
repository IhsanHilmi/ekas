import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Parse from 'parse'



Vue.config.productionTip = false

new Vue({
  router,
  created() {
    Parse.serverURL = 'https://parseapi.back4app.com';
    Parse.initialize(
      'SAPW6z0uMDNnb2YscxI5q2ix9dRUpINIz40Kvt8k',
      'o290zcB8kox48OmpTWTaWFCrZDWlsDPCR05OWNNj',
      'pheEFnZsbyI0CHfvi5ETPuXEOiRjDt9HrjeNBadl' // This is your Master key (never use it in the frontend)
    );
  },
  render: h => h(App)
}).$mount('#app')
