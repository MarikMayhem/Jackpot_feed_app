import Vuex, { Store } from 'vuex';
import Vue from 'vue';
import jackpots from './modules/jackpots';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        jackpots
    }
})