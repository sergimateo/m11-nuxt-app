<template>
  <v-container fluid>
    <MainHeader :headername="headername"></MainHeader>
    <transition
      appear
      name="container-animation"
      enter-active-class="animate__animated animate__fadeIn animate__fast"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
    >
      <nuxt />
    </transition>
  </v-container>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'

export default {
  name: 'Characters',
  components: { MainHeader },
  data() {
    return {
      headername: 'Characters',
    }
  },
}
</script>
