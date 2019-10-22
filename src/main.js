import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Inview from 'vueinview'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false
Vue.use(Inview)
Vue.use(VueAnalytics, {
	id: 'UA-119362979-2',
	autoTracking: {
		screenview: true
	},
	debug: {
		sendHitTask: true
	}
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
