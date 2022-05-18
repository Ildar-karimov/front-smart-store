<template>
  <div class="">
    <el-breadcrumb class="p-8 pb-4 bg-gray-100">
      <el-breadcrumb-item :to="{ path: '/' }" class="text-base">
        Главная
      </el-breadcrumb-item>
      <el-breadcrumb-item class="text-base"> Избранное</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="flex justify-center px-8 pt-4 pb-8 bg-white">
      <el-empty
        v-if="likedProducts.length === 0"
        description="Список избранного пуст."
      />
      <div v-else class="ml-8 mt-4 flex flex-wrap">
        <ProductRow
          v-for="product in likedProducts"
          :key="product.id"
          :product="product"
          class="mb-4 w-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import ProductRow from "@/components/ProductRow";

export default defineComponent({
  name: "LikedProductsPage",
  components: {
    ProductRow,
  },
  computed: {
    ...mapGetters(["likedProducts"]),
  },
});
</script>

<style scoped></style>
