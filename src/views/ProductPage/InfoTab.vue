<template>
  <div class="">
    <div
      v-for="infoRow in info"
      :key="infoRow.title"
      class="mb-4 w-1/2 flex justify-between border-b-4 border-dotted"
    >
      <p class="text-gray-500">{{ infoRow.title }}</p>
      <p class="font-medium">{{ infoRow.description }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "InfoTab",
  props: {
    info: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped></style>
