import axios from '~/plugins/axios';

export const state = () => ({
    data: null
});

export const mutations = {
    SET_USER (state, user) {
        state.data = user;
    }
};
export const actions = {
    load ({ commit }, { req }) {
        if (req.user) {
            commit('SET_USER', req.user);
        }
    },
    async login ({ commit }, { email, password }) {
        try {
            const {data} = await axios.post('/api/v1/login', {
                email,
                password
            });
            commit('SET_USER', data);
            return true;
        } catch (err) {
            console.log('err', 'LOGIN ERRROR');
            return false;
        }
    },
    async logout ({ commit }) {
        await axios.post('/api/v1/logout');
        commit('SET_USER', null);
    },
    async signup ({ commit }, { email, password }) {
        try {
            const {data} = await axios.post('/api/v1/signup', {
                email,
                password
            });
            commit('SET_USER', data);
            return true;
        } catch (err) {
            console.log('err', 'SIGNUP ERRROR');
            return false;
        }
    }
};
