<template>
  <div class="">
    <el-carousel
      class="p-8 pb-0 rounded"
      style="background-color: #f5f5f6"
      trigger="click"
    >
      <el-carousel-item v-for="item in 4" :key="item" class="rounded-xl">
        <img
          src="https://cms.mvideo.ru/magnoliaPublic/.imaging/webp/dam/e88b8cda-9d3c-4476-a5c0-ba7d610ec63f"
          class="h-full w-full object-cover cursor-pointer"
        />
      </el-carousel-item>
    </el-carousel>
    <div class="py-4" style="background-color: #f5f5f6" />

    <div class="p-8">
      <h2 class="font-bold text-2xl mb-6">Популярные товары</h2>
      <div class="flex overflow-x-auto">
        <ProductCardMini
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="mr-4 w-56"
          style="min-width: 14rem"
        />
      </div>
    </div>

    <div class="p-8">
      <h2 class="font-bold text-2xl mb-6">Новинки</h2>
      <div class="flex overflow-x-auto">
        <ProductCardMini
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="mr-4 w-56"
          style="min-width: 14rem"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCardMini from "@/components/ProductCardMini.vue";
import { ProductActions } from "@/store/modules/product/actions";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "Main",
  components: {
    ProductCardMini,
  },
  props: {},
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    updateProducts() {
      this.$store.dispatch(ProductActions.GET_ALL_PRODUCTS, {
        rowsOnPageCount: 20,
        currentPage: 1,
      });
    },
  },
  mounted() {
    this.updateProducts();
  },
});
</script>

<style scoped></style>
