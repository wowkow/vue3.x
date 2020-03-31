<template>
    <div style="width:100%;height:90vh">
        <el-container style="height:100%;margin:0;padding:0px;">
            <el-header height="100px">想定编辑</el-header>
            <el-container>
                <el-aside width="150px">
                    <el-divider>实体模板</el-divider>
                    <!-- <el-input placeholder="输入关键字过滤"><el-input> -->
                </el-aside>
                <el-main style="margin:0;padding:0px;">地图</el-main>
            </el-container>
            <el-footer height="50px">版本号：wukq@001</el-footer>

        </el-container>

        <!-- <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
        </el-container>

        <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
        </el-container>

        <el-container>
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main>
        </el-container>
        </el-container>

        <el-container>
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
        </el-container>

        <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
        </el-container>

        <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container> 
</el-container> -->


    </div>
</template>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>