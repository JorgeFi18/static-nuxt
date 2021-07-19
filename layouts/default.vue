<template>
  <div>
    <Header />
    <div class="home">
      <Nuxt />
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
