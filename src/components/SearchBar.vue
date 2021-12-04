<!-- 输入框组件 -->
<template>
    <div class="search-header">
        <input type="text" :placeholder="placeholder" v-model="info" @keyup.enter="search"/>
        <button class="btn btnSearch" @click="search"><span>查询 </span></button>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    props: ['getInfo','placeholder'],   //接收父组件传入的参数：getInfo输入信息处理，placeholder默认提示信息
    data() {
        return {
            info:'',    //输入框输入的信息
        }
    },
    methods: {
        search(){
            if(!this.info.trim()) return alert('输入不能为空噢o(*￣▽￣*)');
            //console.log(this.info);
            this.getInfo(this.info);    //调用父组件传入的方法
        }
    }
}
</script>

<style scoped>
	.search-header input {
		width: 560px;
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