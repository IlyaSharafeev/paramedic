export default {
  state: () => ({
    isMobileMenuBarVisible: false,
  }),
  mutations: {
    setMobileMenuBarVisible(state) {
      state.isMobileMenuBarVisible = true;
    },
    setMobileMenuBarHidden(state) {
      state.isMobileMenuBarVisible = false;
    },
  },
  actions: {
    openMobileMenuBar({ commit, dispatch }) {
      dispatch("closeAllBars");
      commit("setMobileMenuBarVisible");
      if (!document.body.classList.contains("is-sidebar-opened")) {
        document.body.classList.add("is-sidebar-opened");
      }
    },
    closeMobileMenuBar({ commit }) {
      commit("setMobileMenuBarHidden");
      if (document.body.classList.contains("is-sidebar-opened")) {
        document.body.classList.remove("is-sidebar-opened");
      }
    },
  },
  namespaced: true,
};
