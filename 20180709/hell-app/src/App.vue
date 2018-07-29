
<template>
  <div id="app">
    <mt-header fixed title="外卖点餐系统">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header>
    <!-- 渲染组件页面的地方／路由的出口 -->
    <router-view class="container"></router-view>
  </div>
</template>

<script>
  export default {
    name:'app'
  }
</script>

<style>
  .container {
    margin-top: 40px;
  }
</style>
