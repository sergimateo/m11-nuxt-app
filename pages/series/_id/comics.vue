<template>
  <div>
    <v-row justify="center" class="mt-4"> <h2>The Comics</h2></v-row>
    <v-row justify="center" class="mt-4">
      <v-col v-for="item in comics" :key="item.id" cols="auto">
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
  name: 'ComicsBySerieIndex',
  data() {
    return {}
  },

  computed: {
    ...mapGetters({
      comics: 'comicsBySerieGetter',
    }),
  },
  beforeCreate() {},

  methods: {},
}
</script>
