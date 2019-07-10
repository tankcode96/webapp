<template>
  <div class="home">
    <SearchBar />
    <Carousel :list="list" :basis="carouselBasis" />
  </div>
</template>

<script>
import { SearchBar, Carousel } from '../../components'
export default {
  name: 'home',

  data () {
    return {
      list: [
        {
          url: 'banner1.jpg',
          id: 1
        },
        {
          url: 'banner2.jpg',
          id: 2
        },
        {
          url: 'banner3.jpg',
          id: 3
        }
      ],
      carouselBasis: {
        width: '10rem',
        height: '4.88rem',
        auto: true,
        duration: 300,
        time: 3000
      }
    }
  },

  components: {
    SearchBar,
    Carousel
  }
}
</script>

<style scoped lang="scss">

</style>
