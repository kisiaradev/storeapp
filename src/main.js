import Vue from 'vue'
import App from './App.vue'
import Admin from './components/Admin/Main.vue'
import EndUser from './components/EndUser/Main.vue'


//define the main Admin template and the main EndUser templates
//defined globally since App.vue will need access to them both

/**
* Admin Main Template Component Definition
*/
Vue.component('admin-main', Admin);

/**
* EndUser Main Template Component Definition
*/
Vue.component('user-main', EndUser);


new Vue({
  	el: '#app',
  	render: h => h(App)
})
