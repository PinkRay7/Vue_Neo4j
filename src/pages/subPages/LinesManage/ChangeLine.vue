<template>
    <div>
      <h4>更改线路</h4>
      <SearchBar placeholder="请输入要更改的线路名称，如“30路”" :getInfo="getInfo"/>
      <ul>
        <li></li>
      </ul>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
    name: 'ChangeLine',
    components: {SearchBar},
    data() {
        return {
            line:''
        }
    },
    methods: {
        getInfo(info){
            this.line = info;
            console.log('change收到！'+this.line);
        }
    }
}
</script>

<style>

</style>