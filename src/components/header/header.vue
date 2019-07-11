<template>
  <div class="header">
    <div class="wipper">
      <div class="menus">
        <img class="menus-icon" src="../../assets/images/icons/icon-menu.png" alt="菜单" />
      </div>
      <div class="input-area">
        <div class="logo-box">
          <img class="logo-icon" src="../../assets/images/icons/icon-tao.png" alt="淘" />
        </div>
        <div class="search-box">
          <img class="search-icon" src="../../assets/images/icons/icon-search.png" alt="搜索" />
          <p class="search-text">家电返场同价11.11</p>
        </div>
      </div>
      <div class="search-btn">登录</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "../../common/style/reset.scss";
@import "../../common/style/mixins.scss";

.header {
  @include set-size(100%, 100px);
  position: fixed;
  color: white;
  font-size: 24px;
  z-index: 10;

  &.set-seat {
    position: relative;
  }

  .wipper {
    @include set-flex;
    @include set-flex-align($alignItem: center, $justifyContent: space-between);
    @include set-size(100%, 100%);

    .menus {
      padding: 0 30px;

      .menus-icon {
        @include set-size(52px, 52px);
      }
    }

    .input-area {
      @include set-flex;
      @include set-flex-align($alignItem: center, $justifyContent: flex-start);
      @include set-size(auto, 60px);
      flex-grow: 1;
      background: white;
      border-radius: 30px;

      .logo-box {
        border-right: 1px solid #666666;
        padding: 0 20px;

        .logo-icon {
          @include set-size(40px, 40px);
        }
      }

      .search-box {
        @include set-flex; 
        @include set-flex-align(
          $alignItem: center,
          $justifyContent: flex-start
        );
        .search-icon {
          @include set-size(40px, 40px);
          margin: 0 20px;
        }

        .search-text {
          @include set-size($width: 320px);
          white-space: nowrap;
          color: #666666;
          font-size: 24px;
          text-align: left;
          overflow: hidden;
        }
      }
    }

    .search-btn {
      font-size: 28px;
      padding: 0 30px;
    }
  }
}
</style>

