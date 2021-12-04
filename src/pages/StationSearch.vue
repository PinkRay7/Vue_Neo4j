<!-- 站点查询 -->
<template>
    <div class="comp">
        <!-- sub-nav左侧导航栏 -->
        <div class="sub-nav">
            <ul>
                <li>
                    <router-link active-class="active" to="/stationSearch/allStations">全部站点查询</router-link>
                </li>
                <li>
                    <router-link active-class="active" to="/stationSearch/statLines">站点停靠线路查询</router-link>
                </li>
                <li>
                    <router-link active-class="active" to="/stationSearch/lineStations">沿途站点查询</router-link>
                </li>
                <li>
                    <router-link active-class="active" to="/stationSearch/minPath">最短路径查询</router-link>
                </li>
                <li>
                    <router-link active-class="active" to="/stationSearch/directStation">直达站点查询</router-link>
                </li>
            </ul>
            
        </div>
        <!-- view右侧内容 -->
        <div class="view">
            <h2>站点查询</h2>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

export default {
    name: 'StationSearch',
    components: {
    }
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