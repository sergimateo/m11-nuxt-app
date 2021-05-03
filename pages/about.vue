<template>
  <v-container fluid>
    <v-row justify="center"
      ><h1 class="font-weight-bold">Project made with</h1></v-row
    >
    <v-row class="mt-4" justify="center">
      <v-col class="my-2 mx-5" cols="auto">
        <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">
          <img height="200" src="./../assets/images/nuxt-square.svg" />
          <div>
            <span role="link" @click="navigate">
              <h2 class="mt-2 text-center">Nuxt.js 2.15.3</h2></span
            >
          </div></a
        >
      </v-col>
      <v-col justify="center" class="my-2 mx-5" cols="auto">
        <a
          href="https://vuetifyjs.com/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img height="200" src="./../assets/images/vuetify.svg" />
          <div>
            <h2 class="mt-2 text-center">Vuetify 2.4.11</h2>
          </div></a
        >
      </v-col>
    </v-row>
    <v-row justify="center" class="my-2" cols="12">
      <v-col justify="center" class="my-2 mx-auto" cols="auto">
        <a
          href="http://developer.marvel.com/"
          target="_blank"
          rel="noopener noreferrer"
          ><div justify="center" class="d-flex">
            <img
              class="marvel-img"
              width="300"
              src="./../assets/images/marvel_logo.svg"
            />
          </div>
          <div>
            <h2 class="mt-2 text-center">
              Data provided by Marvel. © 2021 MARVEL
            </h2>
          </div></a
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<style scss scoped>
.marvel-img {
  margin: auto;
  display: block;
}
a {
  text-decoration: none;
  color: black;
}
a :hover {
  color: #1976d2;
}
</style>
