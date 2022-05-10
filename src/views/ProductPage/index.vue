<template>
  <div class="p-8">
    <el-button type="text">
      <span class="text-xl">Категория пылесосы</span>
    </el-button>
    <div class="flex pt-4">
      <div class="w-1/3">
        <img
          src="https://img.mvideo.ru/Pdb/small_pic/200/10022392b.jpg"
          alt=""
          class="h-full w-full object-cover"
        />
      </div>
      <div class="pl-16 w-2/3">
        <h2 class="mb-2 font-bold text-2xl">Робот-пылесос 2000china</h2>
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
          <div class="font-bold text-5xl">9990 ₽</div>
          <div class="flex mt-4">
            <button
              class="px-6 py-4 border rounded text-white bg-blue-500 hover:bg-blue-600"
            >
              &#128722; В корзину
            </button>
            <button
              class="ml-4 px-6 py-4 border rounded text-white bg-red-500 hover:bg-red-600"
            >
              &#9825; В избранное
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <el-tabs v-model="activeTab" class="demo-tabs" @tab-click="() => {}">
        <el-tab-pane label="Характеристики" name="info">
          <InfoTab />
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

export default defineComponent({
  name: "ProductPage",
  components: {
    InfoTab,
    RatesTab,
  },
  data: () => ({
    rate: 3.5,
    activeTab: "info",
  }),
});
</script>

<style scoped></style>
