<template>
  <div id="app">
    <Header />
    <div class="main">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default defineComponent({
  name: "mainBlock",
  components: {
    Header,
    Footer,
  },
});
</script>

<style scoped>
.main {
  min-height: 83.3%;
}
</style>
