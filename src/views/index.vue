<template>
    <div style="width:100vw;height:100vh;" @click="fullclick">
        <el-container class="main">
            <el-header height="100px" style="background:linear-gradient(45deg,#5eb5d7,#4365b3);user-select:none;padding:0px">
                <tool-bar :data="toolBars" ></tool-bar>
                <!-- <tool-bar :data="toolBars" @toolBarOpen="toolBarOpen"></tool-bar> -->

            </el-header>
            <el-main style="margin:0;padding:0px">
                <el-container style="width:100%;height:100%;">
                    <el-aside width="300px" style="margin:0;padding:0px;">
                        <el-container style="width:100%;height:100%;">
                            <el-header height="60%" style="margin:0;padding:0px;">
                                <!-- 实体模板 -->
                                <entityTemplateTree style="100%;"></entityTemplateTree>
                            </el-header>
                            <el-main height="40%" style="margin:0;padding:0px;">
                                <!-- 实体列表 -->
                                <!-- <entityTree style="height:100%"></entityTree> -->
                            </el-main>
                        </el-container>
                    </el-aside>
                    <el-main style="margin:0;padding:0px;">
                        
                    </el-main>

                </el-container>

            </el-main>
        </el-container>
    </div>
</template>

<script>
import entityTemplateTree from './entityTemplateTree'
// import entityTree from './entityTree'

export default {
    name: "index",
    props: {},
    components: {
        //导航栏
        entityTemplateTree,//实体模板
        // entityTree,//实体列表
        //地图        
    },
    watch: {

    },
    data() {
        return {
            toolBars:[
                {
                    name:'想定',
                    tools:[
                        {
                            name:'新建',
                            icon:'far fa-file',
                        },
                        {
                            name:'打开',
                            icon:'far fa-folder-open',
                        },
                        {
                            name:'保存',
                            icon:'far fa-save',
                        },
                        {
                            name:'编辑',
                            icon:'far fa-file-edit',
                        },
                    ]
                }
            ],
        };
    },
    mounted() {

    },
    methods: {

    }

}
</script>
<style lang='scss' scoped>
.main {
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>
