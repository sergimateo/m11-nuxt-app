<template>
  <v-container fluid class="albums">
    <MainHeader :headername="headername"></MainHeader>
    <transition
      appear
      name="container-animation"
      enter-active-class="animate__animated animate__fadeIn animate__fast"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
      ><nuxt />
    </transition>
  </v-container>
</template>

<script>
import MainHeader from '../components/MainHeader.vue'

export default {
  name: 'Series',
  components: { MainHeader },
  data() {
    return {
      headername: 'Series',
    }
  },
  computed: {},
}
</script>
<style scoped>
.album-title {
  word-break: normal;
  text-align: center;
}
</style>
