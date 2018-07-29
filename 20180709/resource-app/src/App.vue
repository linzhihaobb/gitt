<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-8 col-xs-offset-2">
        <div class="page-header">
          <h2>豆瓣电影排行榜Top250</h2>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link to="/home" class="list-group-item">首页</router-link>
          <router-link to="/about" class="list-group-item">关于</router-link>
        </div>
      </div>

      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 路由的出口 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'app'
}
</script>

<style>
  body {
    background-color: darkgray;
    color: #2c3e50;
  }
</style>


