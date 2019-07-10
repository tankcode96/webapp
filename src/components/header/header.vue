<template>
  <div class="header">
    <div class="wipper">
      <div class="menus">
        <img class="menus-icon" src="../../assets/images/icons/ego-menu.png" alt="淘">
      </div>
      <div class="input-area">
        <img class="logo" src="../../assets/images/icons/icon-tao.png" alt="淘">
      </div>
      <div class="search-btn">登录</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../common/style/reset.scss';
@import '../../common/style/mixins.scss';

.header {
  @include set-size(100%, 1.33rem);
  position: fixed;
  padding: 0 0.4rem;
  z-index: 10;

  &.set-seat {
    position: relative;
  }
  
  .wipper {
    @include set-flex;
    @include set-flex-align($alignItem: center, $justifyContent: space-between);
    @include set-size(100%, 1.33rem);

    .menus {

      .menus-icon {
        @include set-size(0.75rem, 0.69rem);
      }
    }

    .input-area {
      @include set-size(6.8rem, 0.8rem);
      
      .logo {
        @include set-size(1.1rem, 1.1rem);
      }
    }
  }
}
</style>

