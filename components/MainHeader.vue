<template>
  <div>
    <v-row justify="space-around" class="pb-4"
      ><h1>{{ headername }} Section</h1></v-row
    >
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

  methods: {},
}
</script>
