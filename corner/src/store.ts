import { createStore } from 'vuex';
import { IOpentip } from './types';

const state = () => {
  return {
    tipShow: false,
    tipText: 'Welcome',
    tipType: 'primary',
  };
};

const actions = {
  openTip({ commit }, config?: IOpentip) {
    commit('openTip', config);
  },

  closeTip({ commit }) {
    commit('closeTip');
  },
};

const mutations = {
  openTip(state, config?: IOpentip) {
    state.tipShow = true;
    state.tipText = config?.text || 'Welcome';
    state.tipType = config?.type || 'primary';
  },

  closeTip(state) {
    state.tipShow = false;
    state.tipText = 'Welcome';
    state.tipType = 'primary';
  },
};

const store = createStore({ state, actions, mutations });

export default store;
