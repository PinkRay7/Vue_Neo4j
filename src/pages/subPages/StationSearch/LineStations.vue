<!-- 沿途站点查询
    某条具体线路两个站台之间的信息
    【方向（上下行）、沿路站点、运行时长（班次信息计算得）】
-->
<template>
    <div>
        <h4>沿途站点查询</h4>
        <div class="search-header">
            <input type="text" placeholder="请输入要查询的线路名称，如“30路”" v-model="line"/>
            <input type="text" placeholder="请输入要查询的起点站名称，如“大悦城”" v-model="stationStart"/>
            <input type="text" placeholder="请输入要查询的到达站名称，如“小吃街”" v-model="stationEnd"/>
            <button class="btn btnSearch" @click="search"><span>查询 </span></button>
        </div>
        <!-- 展示信息 -->
        <div class="msg"></div>
    </div>
</template>

<script>
//import SearchBar from '@/components/SearchBar.vue'
export default {
    name: 'LineStations',
    //components: {SearchBar},
    data() {
        return {
            line:'',        //线路名称
            stationStart:'',//起始站
            stationEnd: '', //到达站
        }
    },
    methods: {
        // getInfo(info){
        //     this.station = info;
        //     console.log('站点停靠线路查询收到！'+this.station);
        // }
        search(){
            console.log(this.line);
            console.log(this.stationStart);
            console.log(this.stationEnd);
        }
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