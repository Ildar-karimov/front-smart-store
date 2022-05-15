<template>
  <div
    class="flex justify-between py-2 px-6 rounded border-2 shadow cursor-pointer"
  >
    <div class="flex">
      <img
        :src="'http://localhost:5000/' + product.img"
        alt=""
        style="width: 14rem; height: 14rem"
      />
      <div class="ml-8">
        <p>{{ product.name }}</p>
        <el-rate
          v-model="rate"
          disabled
          show-score
          text-color="#ff9900"
          :score-template="'10 отзывов'"
        />
      </div>
    </div>
    <div class="flex flex-col justify-between">
      <p class="text-right font-bold text-2xl text-gray-700">
        {{ product.price }} ₽
      </p>
      <div class="flex mb-4">
        <button
          class="px-4 py-2 border rounded text-white bg-blue-500 hover:bg-blue-600"
        >
          &#128722; В корзину
        </button>
        <button
          class="ml-4 px-4 py-2 border rounded text-white bg-red-500 hover:bg-red-600"
        >
          &#9825; В избранное
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductCardMini",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    rate: 3.7,
  }),
});
</script>

<style scoped>
.liked {
  color: red;
}
</style>
