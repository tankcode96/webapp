<template>
  <div class="carousel" :style="{width: basis.width, height: basis.height}">
    <div class="carousel-box" :style="{left: `${- (parseInt(basis.width) * currIndex)}rem`}" @touchStart="watchTouchStart" @touchEnd="watchTouchEnd">
      <template  v-for="(item, i) in carouselList">
        <router-link class="carousel-item" tag="div" :to="`/goods/${item.id}`" v-bind:key="i">
          <img class="carousel-img" :src="require(`../../assets/images/${item.url}`)" :style="{width: basis.width, height: basis.height}" />
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Carousel',

    props: {
      list: {
        type: Array,
        required: true
      },
      basis: {
        type: Object,
        required: false
      }
    },

    data () {
      return {
        currIndex: 1, // 当前展示的图片index
        startX: 0,
        endX: 0,
      }
    },

    created () {

    },

    mounted () {
      
    },

    computed: {
      /**
       * 构建轮播数组
       */
     carouselList : function () {
        const carouselList = this.list
        if (this.list && this.list.length > 0) {
          const len = this.list.length
          carouselList.unshift(this.list[len - 1])
        }
        return carouselList
      }
    },

    methods: {
      /**
       * 开始轮播
       */

      /**
       * 记录触摸开始位置
       */
      watchTouchStart (e) {
        e.preventDefault()
        if (e.touches.length === 1) {
          this.startX = e.touches[0].clientX
        }
      },

      /**
       * 记录触摸离开位置
       */
      watchTouchEnd (e) {
        e.preventDefault()
        if (e.touches.length === 1) {
          this.endX = e.touches[0].clientX
        }
      },

      /**
       * 计算手指移动速度
       */
      watchTouchPoint (e) {
        
      },
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
@import '../../common/style/reset.scss';
@import '../../common/style/mixins.scss';

.carousel {
  position: relative;
  overflow: hidden;

  .carousel-box {
    @include set-flex;
    position: absolute;
    top: 0;
  }
}
</style>
