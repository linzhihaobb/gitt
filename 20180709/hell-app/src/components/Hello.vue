<template>
  <div>
      <mt-cell title="番茄炒蛋">
        <img class="goods-img" src="http://site.meishij.net/r/21/119/2654771/a2654771_48444.jpg" slot="icon">
      </mt-cell>
      <!-- 按钮 -->
      <mt-button size="large" type="danger" @click="popToast">弹出Toast</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui"; // 引入提示框信息
// 默认配置
export default {
  methods: {
    popToast: function() {
      Toast({
        message: "我是一个提示",
        iconClass: "icon icon-success"
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .goods-img {
    width: 180px;
    max-height: 160px;
    padding: 10px;
  }
</style>
