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
      <FiltersBlock
        class="w-1/4"
        v-model="paramsCurrent"
        @update="updateProducts"
      />
      <ProductsBlock
        class="w-3/4"
        v-model="paramsCurrent"
        :sort-dropdown="params"
        @set-sorters="setSorters"
        @update="updateProducts"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FiltersBlock from "./FiltersBlock.vue";
import ProductsBlock from "./ProductsBlock.vue";
import { ProductActions } from "@/store/modules/product/actions";

type sorters = {
  orderName: string;
  orderBy: string;
  order: string;
};

export default defineComponent({
  name: "ProductsPage",
  components: {
    FiltersBlock,
    ProductsBlock,
  },
  data: () => ({
    params: {
      orderName: "Сначала популярные",
      orderBy: "popular",
      order: "DESC",
    },
    paramsCurrent: {
      brandId: "",
      rowsOnPageCount: 10,
      currentPage: 1,
    },
  }),
  methods: {
    setSorters(sorters: sorters) {
      this.params.orderName = sorters.orderName;
      this.params.orderBy = sorters.orderBy;
      this.params.order = sorters.order;
    },
    updateProducts() {
      this.$store.dispatch(ProductActions.GET_ALL_PRODUCTS, this.paramsCurrent);
    },
  },
  mounted() {
    this.updateProducts();
  },
});
</script>

<style scoped></style>
