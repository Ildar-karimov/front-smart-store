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
        @click="addToLikedProducts"
        class="ml-2 w-1/2 border rounded font-bold hover:bg-red-100"
        :class="{ liked: isLiked }"
      >
        &#9825;
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElMessage } from "element-plus";

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
    isLiked: false,
  }),
  computed: {},
  methods: {
    showProduct() {
      this.$router.push({ path: `/product/${this.product.id}` });
    },

    checkIsProductLiked() {
      let likedProducts =
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        JSON.parse(localStorage.getItem("likedProducts")) || [];
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      likedProducts.forEach((product) => {
        if (this.product.id === product?.id) {
          this.isLiked = true;
        }
      });
    },

    addToLikedProducts() {
      let likedProducts =
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        JSON.parse(localStorage.getItem("likedProducts")) || [];
      let deleted = false;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      likedProducts.forEach((product, index) => {
        if (this.product.id === product?.id) {
          likedProducts.splice(index, 1);
          deleted = true;
          this.isLiked = false;
          ElMessage({
            message: "Удалено из избранных",
            type: "info",
          });
        }
      });
      if (!deleted) {
        likedProducts.push(this.product);
        this.isLiked = true;
        ElMessage({
          message: "Добавлено в избранное!",
          type: "success",
        });
      }
      localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
    },
  },
  mounted() {
    this.checkIsProductLiked();
  },
});
</script>

<style scoped>
.liked {
  color: red;
}
</style>
