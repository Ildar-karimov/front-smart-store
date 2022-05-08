<template>
  <div class="flex flex-col p-2 rounded border">
    <img src="https://img.mvideo.ru/Pdb/small_pic/200/30062057b.jpg" alt="" />
    <p>Смартфон большой блабла крутой</p>
    <el-rate
      v-model="rate"
      disabled
      show-score
      text-color="#ff9900"
      :score-template="'10 отзывов'"
      class="cursor-pointer"
    />
    <p>69999 ₽</p>
    <div class="flex text-xl">
      <button class="w-1/2 border rounded hover:bg-blue-100">&#128722;</button>
      <button class="w-1/2 border rounded font-bold hover:bg-red-100">
        &#9825;
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductCardMini",
  data: () => ({
    rate: 3.7,
  }),
});
</script>

<style scoped>
.liked {
  color: red;
}
</style>
