import Vue from 'vue'

import Timer from './components/Timer/Timer.vue'

Vue.component('Timer',
    () => import('./components/Timer/Timer.vue')
)