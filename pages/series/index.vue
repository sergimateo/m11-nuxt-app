<template>
  <v-row justify="center">
    <v-col v-for="item in series" :key="item.id" cols="auto">
      <v-card
        shaped
        class="d-flex flex-column mx-auto align-content-center"
        elevation="3"
        width="340"
        height="396"
      >
        <v-card-title class="primary accent-1 py-1"
          ><div class="mx-auto d-flex align-center serie-title">
            <div>{{ item.title }}</div>
          </div>
        </v-card-title>
        <v-img
          width="340"
          height="252"
          :src="
            item.thumbnail.path + '/standard_xlarge.' + item.thumbnail.extension
          "
        ></v-img>
        <v-card-actions class="primary lighten-2" justify="space-around">
          <v-btn
            class="mx-auto info"
            small
            rounded
            @click="handleViewDetails(item.id)"
          >
            View details
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SeriesIndex',

  computed: {
    ...mapGetters({
      series: 'seriesGetter',
    }),
  },
  beforeCreate() {
    this.$store.dispatch('loadSeries')
  },

  methods: {
    handleViewDetails(e) {
      const viewedSerie = this.series.find((item) => item.id === e)

      this.$store.dispatch('serieViewed', viewedSerie)
      this.$router.push({
        name: 'series-id',
        params: { id: viewedSerie.id },
      })
    },
  },
}
</script>
<style scoped>
.serie-title {
  word-break: normal;
  font-size: min(max(1rem, 4vw), 22px);
  text-align: center;
  height: 68px;
}
</style>
