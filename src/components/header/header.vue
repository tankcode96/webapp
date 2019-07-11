<template>
  <div class="header">
    <div class="wipper">
      <div class="menus">
        <img class="menus-icon" src="../../assets/images/icons/icon-menu.png" alt="菜单">
      </div>
      <div class="input-area">
        <div class="logo-box">
          <img class="logo-icon" src="../../assets/images/icons/icon-tao.png" alt="淘">
        </div>
        <div class="search-box">
          <img class="search-icon" src="../../assets/images/icons/icon-search.png" alt="搜索">
          <p class="search-text">家电返场同价11.11</p>
        </div>
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
  color: white;
  font-size: 0.32rem;
  z-index: 10;

  &.set-seat {
    position: relative;
  }
  
  .wipper {
    @include set-flex;
    @include set-flex-align($alignItem: center, $justifyContent: space-between);
    @include set-size(100%, 100%);

    .menus {
      padding: 0 0.4rem;

      .menus-icon {
        @include set-size(0.715467rem, 0.666667rem);
      }
    }

    .input-area {
      @include set-flex;
      @include set-flex-align($alignItem: center, $justifyContent: flex-start);
      @include set-size(6.826667rem, 0.746667rem);
      background: white;
      border-radius: 0.373333rem;
      
      .logo-box {
        border-right: 1px solid #666666;
        padding: 0 0.266667rem;

        .logo-icon {
          @include set-size(0.533333rem, 0.533333rem);
        }
      }
      
      .search-box {
        @include set-flex;
        @include set-flex-align($alignItem: center, $justifyContent: flex-start);
        .search-icon {
          @include set-size(0.533333rem,0.533333rem);
          margin: 0 0.266667rem;
        }
        
        .search-text {
          @include set-size($width: 4.266667rem);
          white-space: nowrap;
          color: #666666;
          text-align: left;
          overflow: hidden;
        }
      }
    }
    
    .search-btn {
      padding: 0 0.4rem;
      font-size: 0.381867rem;
    }
  }
}
</style>

