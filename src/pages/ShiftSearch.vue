<!-- 班次查询 -->
<template>
    <div class="comp">
        <h2>班次查询</h2>
        <!-- input-info输入信息 -->
        <div class="input-info">
            <!-- 时间选择器插件 -->
            <VueTimepicker class="timePicker" v-model="time"></VueTimepicker>
            <!-- <button @click="showTime">点击显示时间</button> -->
            <!-- 搜索栏插件 -->
            <SearchBar placeholder="请输入要查询的站点名称，如“锦城广场”" :getInfo="getInfo"/>
        </div>
        <!-- 展示信息 -->
        <div class="msg"></div>
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
// The *.vue file with CSS included
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
// NOTE: In some cases, it requires additional workarounds in the bundler's config

export default {
    name: 'ShiftSearch',
    components: {VueTimepicker,SearchBar},
    data() {
        return {
            line:'',    //线路名称
            time:{
                HH:'',  //小时
                mm:'',  //分钟
            },
            //stringTime:''
        }
    },
    methods: {
        getInfo(info){
            this.line = info;
            //if(!this.line.trim()) return alert('输入不能为空噢o(*￣▽￣*)');
            console.log('ShiftSearch收到！'+this.line);
            this.showTime();
        },
        showTime(){
            console.log(this.time.HH+":"+this.time.mm)
        }
    }
}
</script>

<style scoped>
.timePicker {
    margin-top: 8px;
    border-radius: 4px;
}
.search-header {
    position: relative;
}
	.search-header input {
		width: 400px;
		height: 29px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
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