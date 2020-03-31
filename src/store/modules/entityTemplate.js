export default {
    namespaced: true,
    state: {
        entityTemplateData: [],
        currentEntityTemplate: {},
        deployFlag: false
    },
    getters: {

    },
    mutations: {
        changeEntityTemplate(state,data){
            state["entityTemplateData"] = data;
        },
        changeCurrentEntityTemplate(state,data){
            state["currentEntityTemplate"] = data;
        },
        changeDeployFlag(state,data){
            state["deployFlag"] = data;
        }
    }
}