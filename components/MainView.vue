<template>
  <v-container class="main">
    <v-row class="text-center">
      <v-col class="my-4">
        <h1 class="mb-2">Marvel Heroes Tribute Website</h1>
      </v-col>
      <v-col class="mt-5" cols="12">
        <!-- estas 2 tarjetas podrian ser un componente
       en vez de repetir el codigo 2 veces, se podria refactorizar... -->
        <v-row justify="center">
          <v-col cols="auto">
            <v-card
              shaped
              class="mx-auto primary lighten-2"
              elevation="3"
              width="340"
              min-height="230"
            >
              <v-card-title class="primary accent-1 mb-1"
                ><div class="mx-auto">
                  <h3>Most Visited Characters</h3>
                </div></v-card-title
              >
              <v-card-text
                v-for="item in characters"
                :key="item.id"
                class="py-1"
              >
                <h3>
                  <strong>{{ item.name }}: {{ item.views }}</strong>
                </h3>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="auto">
            <v-card
              shaped
              class="mx-auto primary lighten-2"
              elevation="3"
              width="340"
              min-height="230"
            >
              <v-card-title class="primary accent-1 mb-1 text-center"
                ><div class="mx-auto"><h3>Most Visited Comic Series</h3></div>
              </v-card-title>
              <v-card-text
                v-for="item in series"
                :key="item.id"
                class="my-auto py-1"
              >
                <h3>
                  <strong>{{ item.title }}: {{ item.views }}</strong>
                </h3>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainView',
  data: () => ({}),
  computed: {
    value() {
      return this.$store.state.value
    },
    ...mapGetters({
      characters: 'mostVisitedCharactersGetter',
      series: 'mostVisitedSeriesGetter',
    }),
  },
}
</script>
<style scoped></style>
