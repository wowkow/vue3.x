<template>
    <el-container style="height:100%;margin:0;padding:0px;">
        <el-header height="100px">
            <el-divider>实体模板</el-divider>
            <!-- <el-input placeholder="请输入关键字进行过滤" v-model="filterData" size="small"></el-input> -->
            <el-input placeholder="请输入关键字进行过滤" v-model="filterData" size="small"></el-input>
        </el-header>
        <el-main style="margin:0;padding:0px;">
            <el-scrollbar style="height:100%;width:100%;">
                <el-tree
                    :data="entityTemplateData"
                    :props="props"
                    node-key="id"
                    default-expand-all
                    hightlight-current
                    ref="entityTemplateTree"
                    style="display:inline-block;min-width:100%;"
                    @click.stop
                    @node-click="nodeClick">

                    <span slot-scope="{node}">
                        <template v-if="node.id===currentEntityTemplate.id">{{node.label}}</template>
                        <template v-else>{{node.label}}</template>
                    </span>
                </el-tree>
                
            </el-scrollbar>
        </el-main>
    </el-container>
</template>
<script>
import {mapState} from "vuex"
export default {
    name: "entityTemplateTree",
    watch: {
        filterData(val){
            console.log(val);
            this.$refs.entityTemplateTree.filter(val);
        }
    },
    computed: {
        // entityTemplateData: state => state["entityTemplateData"],
        ...mapState("entityTemplate", {
            entityTemplateData: state => state["entityTemplateData"],
            currentEntityTemplate: state => state["currentEntityTemplate"]
        })

    },
    data() {
        return {
            filterData: "",
            entityTemplateData:[{
                id: 1,
                label: '陆军',
                children: [{
                    id: 4,
                    label: '坦克',
                    children: [{
                    id: 9,
                    label: '装甲车'
                    }, {
                    id: 10,
                    label: '士兵'
                    }]
                }]
            }, {
                id: 2,
                label: '空军',
                children: [{
                    id: 5,
                    label: '飞机'
                }, {
                    id: 6,
                    label: '歼击机'
                }]
            }, {
                id: 3,
                label: '武器',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }],
            props: {
                label: "名称",
                children: "children"
            },
            // defaultProps: {
            // children: 'children',
            // label: 'label'
            // }
        };
    },
    mounted() {
        //请求服务，获取树形数据
        const data = [{
                id: 1,
                label: '陆军',
                children: [{
                    id: 4,
                    label: '坦克',
                    children: [{
                    id: 9,
                    label: '装甲车'
                    }, {
                    id: 10,
                    label: '士兵'
                    }]
                }]
            }, {
                id: 2,
                label: '空军',
                children: [{
                    id: 5,
                    label: '飞机'
                }, {
                    id: 6,
                    label: '歼击机'
                }]
            }, {
                id: 3,
                label: '武器',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }];
            this.$store.commit("entityTemplate/changeEntityTemplate",data);
            /* this.$message({
                message: "服务器错误，验证失败，请联系管理员！",
                type: "error"
            }); */

    },
    methods: {
        //筛选方法
        entityTemplateTreeFilterMethod(value,data) {
            if(!value){
                return true;
            }
            return data.label.indexOf(value) !== -1;
        },
        nodeClick(data) {
            this.$store.commit("entityTemplate/changeCurrentEntityTemplate",data);
            this.$store.commit("entityTemplate/changeDeployFlag",true);
        }
    }
}
</script>