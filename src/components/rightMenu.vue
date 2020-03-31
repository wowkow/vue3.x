<template>
    <div v-show="data.display" id="rightMenu" :style="{...data.style}" class="rightMenu">
        <el-menu background-color="#545c64" text-color="#fff" active-text-color="#fff">
            <template v-for="menu in data.menu">
                <el-menu-item
                    :index="menu.name"
                    :key="menu.name"
                    :disabled="menu.disabled"
                    @click="handleClick(menu,method,menu.name)"
                >
                    <span slot="title">
                        <i :class="menu.icon" style="width:20px;text-align:center;color:#fff;"></i>
                        <el-divider direction="vertical"></el-divider>
                    </span>

                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    name: "rightMenu",
    props: [],
    computed: {
        ...mapState('rightMenu',{
            data:state => state.rightMenuData
        }),
    },
    methods: {
        ...mapMutations('rightMenu',[changeDisplayFalse]),
        handleClick(method) {
            this.$emit('menuClick',method);
            this.changeDisplayFalse();
        }
    }
};
</script>

<style lang="scss" scoped>
.rightMenu {
    position: fixed;
    display: block;
    z-index: 1000;
    background-color: #fff;
}
</style>