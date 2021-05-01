<template>
  <v-autocomplete
    class="info"
    rounded
    dense
    filled
    placeholder="Search Users"
    hide-details
    :hide-no-data="menuIsDisabled"
    no-data-text="User not found"
    clearable
    :items="UsersDisplayMenu"
    :search-input.sync="search"
    item-text="name"
    return-object
    prepend-inner-icon="mdi-magnify"
    @click:clear="clearSearchAndSelection"
    @change="updateUser"
    @click:prepend-inner="handlePrependInnerIconClick"
  >
  </v-autocomplete>
</template>

<script>
import { mapGetters } from 'vuex'
// import router from '../router'

export default {
  name: 'SearchUsersBar',
  data: () => ({
    username: '',
    UsersDisplayMenu: [],
    search: null,
    menuIsDisabled: true,
  }),
  computed: {
    ...mapGetters(['usersGetter']),
  },
  watch: {
    search() {
      if (!this.search) {
        return
      }
      if (this.search.length < 2) {
        this.UsersDisplayMenu = []
        this.menuIsDisabled = true
      } else {
        this.UsersDisplayMenu = this.usersGetter
        this.menuIsDisabled = false
      }
    },
  },

  methods: {
    handlePrependInnerIconClick() {
      if (this.username) {
        this.$store.dispatch('userViewed', this.username)
        // router.push({
        //   name: 'UserDetails',
        //   params: { username: this.username.name },
        // })
      }
    },
    updateUser(e) {
      this.username = e
    },
    clearSearchAndSelection() {
      this.UsersDisplayMenu = []
      this.search = []
      this.username = []
      this.menuIsDisabled = true
    },
  },
}
</script>
