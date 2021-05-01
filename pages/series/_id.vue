<template>
  <v-row justify="center" class="pt-3">
    <v-col
      ><v-row justify="space-around" class="mb-4">
        <h2 class="mx-auto">Serie details</h2>
      </v-row>
      <v-card
        shaped
        class="mx-auto primary lighten-2"
        elevation="3"
        width="340"
      >
        <v-card-title class="primary accent-1">
          <div class="mx-auto">{{ serie.title }}</div>
        </v-card-title>
        <v-img
          width="340"
          :src="
            serie.thumbnail.path +
            '/landscape_xlarge.' +
            serie.thumbnail.extension
          "
        ></v-img>
        <v-card-actions>
          <v-btn text class="px-2" @click="show = !show"> More details </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-card-actions justify="space-around">
              <v-btn
                class="mx-auto info"
                small
                rounded
                @click="fetchCharacters(serie.id)"
              >
                View characters
              </v-btn>
              <v-btn
                class="mx-auto info"
                small
                rounded
                @click="fetchComics(serie.id)"
              >
                View comics
              </v-btn>
            </v-card-actions>
          </div>
        </v-expand-transition>
      </v-card>

      <NuxtChild />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SerieDetails',
  data() {
    return {
      title: 'Serie Details',
      show: false,
    }
  },
  computed: {
    ...mapGetters({
      series: 'seriesGetter',
    }),
    serie() {
      return this.series.find((serie) => serie.id === this.$route.params.id)
    },
  },
  methods: {
    fetchComics(e) {
      this.$store.dispatch('loadComicsBySerie', e)

      this.$router.push({
        name: 'series-id-comics',
        params: { id: e },
      })
    },

    fetchCharacters(e) {
      this.$store.dispatch('loadCharactersBySerie', e)
      this.$router.push({
        name: 'series-id-characters',
        params: { id: e },
      })
    },
  },
}
</script>
