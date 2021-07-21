<template>
  <div>
    <Header />
    <div class="home">
      <Nuxt />
      <script type="text/javascript">(function () { var ldk = document.createElement('script'); ldk.type = 'text/javascript'; ldk.async = true; ldk.src='https://s.stagecliengo.com/weboptimizer/60f84c8da0353d00265d366f/60f84c8da0353d00265d3671.js?platform=dashboard'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ldk, s); })();</script>
      <script type="text/javascript">
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-LBEEYVG19E');
      </script>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-image: url('/w03193-small.jpg');
  background-repeat: no-repeat;
  height: calc(100vh - 64px);
  background-size: cover;
  padding: 20px;
  overflow-y: auto;
}
</style>
