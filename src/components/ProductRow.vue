<template>
  <div
    @click="showProduct"
    class="flex justify-between py-2 px-6 rounded border-2 shadow cursor-pointer hover:bg-green-50"
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
          @click.stop
          @click="addToBasket"
          class="px-4 py-2 border rounded text-white bg-blue-500 hover:bg-blue-600"
          :class="{ 'at-basket': isAtBasket }"
          :disabled="basketBtnLoading"
        >
          {{ isAtBasket ? "&#128722; Добавлен" : "&#128722; В корзину" }}
        </button>
        <button
          @click.stop
          @click="addToLikedProducts"
          class="ml-4 px-4 py-2 border rounded text-white bg-red-500 hover:bg-red-600"
          :class="{ liked: isLiked }"
        >
          {{ isLiked ? "Добавлен" : "&#9825; В избранное" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { LikedProductMutations } from "@/store/modules/likedProduct/mutations";
import { ElMessage } from "element-plus";
import { Product } from "@/store/modules/product/types";
import { BasketActions } from "@/store/modules/basket/actions";

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
    basketBtnLoading: false,
  }),
  computed: {
    ...mapGetters(["likedProducts", "isAuthorized", "basketProducts"]),

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

    isAtBasket() {
      let isAtBasket = false;
      this.basketProducts.forEach((product: Product) => {
        if (this.product.id === product.id) {
          isAtBasket = true;
        }
      });

      return isAtBasket;
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

    addToBasket() {
      if (this.isAuthorized) {
        this.basketBtnLoading = true;
        if (this.isAtBasket) {
          this.$store
            .dispatch(BasketActions.REMOVE_BASKET_PRODUCT, this.product)
            .then(() => {
              this.$store.dispatch(BasketActions.GET_BASKET_PRODUCTS);
              this.basketBtnLoading = false;
              ElMessage("Товар удален из корзины.");
            });
        } else {
          this.$store
            .dispatch(BasketActions.CREATE_BASKET_PRODUCT, this.product)
            .then(() => {
              this.$store.dispatch(BasketActions.GET_BASKET_PRODUCTS);
              this.basketBtnLoading = false;
              ElMessage({
                message: "Добавлено в корзину!",
                type: "success",
              });
            });
        }
      } else {
        ElMessage("Авторизуйтесь для того, чтобы добавить в корзину.");
      }
    },
  },
});
</script>

<style scoped>
.liked {
  @apply hover:bg-red-100;
  color: red;
  background-color: #fff;
  border: red 2px solid;
}

.at-basket {
  @apply hover:bg-blue-100;
  color: blue;
  background-color: #fff;
  border: blue 2px solid;
}
</style>
