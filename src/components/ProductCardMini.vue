<template>
  <div
    @click="showProduct"
    class="flex flex-col p-2 rounded border cursor-pointer"
  >
    <img :src="'http://localhost:5000/' + product.img" alt="" />
    <p>{{ product.name }}</p>
    <el-rate
      v-if="!disablePanel"
      v-model="rate"
      disabled
      show-score
      text-color="#ff9900"
      :score-template="'10 отзывов'"
    />
    <p>{{ product.price }} ₽</p>
    <div v-if="!disablePanel" class="flex text-xl">
      <button
        @click.stop
        @click="addToBasket"
        class="w-1/2 border rounded hover:bg-blue-100"
        :class="{ 'at-basket': isAtBasket }"
        :disabled="basketBtnLoading"
      >
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
import { BasketActions } from "@/store/modules/basket/actions";
import { Product } from "@/store/modules/product/types";

export default defineComponent({
  name: "ProductCardMini",
  props: {
    product: {
      type: Object,
      required: true,
    },
    disablePanel: {
      type: Boolean,
      required: false,
      default: false,
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
  color: red;
}

.at-basket {
  @apply bg-blue-400 text-blue-500;
}
</style>
