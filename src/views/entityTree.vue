<template>
    <div style="height:100%">
        <el-container style="height:100%;margin:0;padding:0px;">
            <el-header height="100px">
                <el-divider>实体列表</el-divider>
                <!-- <el-input placeholder="请输入关键字进行过滤" v-model="filterData" size="small"></el-input> -->
                <el-input placeholder="请输入关键字进行过滤" v-model="filterData" size="small" style="height:40px"></el-input>
            </el-header>
            <el-main style="margin:0;padding:0px;">
                <el-scrollbar style="height:100%;width:100%;">
                    <el-tree
                        :data="entityTreeDataData"
                        :props="entityTreeData.props"
                        default-expand-all
                        node-key="实体句柄"
                        :filter-node-method="entityTreeFilterMethod"
                        ref="entityTree"
                        @node-contextmenu="entityRightClick"
                        hightlight-current
                        @node-click="nodeClick"
                        style="display:inline-block;min-width:100%;">

                        <span slot-scope="{node}">
                            <template v-if="data.实体句柄==entityTreeData.currentEntity[0].实体句柄">
                                <div style="width:100%;color:red">{{node.label}}</div>
                            </template>
                            <template v-else>
                                <div style="width:100%;">{{node.label}}</div>
                            </template>
                        </span>
                    </el-tree>
                    
                </el-scrollbar>
            </el-main>
        </el-container>
        <!-- 右击菜单 -->
        

    </div>
    
</template>

<script>
import rightMenu from "../components/rightMenu";//右键菜单
import { mapMutations } from 'vuex';
// import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    name: "entityTree",
    props: [],
    components: {
        rightMenu
    },
    computed: {
        // ...mapState('current')
    },
    watch: {
        entityTreeDataData(val) {
            console.log("111",this.$refs.entityTree);
        },
        filterData(val) {
            this.$refs.entityTree.filter(val);
        },
        entityTreeFilter(val) {
            this.$refs.entityTree.filter(val);
        }
    },
    data() {
        return {
            currentEntityZpzj: {},
            filterData: "",//输入框 过滤

        };
    },
    methods: {
        ...mapMutations('rightMenu',['changeDisplayTrue','changeStyle']),
        //树右击
        entityRightClick(e,data) {
            // this.$store.commit("currentOpenScenario/changeCurrentEntity",[data]);
            this.changeDisplayTrue();
            this.changeStyle(e);
        },
        clickShowDialog(method) {
            console.log("===点击了菜单===");
            this[method](this.entityTreeData);
        }
    },
    entityTreeFilterMethod() {

    }
}
</script>

<style scoped>
div.title {
    font-size: 16px;
    color: #333;
    margin-bottom: 5px;
}
.el-from-item span {
    margin-right: 20px;
}
.button-box-mini {
    margin-top: 15px 0;
}
</style>