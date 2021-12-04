<template>
    <div>
      <h4>删除线路</h4>
      <SearchBar placeholder="请输入要更改的线路名称，如“30路”" :getInfo="getInfo"/>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
    name: 'DeleteLine',
    components: {SearchBar},
    data() {
        return {
            line:''
        }
    },
    methods: {
        getInfo(info){
            this.line = info;
            console.log('delete收到！'+this.line);
        }
    }
}
</script>

<style>

</style>