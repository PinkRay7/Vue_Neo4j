<!-- 基本信息查询 -->
<template>
    <div class="comp">
        <h2>基本信息查询</h2>
        <!-- 搜索框组件 -->
        <SearchBar placeholder="请输入要查询的线路名称，如“30路”" :getInfo="getInfo"/>
        <!-- 展示信息 -->
        <div class="msg">
            <!-- 展示信息列表 -->
            <ul class="list-group" v-show="information.length">
                <li class="list-group-item" v-for="i in information" :key="i.login">
                    {{i.login}}
                    <!-- 显示起点站/终点站的小标签 -->
                    <span class="list-span">起点站</span>
                </li>
            </ul>
            <!-- 展示欢迎词 -->
            <div v-show="isFirst">
                <h4>这里是基本信息查询，输入线路可以查看线路所有信息噢！</h4>
            </div>
            <!-- 展示加载中 -->
            <div v-show="isLoading">
                <h4>加载中...请稍候.....</h4>
            </div>            
            <!-- 展示错误信息-->
            <div v-show="errMsg">
                <h4>{{errMsg}}</h4>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
//import '@/assets/bootstrap.min.css'
export default {
    name: 'BasicInfo',
    components:{
        SearchBar,
    },
    data() {
        return {
            line:'',    //线路名称
            information:[], //信息
            isFirst:true,
            isLoading:false,
            errMsg:'',
        }
    },
    methods: {
        getInfo(info){
            this.isFirst = false;
            this.isLoading = true;
            this.line = info;
            console.log('BasicInfo收到！'+this.line);
            //console.log(this);
            this.$axios.get(`https://api.github.com/search/users?q=${this.line}`).then(
                response => {
                    console.log('请求成功');
                    this.isLoading = false;
                    this.information = response.data.items;
                    console.log(response.data);
                },
                error => {
                    console.log('请求出错',error.message);
                    this.errMsg = error.message;
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
    padding-left: 6px;
    padding-right: 6px;
    /* padding-top: 2px;
    padding-bottom: 2px; */
    margin: 4px;
    font-size: 10px;
    font-weight: bold;
}
</style>