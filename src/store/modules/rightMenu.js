export default {
    namespaced: true,
    state: {
        rightMenuData: {
            display: false,
            style: {},
            menu: [
                {
                    icon: "far fa-file-alt",
                    name: "详细信息",
                    // method: "clickBasicInfo",
                    disable: false
                },
                {
                    icon: "far fa-file-alt",
                    name: "机动计划",
                    // method: "clickBasicInfo",
                    disable: false
                },
                {
                    icon: "far fa-file-alt",
                    name: "装备组件",
                    // method: "clickBasicInfo",
                    disable: false
                },
                {
                    icon: "far fa-file-alt",
                    name: "计划任务",
                    // method: "clickBasicInfo",
                    disable: false
                },
                {
                    icon: "far fa-file-alt",
                    name: "删除实体",
                    // method: "clickBasicInfo",
                    disable: false
                }
            ]
        }
    },
    getters: {

    },
    mutations: {
        changeDisplayFalse(state) {
            state.rightMenuData.display = false;
        },
        changeDisplayTrue(state) {
            state.rightMenuData.display = true;
        },
        changeStyle(state,e) {
            state.rightMenuData.style = {
                bottom: window.innerHeight - e.pageY + "px",
                left: e.pageX + "px"
            }
        }
    },
    actions: {
        
    }

}