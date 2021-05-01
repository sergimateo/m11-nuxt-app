<template>
  <v-row justify="center">
    <v-col v-for="item in characters" :key="item.id" cols="auto">
      <v-card
        shaped
        class="d-flex flex-column mx-auto align-content-center"
        elevation="3"
        width="340"
      >
        <v-card-title class="primary accent-1 mb-auto user-title"
          ><div class="mx-auto">{{ item.name }}</div>
        </v-card-title>
        <v-img
          width="340"
          :src="
            item.thumbnail.path +
            '/landscape_xlarge.' +
            item.thumbnail.extension
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
  name: 'CharactersIndex',
  data() {
    return {}
  },

  computed: {
    ...mapGetters({
      characters: 'charactersGetter',
    }),
  },
  beforeCreate() {
    this.$store.dispatch('loadCharacters')
  },

  methods: {
    handleViewDetails(e) {
      const viewedCharacter = this.characters.find((item) => item.id === e)

      this.$store.dispatch('characterViewed', viewedCharacter)
      this.$router.push({
        name: 'characters-id',
        params: { id: viewedCharacter.id },
      })
    },
  },
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
