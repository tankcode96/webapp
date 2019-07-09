<template>
  <div class="carousel" :style="{width: basis.width, height: basis.height}">
    <div
      class="carousel-box"
      :class="runClass"
      :style="carouselStyle"
      @touchstart.stop.prevent="watchTouchStart($event)"
      @touchmove.stop.prevent="watchTouchMove($event)"
      @touchend.stop.prevent="watchTouchEnd($event)">
      <template  v-for="(item, i) in carouselList">
        <router-link class="carousel-item" tag="div" :to="`/goods/${item.id}`" :key="i">
          <img class="carousel-img" :src="require(`../../assets/images/${item.url}`)" :style="{width: basis.width, height: basis.height}" v-bind:key="i" />
        </router-link>
      </template>
    </div>
    <ul class="point-box">
      <template v-for="(item, i) in list">
        <li class="point-item" :class="parseInt(i)+1 === currIndex ? 'active' : ''" :key="i"></li>
      </template>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Carousel',

    time: {
      removeClassTimer: null
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
        currIndex: 0, // 当前展示的图片index
        carouselStyle: 0,  // 轮播图box的style
        runClass: '', // 轮播时的类
        startX: 0,  // 起始位置
        currentX: 0,  // 当前位置
        endX: 0,  // 离开位置
        time: { // 定时器
          removeClassTimer: null,
          autoRunTimer: null
        },
        busy: false,  // 是否正在切换图片
      }
    },

    created () {
      if (this.list && this.list.length > 1) {
        this.currIndex = 1
        this.carouselStyle = {left: `${- (parseInt(this.basis.width) * this.currIndex)}rem`}
      }
    },

    mounted () {
      this.autoRun()
      console.log(this.list);
      
    },

    computed: {
      /**
       * 构建轮播数组
       */
      carouselList () {
        let carouselList = []
        if (this.list && this.list.length > 1) {
          const len = this.list.length
          const firstItem = this.list[0]
          const lastItem = this.list[len - 1]
          carouselList = [lastItem].concat(this.list, [firstItem])
        }
        return carouselList
      }
    },

    watch: {
      /**
       * 监听手指移动，图片跟随手指位置移动
       */
      currentX () {
        if (this.list && this.list.length < 2) return
        const html = document.getElementsByTagName('html')[0]
        const fontSize = parseInt(html.style.fontSize)
        const distance = this.currentX - this.startX
        this.carouselStyle = {
          left: `${distance / fontSize - (parseInt(this.basis.width) * this.currIndex)}rem`
        }
      },

      /**
       * 监听当前图片index的变化
       */
      currIndex () {
        this.carouselStyle = {
          left: `${-(parseInt(this.basis.width) * this.currIndex)}rem`
        }
      }
    },

    methods: {
      /**
       * 开始自动轮播
       */
      autoRun () {
        if (this.list && this.list.length < 2) return
        this.clearTimer(this.time.autoRunTimer)
        const autoRunTimer = setInterval(() => {
          if (this.currIndex === this.carouselList.length - 2) {
            this.runClass = ''
            this.currIndex = 0
          }
          setTimeout(() => {
            this.runClass = 'move'
            this.currIndex += 1
          }, 0)
        }, this.basis.time)
        this.time.autoRunTimer = autoRunTimer
      },

      /**
       * 记录触摸开始位置
       */
      watchTouchStart (e) {
        if (e.touches.length === 1) {
          this.startX = e.touches[0].clientX
          this.startTime = e.timeStamp
          this.runClass = ''
          this.clearTimer(this.time.autoRunTimer)
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
        this.endX = e.changedTouches[0].clientX
        this.endTime = e.timeStamp
        const speed = this.watchMoveSpeed()
        
        this.runClass = 'move'
        if (this.list && this.list.length > 1 && !this.busy) this.switchCarouselItem(speed)
      },

      /**
       * 计算手指移动速度
       */
      watchMoveSpeed () {
        return Math.abs((this.endX - this.startX) / (this.endTime - this.startTime))
      },

      /**
       * 切换图片
       * @param {number} speed
       */
      switchCarouselItem (speed = 0) {
        const html = document.getElementsByTagName('html')[0]
        const fontSize = parseInt(html.style.fontSize)
        const distance = (this.endX - this.startX)
        this.busy = true
        if (speed > 0.3 || Math.abs(distance / fontSize) > 8.5) {
          this.currIndex += distance > 0 ? -1 : 1
        } else {
          this.carouselStyle = {
            left: `${-(parseInt(this.basis.width) * this.currIndex)}rem`
          }
        }
        this.setRunTimeOut()
      },

      /**
       * 定时清理掉runClass
       */
      setRunTimeOut () {
        this.clearTimer(this.time.removeClassTimer)
        const removeClassTimer = setTimeout(() => {
          if (this.currIndex === 0) {
            this.currIndex = this.carouselList.length - 2
          } else if (this.currIndex === this.carouselList.length - 1) {
            this.currIndex = 1
          }
          this.runClass = ''
          this.busy = false
          this.autoRun()
        }, this.basis.duration);
        this.time.removeClassTimer = removeClassTimer
      },

      /**
       * 清除定时器
       * @param {object} timer
       */
      clearTimer (timer) {
        timer && clearTimeout(timer)
      }
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

  .move {
    transition: left ease-in-out 300ms;
  }

  .point-box {
    @include set-flex;
    @include set-flex-align;
    @include set-size(10rem, 0.3rem);
    position: absolute;
    bottom: 0.2rem;
    left: 0;

    .point-item {
      @include set-size(0.18rem, 0.18rem);
      margin: 0 0.05rem;
      box-sizing: border-box;
      background: rgba($color: #bebebe, $alpha: .4);
      border-radius: 50%;
      border: 1px solid rgba($color: #bebebe, $alpha: .6);

      &.active {
      background: rgba($color: #000000, $alpha: .5);
      }
    }
  }
}
</style>
