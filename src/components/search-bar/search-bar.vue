<template>
  <div class="search-bar">
    <div class="menus"></div>
    <div class="input-area">
      <input type="text" v-model="searchText" />
    </div>
    <div class="search-btn">搜索</div>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',

    data () {
      return {
        searchText: '',  // 搜索内容
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
@import '../../common/style/reset.scss';
@import '../../common/style/mixins.scss';

.search-bar {
  @include set-flex;
  @include set-flex-align($alignItem: center, $justifyContent: space-between);
  @include set-size(100%, 1.33rem);
  padding: 0 0.4rem;

}
</style>
