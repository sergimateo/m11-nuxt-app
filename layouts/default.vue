<template>
  <v-app id="app" app>
    <div id="bg">
      <!-- <img src="./../assets/images/background-img-light-2.jpg" alt="" /> -->
      <img src="./../assets/images/bg1-3.jpg" alt="" />
    </div>
    <AppToolbar></AppToolbar>

    <v-main app>
      <v-container class="maincontainer" fluid>
        <transition
          appear
          name="container-animation"
          enter-active-class="animate__animated animate__fadeIn animate__slow"
          leave-active-class="animate__animated animate__fadeOut"
          mode="out-in"
        >
          <nuxt />
        </transition>
      </v-container>
    </v-main>

    <v-footer class="primary font-weight-bold justify-center" app>
      <div><h2>Made with</h2></div>
      <img src="../assets/images/spideyheart_3.svg" class="mx-2" height="36" />
      <div><h2>by SMC Designs</h2></div>
    </v-footer>
  </v-app>
</template>

<script></script>

<style lang="css">
* {
  font-family: 'Marvel', sans-serif;
}

#bg {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
}
#bg img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 50%;
  min-height: 50%;
}
</style>
