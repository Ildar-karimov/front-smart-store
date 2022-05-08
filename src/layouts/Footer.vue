<template>
  <div
    class="px-8 py-4 flex items-center justify-between text-white bg-gray-700"
  >
    <p>Выполнил Каримов Ильдар</p>
    <p>Разработка 2021 - {{ currentYear }}</p>
  </div>
  <el-backtop :right="10" :bottom="50" />
</template>

<script lang="ts">
export default {
  name: "Footer",
  computed: {
    currentYear(): number {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped></style>
