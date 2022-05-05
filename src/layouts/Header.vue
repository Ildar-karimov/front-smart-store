<template>
  <div class="px-10 flex justify-between items-center h-16 bg-indigo-800">
    <div class="">
      <img src="../assets/img/logo.png" alt="Smart Store" class="h-12 w-36">
    </div>
    <div class="cursor-pointer hover:bg-indigo-900 text-white">
      <div class="py-5 px-4">
        &#128269; Каталог
      </div>
    </div>
    <div class="">
      <el-autocomplete
          :fetch-suggestions="() => {}"
          placeholder="Введите для поиска"
          @select="() => {}"
          class="w-96"
      />
    </div>
    <div class="flex items-center text-white h-full">
      <div v-if="true" class="py-5 px-4 cursor-pointer hover:bg-indigo-900">
        Войти
      </div>
      <div v-else>
        Ильдар Каримов
      </div>

      <div class="py-5 px-4 hover:bg-indigo-900">
        <el-badge :value="3" :max="5" class="item">
          <span>Избранное</span>
        </el-badge>
      </div>
      <div class="py-5 px-4 hover:bg-indigo-900">
        <el-badge :value="3" :max="5" class="item" hidden>
          <span>Корзина</span>
        </el-badge>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>

<style lang="scss">

</style>
