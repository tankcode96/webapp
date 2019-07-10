<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-left'
    }
  },
  // 监听路由的路径，可以通过不同的路径去选择不同的切换效果
  watch: {
    $route (to, from) {
      if (to.meta.index > from.meta.index) {  //外 => 内
        this.transitionName = 'slide-left'
      } else if (to.meta.index < from.meta.index) {   //内 => 外
        this.transitionName = 'slide-right'
      } else {   //同级 无过渡效果
        this.transitionName = ''
      }
    }
  }
}
</script>

<style lang="scss">
@import './common/style/reset.scss';
@import './common/style/mixins.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
