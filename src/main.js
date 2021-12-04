import Vue from 'vue' //引入vue
import App from './App.vue'//引入App组件，它是所有组件的父组件
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'

// Main JS (in UMD format)
//import VueTimepicker from 'vue2-timepicker'

// CSS
import 'vue2-timepicker/dist/VueTimepicker.css'


Vue.config.productionTip = false//关闭Vue生产提示
// Vue.prototype.$axios = axios
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
//Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs

Vue.use(VueRouter)
//Vue.use(axios)

//创建vue对象vm
new Vue({
  el:'#app',
  render: h => h(App),
  router:router
})
/*
  整个项目的入口文件  
*/