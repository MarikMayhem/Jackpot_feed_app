import axios from 'axios';

const state = {
    bigPot: {},
    mediumPots: []
};

const getters = {
    bigPot: (state) => state.bigPot,
    mediumPots: (state) => state.mediumPots
};

const actions = {
    async fetchPots({ commit }) {
        let mediumPots = [];
        let bigPot = {};
        const response = await axios.get('data.json')
        response.data.pots.forEach(pot =>
            pot.type === "big" ? bigPot = pot : mediumPots.push(pot)
        )
        commit('BigPot', bigPot)
        commit('MediumPots', mediumPots)
    },
    async incrementBigPot({ commit }) {
        await axios.get('data.json')
        commit('incrementBigMoney')
    },
    async incrementMediumPots({ commit }) {
        await axios.get('data.json')
        commit('incrementMediumMoney')
    }
};

const mutations = {
    BigPot: (state, pots) => (state.bigPot = pots),
    MediumPots: (state, potsArr) => (state.mediumPots = potsArr),
    incrementBigMoney: (state) => (state.bigPot.amount = String((+state.bigPot.amount + (+state.bigPot.amount / 100) * 0.1).toFixed(2))),
    incrementMediumMoney: (state) => (state.mediumPots.forEach(el => el.amount = String((+el.amount + (+el.amount / 100) * 0.1).toFixed(2))))
};

export default {
    state,
    getters,
    actions,
    mutations
};