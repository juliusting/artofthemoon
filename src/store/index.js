import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		name: ''
	},
	mutations: {
		SET_NAME: (state, payload) => {
			state.name = payload || state.name
		},
	},
	actions: {
		setName: ({ commit }, payload) => commit('SET_NAME', payload),
	},
	modules: {
	}
})
