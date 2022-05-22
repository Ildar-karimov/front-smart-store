<template>
  <div class="">
    <el-breadcrumb class="p-8 pb-4 bg-gray-100">
      <el-breadcrumb-item :to="{ path: '/' }" class="text-base">
        Главная
      </el-breadcrumb-item>
      <el-breadcrumb-item class="text-base"> Корзина</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="flex justify-center px-8 pt-4 pb-8 bg-white">
      <el-skeleton v-if="basketProductsLoading !== 2" :rows="20" animated />
      <el-empty
        v-else-if="basketProductsLoading === 2 && basketProductsCount === 0"
        description="По вашему запросу ничего не найдено"
      />
      <div v-else class="ml-8 mt-4 flex">
        <div class="w-2/3 flex flex-wrap">
          <ProductRow
            v-for="product in basketProducts"
            :key="product.id"
            :product="product"
            class="mb-4 w-full"
          />
        </div>
        <div class="w-1/3">Итог</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import ProductRow from "@/components/ProductRow";

export default defineComponent({
  name: "BasketPage",
  components: {
    ProductRow,
  },
  computed: {
    ...mapGetters([
      "basketProducts",
      "basketProductsLoading",
      "basketProductsCount",
    ]),
  },
});
</script>

<style scoped></style>
