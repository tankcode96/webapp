<template>
  <div class="home">
    <Header />
    <Carousel :list="list" :basis="carouselBasis" />
  </div>
</template>

<script>
import { Header, Carousel } from "../../components";
import { homeData } from '../../common/js/api-http'
export default {
  name: "home",

  data() {
    return {
      list: [
        {
          url: "banner1.jpg",
          id: 1
        },
        {
          url: "banner2.jpg",
          id: 2
        },
        {
          url: "banner3.jpg",
          id: 3
        }
      ],
      carouselBasis: {
        width: 375,
        height: 183,
        auto: true,
        duration: 300,
        time: 3000
      }
    };
  },

  components: {
    Header,
    Carousel
  },
  
  mounted() {
    homeData().then(res => {
      console.log(res)
    })
  }
};
</script>

<style scoped lang="scss">
</style>
