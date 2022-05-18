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
import { mapGetters } from "vuex";
import { LikedProductMutations } from "@/store/modules/likedProduct/mutations";

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
  computed: {
    ...mapGetters(["likedProducts"]),

    isLiked() {
      let isLiked = false;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.likedProducts.forEach((product) => {
        if (this.product.id === product?.id) {
          isLiked = true;
        }
      });

      return isLiked;
    },
  },
  methods: {
    showProduct() {
      this.$router.push({ path: `/product/${this.product.id}` });
    },

    addToLikedProducts() {
      if (this.isLiked) {
        this.$store.commit(
          LikedProductMutations.DELETE_LIKED_PRODUCT,
          this.product
        );

        ElMessage({
          message: "Удалено из избранного",
          type: "info",
        });
      } else {
        this.$store.commit(
          LikedProductMutations.ADD_LIKED_PRODUCT,
          this.product
        );
        ElMessage({
          message: "Добавлено в избранное!",
          type: "success",
        });
      }
    },
  },
});
</script>

<style scoped>
.liked {
  color: red;
}
</style>
