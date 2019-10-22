import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Inview from 'vueinview'
import VueAnalytics from 'vue-analytics'
import SocialSharing from 'vue-social-sharing'

Vue.config.productionTip = false
Vue.use(Inview)
Vue.use(VueAnalytics, {
	id: 'UA-119362979-3',
	autoTracking: {
		screenview: true
	},
	debug: {
		sendHitTask: process.env.NODE_ENV === 'production'
	}
})
Vue.use(SocialSharing)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
