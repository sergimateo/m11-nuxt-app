<template>
  <div>
    <v-row justify="space-around" class="pb-4"
      ><h1>{{ headername }} Section</h1></v-row
    >

    <!-- Esto de poner un v-btn de texto es solo por navegabilidad
      habria que hacerlo mejor -->
    <!-- <v-row justify="space-around" class="pb-4">
     <v-btn text>
        <nuxt-link
          v-slot="{ navigate }"
          :to="headerlink"
          custom
          style="cursor: pointer"
        >
          <span role="link" @click="navigate">
            <h1>{{ headername }} Section</h1></span
          >
        </nuxt-link></v-btn
      >
    </v-row> -->
    <!-- <div class="text-center pb-8">
      <v-btn class="info" rounded small @click="$router.go(-1)">
        Back
        <v-icon small class="pl-2"
          >mdi-arrow-left-thin-circle-outline</v-icon
        ></v-btn
      >
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  props: { headername: { default: 'header', type: String } },
  computed: {
    headerlink() {
      return '/' + this.$props.headername.toLowerCase()
    },
  },

  // eslint-disable-next-line vue/require-prop-types

  methods: {},
}
</script>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #0fc100
</style>
