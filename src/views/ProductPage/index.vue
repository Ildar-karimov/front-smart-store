<template>
  <div v-if="currentProductLoading === 2" class="p-8">
    <el-button type="text">
      <span class="text-xl">Категория пылесосы</span>
    </el-button>
    <div class="flex pt-4">
      <div class="w-1/3">
        <img
          :src="'http://localhost:5000/' + currentProduct.img"
          alt=""
          class="h-full w-full object-cover"
        />
      </div>
      <div class="pl-16 w-2/3">
        <h2 class="mb-2 font-bold text-2xl">{{ currentProduct.name }}</h2>
        <el-rate
          v-model="rate"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        />
        <h3 class="my-2 font-medium text-lg">Описание</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          cum doloribus facilis impedit in maiores qui quo repellat voluptatum!
        </p>
        <div class="mt-2 bg-gray-50 rounded px-2 py-4">
          <div class="font-bold text-5xl">{{ currentProduct.price }} ₽</div>
          <div class="flex mt-4">
            <button
              @click="addToBasket"
              class="px-6 py-4 border rounded text-white bg-blue-500 hover:bg-blue-600"
            >
              &#128722; В корзину
            </button>
            <button
              @click="addToLikedProducts"
              class="ml-4 px-6 py-4 border rounded text-white bg-red-500 hover:bg-red-600"
              :class="{ liked: isLiked }"
            >
              &#9825; В избранное
            </button>
          </div>
        </div>
        <div v-if="currentProduct.additionalProducts.length !== 0">
          <h3 class="my-2 font-medium text-lg">С этим товаром покупают</h3>
          <div class="flex overflow-x-auto">
            <ProductCardMini
              v-for="product in currentProduct.additionalProducts"
              :key="product.id"
              :product="product"
              class="mr-2 w-36"
              style="min-width: 12rem"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <el-tabs v-model="activeTab" class="demo-tabs" @tab-click="() => {}">
        <el-tab-pane label="Характеристики" name="info">
          <InfoTab :info="currentProduct.info" />
        </el-tab-pane>

        <el-tab-pane label="Отзывы" name="rates">
          <RatesTab />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import RatesTab from "@/views/ProductPage/RatesTab";
import InfoTab from "@/views/ProductPage/InfoTab";
import { ProductActions } from "@/store/modules/product/actions";
import { mapGetters } from "vuex";
import { ElMessage } from "element-plus";
import { LikedProductMutations } from "@/store/modules/likedProduct/mutations";
import ProductCardMini from "@/components/ProductCardMini";

export default defineComponent({
  name: "ProductPage",
  components: {
    InfoTab,
    RatesTab,
    ProductCardMini,
  },
  data: () => ({
    rate: 3.5,
    activeTab: "info",
  }),
  computed: {
    ...mapGetters([
      "currentProduct",
      "currentProductLoading",
      "likedProducts",
      "isAuthorized",
    ]),

    isLiked() {
      let isLiked = false;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.likedProducts.forEach((product) => {
        if (this.currentProduct.id === product?.id) {
          isLiked = true;
        }
      });

      return isLiked;
    },
  },
  methods: {
    updateProduct() {
      this.$store.dispatch(
        ProductActions.GET_PRODUCT_BY_ID,
        this.$route.params.id
      );
    },

    addToLikedProducts() {
      if (this.isLiked) {
        this.$store.commit(
          LikedProductMutations.DELETE_LIKED_PRODUCT,
          this.currentProduct
        );

        ElMessage({
          message: "Удалено из избранного",
          type: "info",
        });
      } else {
        this.$store.commit(
          LikedProductMutations.ADD_LIKED_PRODUCT,
          this.currentProduct
        );
        ElMessage({
          message: "Добавлено в избранное!",
          type: "success",
        });
      }
    },

    addToBasket() {
      if (this.isAuthorized) {
        ElMessage({
          message: "Добавлено в корзину!",
          type: "success",
        });
      } else {
        ElMessage("Авторизуйтесь для того, чтобы добавить в корзину.");
      }
    },
  },
  mounted() {
    this.updateProduct();
  },
});
</script>

<style scoped>
.liked {
  color: red;
  background-color: #fff;
  border: red 2px solid;
}
</style>
