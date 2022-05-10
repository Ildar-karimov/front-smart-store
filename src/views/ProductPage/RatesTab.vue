<template>
  <div class="">
    <RateCard v-model="test" />
    <RateCard v-model="test" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import RateCard from "@/views/ProductPage/RateCard";

export default defineComponent({
  name: "RatesTab",
  components: {
    RateCard,
  },
  data: () => ({
    rate: 2,
  }),
  computed: {
    test() {
      return {
        rate: 3,
      };
    },
  },
});
</script>

<style scoped></style>
