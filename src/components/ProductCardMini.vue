<template>
  <div
    @click="showProduct"
    class="flex flex-col p-2 rounded border cursor-pointer"
  >
    <img :src="'http://localhost:5000/' + product.img" alt="" />
    <p>{{ product.name }}</p>
    <el-rate
      v-model="rate"
      disabled
      show-score
      text-color="#ff9900"
      :score-template="'10 отзывов'"
    />
    <p>{{ product.price }} ₽</p>
    <div class="flex text-xl">
      <button @click.stop class="w-1/2 border rounded hover:bg-blue-100">
        &#128722;
      </button>
      <button
        @click.stop
        class="ml-2 w-1/2 border rounded font-bold hover:bg-red-100"
      >
        &#9825;
      </button>
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
  methods: {
    showProduct() {
      this.$router.push({ path: `/product/${this.product.id}` });
    },
  },
});
</script>

<style scoped>
.liked {
  color: red;
}
</style>
