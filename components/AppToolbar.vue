<template>
  <div>
    <v-app-bar class="primary" app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <template #extension>
        <v-tabs align-with-title class="d-none d-sm-block">
          <v-tabs-slider class="secondary"></v-tabs-slider>
          <v-tab
            v-for="item in navigationItems"
            :key="item.id"
            active-class="secondary--text"
            class="text--primary"
            :to="item.to"
            >{{ item.title }}</v-tab
          >
        </v-tabs>
        <!-- <SearchUsersBar class="d-sm-none"></SearchUsersBar> -->
      </template>
      <v-toolbar-title
        ><nuxt-link v-slot="{ navigate }" to="/" custom style="cursor: pointer">
          <span role="link" @click="navigate" @keypress.enter="navigate">
            <strong>Marvel Heroes</strong></span
          >
        </nuxt-link></v-toolbar-title
      >
      <v-spacer class="mx-auto"></v-spacer>
      <!-- <SearchUsersBar class="d-none d-sm-block"></SearchUsersBar> -->

      <v-tooltip color="secondary" bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            class="mx-3 info"
            elevation="2"
            icon
            small
            v-on="on"
            @click="toggleTheme"
            ><v-icon>mdi-invert-colors</v-icon></v-btn
          >
        </template>
        <span>Light/Dark Theme</span>
      </v-tooltip>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" class="primary" app temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="accent darken-1--text text--accent-4"
        >
          <v-list-item
            v-for="item in navigationItems"
            :key="item.id"
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import SearchUsersBar from './SearchUsersBar.vue'

export default {
  name: 'ApptoolBar',

  // components: { SearchUsersBar },
  data: () => ({
    drawer: false,
    group: null,
    themeToggler: true,
  }),
  computed: {
    ...mapState({
      navigationItems: (state) => state.navigationItems,
    }),
  },

  methods: {
    toggleTheme() {
      this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark
      this.$vuetify.theme.dark = this.themeToggler
      this.themeToggler = !this.themeToggler
    },
  },
}
</script>

//
<style lang="scss" scoped>
// h4 {
//   font-weight: 600;
// }
</style>
