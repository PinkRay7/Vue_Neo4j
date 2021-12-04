<template>
  <div>
      <!-- <div class="header">
        <h1>金河市公交线路系统</h1>
        </div> -->
    <div class="nav-container white">
      <!-- 导航栏 -->
      <div id="nav" class="nav-wrap">
          <div class="main-nav">
              <ul class="nav">
                  <li>
                      <router-link active-class="active" to="/basicInfo">
                      <span class="en">111111</span>
                      <span class="ch">2222</span>
                      <!-- <div class="line"></div> -->
                      <small>「BASICINFO」</small>
                      </router-link>
                  </li>
                  <li>
                      <router-link active-class="active" to="/basicInfo">
                      <span class="en">BASICINFO</span>
                      <span class="ch">基本信息</span>
                      <div class="line"></div>
                      <small>「BASICINFO」</small>
                      </router-link>
                  </li>
                  <li><router-link active-class="active" to="/stationSearch">
                      <span class="en">STATION</span>
                      <span class="ch">站点查询</span>
                      <div class="line"></div>
                      <small>「STATION」</small>
                      </router-link>
                  </li>
                  <li><router-link active-class="active" to="/shiftSearch">
                      <span class="en">SHIFT</span>
                      <span class="ch">班次查询</span>
                      <div class="line"></div>
                      <small>「SHIFT」</small>
                      </router-link>
                  </li>
                  <li><router-link active-class="active" to="/analysis">
                      <span class="en">ANALYSIS</span>
                      <span class="ch">分析查询</span>
                      <div class="line"></div>
                      <small>「ANALYSIS」</small>
                      </router-link>
                  </li>
                  <li><router-link active-class="active" to="/linesManage">
                      <span class="en">LINES</span>
                      <span class="ch">线路管理</span>
                      <div class="line"></div>
                      <small>「LINES」</small>
                      </router-link>
                  </li>
              </ul>
          </div>
      </div>
  </div>
    <div class="panel">
        <div class="panel-body">
        <!-- 指定组件的呈现位置 -->
        <router-view></router-view>
        </div>
    </div>
    <!-- <div class="footer">
        <p>底部区域</p>
    </div> -->
</div>
</template>

<script>

    export default {
      name:'App',

    }
</script>

<style>
/* 头部样式 */
    .header {
    background-color: #f1f1f1;
    padding: 10px;
    text-align: center;
    }

    /* 底部样式 */
    /* .footer {
        background-color: #f1f1f1;
        padding: 10px;
        text-align: center;
    } */
  router-link{
    color: #a6a6a6;
  }
  router-link:link{
    color: #a6a6a6;
  }
  router-link:hover{
    color: #ffffff;
    text-decoration: none;
  }
  router-link:visited{
    color: black;
  }

  body {
      background-size: 100% auto;
      min-height: 100vh;
      overflow: scroll;
      background-repeat: repeat;
      font-family: 微软雅黑;
      height: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      font-size: 16px;
  }
  ul{
      list-style-type: none;
  }

  .nav-container {
      left:0;right:0;top:0;height:70px;
      text-align: center;
      background:0 0;
      z-index:9999;
  }
  .nav-container .menu-wrap .home{
      position:absolute;left:20px;top:0;
  }
  .nav-container .menu-wrap .home a{
      display:block;
      height:70px;
      line-height:70px;
      font-size:20px;
      font-weight:700;
  }
  .nav-wrap .nav a{
      font-weight:700;
      letter-spacing:1px;
  }
  .nav-wrap .nav a small{
      display:none
  }
  .nav-container .menu-wrap .home a,.nav-container .nav-wrap .nav a{
      color:#191919
  }
  .nav-container.white .menu-wrap .home a,.nav-container.white .nav-wrap .main-nav .nav a{
      color:rgb(0, 0, 0)
  }


  .nav-wrap .main-nav{
      margin-top:-70px;
      margin: 0 auto;
      width:2000px;
      /* position: fixed; */
      background-color: white;
  }
  .nav-wrap .main-nav a{
      font-size:15px;
  }
  .nav-wrap .main-nav .nav{
      margin-left:-20px;
      display:flex;
      justify-content:flex-start;
      align-items:center;
  }
  .nav-wrap .main-nav .nav li{
      position:relative;
      height:70px;
      width:130px;
      line-height:70px;
      text-align:center;
      align-items:center;
      box-sizing:border-box;
  }
  .nav-wrap .main-nav .nav li:first-child{
      display:none;
  }
  .nav-wrap .main-nav .nav li span{
      position:absolute;
      display:block;
      width:100%;
      text-align:center;
  }
  .nav-wrap .main-nav .nav li .line{
      position:absolute;
      left:50%;
      bottom:22px;
      content:'';
      width:0;
      height:1px;
      background: #666666;
      transition: 0.5s;
  }
  .nav-container.white .nav-wrap .main-nav .nav li .line{
      background:rgb(0, 0, 0);
  }
  .nav-wrap .main-nav .nav li:hover .line{
      left:20px;
      width:90px;
  }
  .nav-wrap .main-nav .nav li .en,.nav-wrap .main-nav .nav li:hover .ch{
      display:block;
  }
  .nav-wrap .main-nav .nav li .ch,.nav-wrap .main-nav .nav li:hover .en{
      display:none;
  }

.comp{
    margin-top: -30px;
    padding: 38px;
}
.sub-nav {
    position: fixed;
    float:left; width:200px;
    font-weight: bold;
    /* border: black;
    border-style:solid;
    border-width:1px; */
}
.view {
    float:left;
    margin-left: 225px;
    padding: 20px;
    /* border: black;
    border-style:solid;
    border-width:1px; */
}
.sub-header {
    float:left;
    margin-left: 225px;
    /* padding: 20px; */
}
/* .sub-view {
    height: 450px;
    overflow: auto;
} */

.btn {
  display: inline-block;
  border-radius: 4px;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  padding: 4px 7px;
  width: 100px;
  height: 42px;
  transition: all 0.5s;
  cursor: pointer;
  margin-left: 8px;
  margin-top: 4px;
}

.btn span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.btn span:after {
  content: '»';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.btn:hover span {
  padding-right: 25px;
}

.btn:hover span:after {
  opacity: 1;
  right: 0;
}

.msg {
    margin-top: 30px;
}

</style>