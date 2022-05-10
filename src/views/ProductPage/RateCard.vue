<template>
  <div class="mb-4 px-4 py-2 bg-gray-100 rounded">
    <h4 class="font-medium">Ильдар Каримов</h4>
    <el-rate
      v-model="settings.rate"
      disabled
      show-score
      disabled-void-color="#9CA3AF"
      text-color="#ff9900"
      score-template="{value}"
      class="cursor-pointer"
    />
    <h4 class="font-medium">Комментарий</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate
      minima neque odit repellat sint?
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RateCard",
  data: () => ({
    settings: null,
  }),
  props: {
    modelValue: {
      type: Object,
    },
  },
  created() {
    this.settings = this.modelValue;
  },
  watch: {
    modelValue(value) {
      this.settings = value;
    },
  },
});
</script>

<style scoped></style>
