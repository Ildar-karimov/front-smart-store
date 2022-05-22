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
      <div v-else class="ml-8 w-full mt-4 flex">
        <div class="w-2/3 flex flex-wrap">
          <ProductRow
            v-for="product in basketProducts"
            :key="product.id"
            :product="product"
            class="mb-4 w-full"
          />
        </div>
        <div
          class="ml-8 w-1/3 p-4 rounded border-2 shadow"
          style="max-height: 16rem"
        >
          <h3 class="text-2xl text-center font-bold text-gray-700">Итог</h3>
          <div class="mb-4 flex justify-between border-b-4 border-dotted">
            <p class="text-gray-500">К оплате</p>
            <p class="font-medium">{{ basketSum }} руб.</p>
          </div>
          <div class="mb-4 flex justify-between border-b-4 border-dotted">
            <p class="text-gray-500">Всего товаров</p>
            <p class="font-medium">{{ basketProductsCount }} шт.</p>
          </div>

          <div class="flex justify-center mt-16">
            <el-button type="primary" size="large" plain>
              Оформить заказ
            </el-button>
          </div>
        </div>
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

    basketSum() {
      return this.basketProducts.reduce((sum, i) => sum + i.price, 0);
    },
  },
});
</script>

<style scoped></style>
