<template>
  <v-row justify="center" class="pt-3">
    <v-col
      ><v-row justify="space-around" class="mb-4">
        <h2 class="mx-auto">Character details</h2>
      </v-row>
      <v-card
        shaped
        class="mx-auto primary lighten-2"
        elevation="3"
        width="340"
      >
        <v-card-title class="primary accent-1">
          <div class="mx-auto">{{ character.name }}</div>
        </v-card-title>
        <v-img
          width="340"
          :src="
            character.thumbnail.path +
            '/landscape_xlarge.' +
            character.thumbnail.extension
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
                @click="fetchComics(character.id)"
              >
                View comics
              </v-btn>
              <v-btn
                class="mx-auto info"
                small
                rounded
                @click="fetchEvents(character.id)"
              >
                View events
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
  name: 'CharacterDetails',
  data() {
    return {
      show: false,
    }
  },
  computed: {
    ...mapGetters({
      characters: 'charactersGetter',
    }),
    character() {
      return this.characters.find(
        (character) => character.id === this.$route.params.id
      )
    },
  },
  methods: {
    fetchComics(e) {
      this.$store.dispatch('loadComicsByCharacter', e)
      this.$router.push({
        name: 'characters-id-comics',
        params: { id: e },
      })
    },

    fetchEvents(e) {
      this.$store.dispatch('loadEventsByCharacter', e)
      this.$router.push({
        name: 'characters-id-events',
        params: { id: e },
      })
    },
  },
}
</script>
