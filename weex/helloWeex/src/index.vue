<template>
    <div class="wrapper">
        <div class="nav">
          <text @click="jump('Test1')">主页</text>
          <text @click="jump('Test2')">我的</text>
        </div>
        <!-- 定义路由模板视图 这个是用来加载组件的-->
        <router-view class="template"></router-view>
    </div>
</template>

<style scoped>
.wrapper { 
    align-items: center; 
    margin-top: 40px; 
}
.nav{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width:750px;
    height: 88px;
}
.template{ 
    position:absolute;
    top: 128px;
    bottom: 0px;
    left: 0px;
    right: 0px;
}
.nav-item-selected{
    color:yellowgreen;
}
.nav-item-normal{
    color:black;
}
</style>
<script>
export default {
  data() {
    return {
      selectedPath: 'Test1'
    }
  },
    methods: {
        // 单击按钮跳转到指定的路径
        jump: function (e) {
            this.$router.push(e);
            this.selectedPath = e;
        }
    }
}
</script>
