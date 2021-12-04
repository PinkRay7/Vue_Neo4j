<!-- 全部站点查询
    搜索某条公交线路返回全部站点
    【上下行、特殊站点（起点、终点、地铁、单行）标识】
-->
<template>
    <div class="sub-view">
      <SearchBar placeholder="请输入要查询的线路名称，如“30路”" :getInfo="getInfo"/>
      <div class="msg">
            <ul class="list-group">
                <li class="list-group-item" v-for="i in information" :key="i.login">
                    {{i.login}}
                    <span class="list-span">{{i.login}}</span>
                </li>
            </ul>
      </div>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
    name: 'AllStations',
    components: {SearchBar},
    data() {
        return {
            line:'',    //线路名称
            information:[],
        }
    },
    methods: {
        getInfo(info){
            this.line = info;
            console.log('所有站点查询收到！'+this.line);
            this.$axios.get(`https://api.github.com/search/users?q=${this.line}`).then(
                response => {
                    console.log('请求成功');
                    this.information = response.data.items;
                    console.log(response.data);
                },
                error => {
                    console.log('请求出错',error.message)
                }
            )
        }
    }
}
</script>

<style scoped>
.list-group-item {
    border: thin solid #f1f1f1;
    border-radius: 5px;
    padding: 14px;
    font-size: 15px;
    font-weight: 500;
    margin-left: -40px;
    max-width: 800px;
}
.list-span {
    border-radius: 16px;
    background-color: aquamarine;
    float: right;
    padding-left: 4px;
    padding-right: 4px;
    margin: 4px;
    font-size: 10px;
    font-weight: bold;
}
 
</style>