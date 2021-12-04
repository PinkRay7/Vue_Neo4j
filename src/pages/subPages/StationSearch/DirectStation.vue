<!-- 直达站点查询
    两个站点之间是否可以直达
-->
<template>
    <div>
      <h4>直达站点查询</h4>
        <div class="search-header">
            <input type="text" placeholder="请输入要查询的起点站名称，如“大悦城”" v-model="stationStart"/>
            <input type="text" placeholder="请输入要查询的到达站名称，如“小吃街”" v-model="stationEnd"/>
            <button class="btn btnSearch" @click="search"><span>查询 </span></button>
        </div>
        <!-- 展示信息 -->
        <div class="msg"></div>
    </div>
</template>

<script>
export default {
    name: 'DirectStation',
    data() {
        return {
            stationStart:'',    //起点站
            stationEnd: '',     //到达站
        }
    },
    methods: {
        // getInfo(info){
        //     this.station = info;
        //     console.log('站点停靠线路查询收到！'+this.station);
        // }
        search(){
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