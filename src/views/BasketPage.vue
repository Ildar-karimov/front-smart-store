<template>
  <div class="">
    <el-breadcrumb class="p-8 pb-4 bg-gray-100">
      <el-breadcrumb-item :to="{ path: '/' }" class="text-base">
        Главная
      </el-breadcrumb-item>
      <el-breadcrumb-item class="text-base"> Корзина</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="flex justify-center px-8 pt-4 pb-8 bg-white">
      <el-empty v-if="true" description="Корзина пуста." />
      <div v-else class="ml-8 mt-4 flex flex-wrap"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BasketPage",
});
</script>

<style scoped></style>
