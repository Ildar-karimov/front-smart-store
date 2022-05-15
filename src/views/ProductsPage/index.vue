<template>
  <div class="">
    <el-breadcrumb class="p-8 pb-4 bg-gray-100">
      <el-breadcrumb-item :to="{ path: '/' }" class="text-base">
        Главная
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }" class="text-base">
        Умные вещи
      </el-breadcrumb-item>
      <el-breadcrumb-item class="text-base">
        Роботы-пылесосы
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="flex px-8 pt-4 pb-8 bg-white">
      <FiltersBlock class="w-1/4" v-model="params" @update="updateProducts" />
      <ProductsBlock class="w-3/4" v-model="params" @update="updateProducts" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FiltersBlock from "./FiltersBlock.vue";
import ProductsBlock from "./ProductsBlock.vue";
import { ProductActions } from "@/store/modules/product/actions";
import { BrandActions } from "@/store/modules/brand/actions";

export default defineComponent({
  name: "ProductsPage",
  components: {
    FiltersBlock,
    ProductsBlock,
  },
  data: () => ({
    params: {
      orderBy: "price",
      order: "ASC",
      brandId: "",
      rowsOnPageCount: 10,
      currentPage: 1,
      startPrice: null,
      endPrice: null,
    },
  }),
  methods: {
    updateProducts() {
      this.$store.dispatch(ProductActions.GET_ALL_PRODUCTS, this.params);
    },

    loadBaseData() {
      this.$store.dispatch(BrandActions.GET_ALL_BRANDS);
    },
  },
  mounted() {
    this.loadBaseData();
    this.updateProducts();
  },
});
</script>

<style scoped></style>
