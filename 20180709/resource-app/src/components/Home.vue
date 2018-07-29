<template>
  <div class="home">
    <h3>{{msg}}</h3>
    <ul>
      <li v-for="item in items">
          <div><img :src="item.images.small"></div>
          <div>
            <div><router-link to="/home">{{item.title}}</router-link></div>
            <div>年份：{{item.year}}</div>
            <div>类型：{{item.subtype}}</div>
          </div>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
// 默认配置
export default {
  data() {
    return {
      msg:'电影列表',
      items:[
        {
          images:{
            small:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1587165663,3136702718&fm=23&gp=0.jpg'
          },
          title:'我不是药神',
          year:'2018',
          subtype:'悬疑／励志／喜剧'
        },{
          images:{
            small:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1587165663,3136702718&fm=23&gp=0.jpg'
          },
          title:'我不是药神',
          year:'2018',
          subtype:'悬疑／励志／喜剧'
        },{
          images:{
            small:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1587165663,3136702718&fm=23&gp=0.jpg'
          },
          title:'我不是药神',
          year:'2018',
          subtype:'悬疑／励志／喜剧'
        },{
          images:{
            small:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1587165663,3136702718&fm=23&gp=0.jpg'
          },
          title:'我不是药神',
          year:'2018',
          subtype:'悬疑／励志／喜剧'
        },{
          images:{
            small:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1587165663,3136702718&fm=23&gp=0.jpg'
          },
          title:'我不是药神',
          year:'2018',
          subtype:'悬疑／励志／喜剧'
        },{
          images:{
            small:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1587165663,3136702718&fm=23&gp=0.jpg'
          },
          title:'我不是药神',
          year:'2018',
          subtype:'悬疑／励志／喜剧'
        }
      ]
    }
  },
// 初始化完成之后执行此函数
  created:function() {
    // vue-resourec请求服务器端数据
    this.$http.jsonp(
      'https://api.douban.com/v2/movie/top250?count=20'
      // 当数据请求成功的时候调用then函数
    ).then((res)=> {
      console.log(res)
    },(error) => {
      // console.log(error)
    })
  }
}
</script>

<style>
  li {
    list-style: none;
  }
</style>

