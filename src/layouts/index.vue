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
import { AuthActions } from "@/store/modules/auth/actions";
import { BasketActions } from "@/store/modules/basket/actions";

export default defineComponent({
  name: "mainBlock",
  components: {
    Header,
    Footer,
  },
  mounted() {
    if (localStorage.getItem("token")) {
      this.$store.dispatch(AuthActions.CHECK_AUTH).then(() => {
        this.$store.dispatch(BasketActions.GET_BASKET_PRODUCTS);
      });
    }
  },
});
</script>

<style scoped>
.main {
  min-height: 83.3%;
}
</style>
