<!-- 添加一条线路 -->
<template>
    <div>
      <h4>添加线路</h4>
      <div class="search-header">
          <input type="text" placeholder="请输入要添加的线路名称，如“30路上行”" v-model="line"/>
          <button class="btn btnSearch" @click="addLine"><span>添加 </span></button>
          <br/>
          <!-- <input type="text" placeholder="请输入要添加的站点名称，如“小吃街”" @blur="inputStat"/>
          <input type="text" placeholder="请输入要添加的站点id，如“12345”" @blur="inputId"/>
          <input type="text" placeholder="请输入要添加的站点英文，如“XiaoChiJie”" @blur="inputEng"/> -->
          <input type="text" placeholder="请输入要添加的站点名称，如“小吃街”" v-model="newStat.name"/>
          <input type="text" placeholder="请输入要添加的站点id，如“12345”" v-model="newStat.id"/>
          <input type="text" placeholder="请输入要添加的站点英文，如“XiaoChiJie”" v-model="newStat.english"/>
          <button class="btn btnSearch" @click="addStation"><span>添加 </span></button>
          <!-- BUG: v-model直接改变了之前的站点啊啊啊啊啊 -->
      </div>
      <ul>
        <li v-for="(stat, index) in station" :key="stat.id">
          {{index}}:{{ stat.id }} {{ stat.name }} {{ stat.english }}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'AddLine',
    data() {
        return {
            line: '',
            newStat:{
                id:'',
                english:'',
                name:'',
            },
            station: [],
        }
    },
    methods: {
        addLine(){
          console.log(this.line);
        },
        // inputStat(e){
        //   this.newStat.name = e.target.value;
        // },
        // inputId(e){
        //   this.newStat.id = e.target.value;
        // },
        // inputEng(e){
        //   this.newStat.english = e.target.value;
        // },
        addStation(){
          const statObj = {id:this.newStat.id,name:this.newStat.name,english:this.newStat.english};
          this.station.push(statObj);
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