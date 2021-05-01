<template>
  <div>
    <v-row justify="center" class="mt-4"> <h2>The Events</h2></v-row>
    <v-row justify="center" class="mt-4">
      <v-col v-for="item in events" :key="item.id" cols="auto">
        <v-card
          shaped
          class="d-flex flex-column mx-auto align-content-center"
          elevation="3"
          width="300"
        >
          <v-img
            width="300"
            :src="
              item.thumbnail.path +
              '/portrait_xlarge.' +
              item.thumbnail.extension
            "
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'EventsByCharacterIndex',
  data() {
    return {}
  },

  computed: {
    ...mapGetters({
      events: 'eventsByCharacterGetter',
    }),
  },
  beforeCreate() {},

  methods: {},
}
</script>

<style scoped>
/* no hace falta, pero por si llegase un nombre de usuario demasiado
 largo, hacerle un word-break */
.user-title {
  word-break: normal;
  text-align: center;
}
</style>
