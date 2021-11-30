import Vue from "vue";
import Vuex from "vuex";
import {findHashName, selectHashName} from './service'


Vue.use(Vuex);

export const store = new Vuex.Store({
state:{
    hash_name: '',
    ret2: {}
},
mutations:{
    hash(state, ret2) {
        state.ret = ret2;
    },
},
    getters:{
        justtest(state) {
            return state.ret2;
        }
    },
actions:{
    async test2({commit}, state) {
        const result = await findHashName(state.hash_name);
        if (result == true) {
            commit('test2')
        }
    }
},
})


