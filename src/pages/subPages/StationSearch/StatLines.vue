<!-- 站点停靠线路查询
    搜索某个站点返回停靠的公交线路
    【单行站、方向、同名站点按ID分组】 
-->
<template>
    <div>
        <h4>站点停靠线路查询</h4>
        <SearchBar placeholder="请输入要查询的站点名称，如“锦城广场”" :getInfo="getInfo"/>
        <!-- 展示信息 -->
        <div class="msg"></div>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
    name: 'StatLines',
    components: {SearchBar},
    data() {
        return {
            station:''
        }
    },
    methods: {
        getInfo(info){
            this.station = info;
            console.log('所有站点查询收到！'+this.station);
        }
    }
}
</script>

<style>

</style>