<template>
    <div class="comp">
        <h2>分析查询</h2>
        <div class="most-lines-stat">
            <h4>停靠路线最多的站点</h4>
            <!-- 展示信息 -->
            <div class="msg"></div>
        </div><hr>

        <div class="stat">
            <h4>各类站点数量</h4>
            <!-- 展示信息 -->
            <div class="msg"></div>
        </div><hr>

        <div class="line">
            <h4>各类线路数量</h4>
            <!-- 展示信息 -->
            <div class="msg"></div>
        </div><hr>

        <div class="dup-stat">
            <h4>重复站点</h4>
            <div class="search-header">
                <input type="text" placeholder="请输入要查询的线路1名称，如“15路”" v-model="dupLine1"/>
                <input type="text" placeholder="请输入要查询的线路2名称，如“30路”" v-model="dupLine2"/>
                <button class="btn btnSearch" @click="searchDup"><span>查询 </span></button>
            </div>
            <!-- 展示信息 -->
            <div class="msg"></div>
        </div><hr>

        <div class="change-line">
            <h4>换乘线路数量</h4>
            <SearchBar placeholder="请输入要查询的线路名称，如“30路”" :getInfo="getChangeInfo"/>
            <!-- 展示信息 -->
            <div class="msg"></div>
        </div><hr>

        <div class="most-lines-btw">
            <h4>连接两个站台间线路最多的站台</h4>
            <!-- 展示信息 -->
            <div class="msg"></div>
        </div><hr>

        <div class="most-stat-line">
            <h4>线路-站点数量降序</h4>
            <!-- 展示信息 -->
            <div class="msg"></div>
        </div><hr>

        <div class="time-line">
            <h4>线路-运行时间</h4>
            <!-- 展示信息 -->
            <div class="msg"></div>
        </div><hr>

        <div class="dup-line">
            <h4>线路重复系数</h4>
            <SearchBar placeholder="请输入要查询的线路名称，如“30路”" :getInfo="getDupInfo"/>
            <!-- 展示信息 -->
            <div class="msg"></div>
        </div><hr>
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
export default {
    name: 'Analysis',
    components:{SearchBar},
    data() {
        return {
            //换乘线路
            changeLine:'',
            //两条线路间重复站点
            dupLine1:'',
            dupLine2:'',
            //重复系数
            dupLine:'',
        }
    },
    methods: {
        searchDup(){
            console.log(this.dupLine1);
            console.log(this.dupLine2);
        },
        getChangeInfo(info){
            this.changeLine = info;
            console.log('changeinfo收到！'+this.changeLine);
        },
        getDupInfo(info){
            this.dupLine = info;
            console.log('dupinfo收到！'+this.dupLine);
        },
    }
}
</script>

<style scoped>
.search-header input {
		width: 300px;
		height: 29px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
        margin-left: 5px;
        margin-top: 3px;
	}

	.search-header input:focus {
		outline: none;
		border-color: rgba(82, 169, 236, 0.349);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}

    .btnSearch {
        background-color: white;
        color: black;
        border: 2px solid #e7e7e7;
    }

    .btnSearch:hover {background-color: #e7e7e7;}
</style>