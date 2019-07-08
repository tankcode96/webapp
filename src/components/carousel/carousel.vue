<template>
  <div class="carousel" :style="{width: basis.width, height: basis.height}">
    <div
      class="carousel-box"
      :style="carouselStyle"
      @touchstart.stop.prevent="watchTouchStart($event)"
      @touchmove.stop.prevent="watchTouchMove($event)"
      @touchend.stop.prevent="watchTouchEnd($event)">
      <template  v-for="(item, i) in carouselList">
        <router-link class="carousel-item" tag="div" :to="`/goods/${item.id}`" v-bind:key="i">
          <img class="carousel-img" :src="require(`../../assets/images/${item.url}`)" :style="{width: basis.width, height: basis.height}" v-bind:key="i" />
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Carousel',

    time: {

    },

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
        carouselStyle: 0,  // 轮播图box的style
        startX: 0,  // 起始位置
        currentX: 0,  // 当前位置
        endX: 0,  // 离开位置
        left: 0
      }
    },

    created () {
      this.carouselStyle = {left: `${- (parseInt(this.basis.width) * this.currIndex)}rem`}
    },

    mounted () {
    },

    computed: {

      /**
       * 构建轮播数组
       */
      carouselList () {
        const carouselList = this.list
        if (this.list && this.list.length > 0) {
          const len = this.list.length
          carouselList.unshift(this.list[len - 1])
        }
        return carouselList
      }
    },

    watch: {
      currentX () {
        const html = document.getElementsByTagName('html')[0]
        const distance = this.currentX - this.startX
        this.carouselStyle = {
          left: `${distance / parseInt(html.style.fontSize) - (parseInt(this.basis.width) * this.currIndex)}rem`
        }
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
        if (e.touches.length === 1) {
          this.startX = e.touches[0].clientX
          this.startTime = e.timeStamp
        }
      },

      /**
       * 记录触摸移动位置
       */
      watchTouchMove (e) {
        if (e.touches.length === 1) {
          this.currentX = e.touches[0].clientX
        }
      },

      /**
       * 记录触摸离开位置
       */
      watchTouchEnd (e) {
        if (e.touches.length === 1) {
          this.endX = e.touches[0].clientX
          this.endTime = e.timeStamp
          const speed = Math.abs((this.endX - this.startX) / (this.endTime - this.startTime))
          // if () {}
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
