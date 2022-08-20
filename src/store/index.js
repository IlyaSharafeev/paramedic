import Vuex from "vuex";
import sidebars from "@/store/sidebars";

export default new Vuex.Store({
    state: {
        sidebarHasPopup: false,
    },
    mutations: {
        setSidebarHasPopup(state, sidebarHasPopup) {
            state.sidebarHasPopup = sidebarHasPopup;
        },
    },
    actions: {},
    modules: {
        sidebars,
    }
})