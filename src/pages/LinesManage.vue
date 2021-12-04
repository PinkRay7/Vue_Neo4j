<!-- 线路管理 -->
<template>
    <div class="comp">
        <!-- sub-nav左侧导航栏 -->
        <div class="sub-nav">
            <ul>
                <li>
                    <router-link active-class="active" to="/linesManage/addline">添加线路</router-link>
                </li>
                <li>
                    <router-link active-class="active" to="/linesManage/changeLine">更改线路</router-link>
                </li>
                <li>
                    <router-link active-class="active" to="/linesManage/deleteLine">删除线路</router-link>
                </li>
            </ul>
        </div>
        <!-- view右侧内容 -->
        <div class="view">
            <h2>线路管理</h2>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

export default {
    name: 'LinesManage',
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 200px;
        background-color: #f1f1f1;
        position: fixed;
        height: 100%;
        overflow: auto;
    }
    li {
        border-bottom-color: white;
        border-bottom-width:1px;
        border-bottom-style: solid;
    }
    li a {
        display: block;
        color: #000;
        padding: 8px 16px;
        text-decoration: none;
    }
    li a:hover {
        background-color: #555;
        color: white;
    }
</style>