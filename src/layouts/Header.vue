<template>
  <div class="px-10 flex justify-between items-center h-16 bg-indigo-800">
    <div class="">
      <img src="../assets/img/logo.png" alt="Smart Store" class="h-12 w-36" />
    </div>
    <div
      class="cursor-pointer hover:bg-indigo-900 text-white"
      @click="showCatalog"
    >
      <div class="py-5 px-4">&#128269; Каталог</div>
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
      <div
        v-if="true"
        class="py-5 px-4 cursor-pointer hover:bg-indigo-900"
        @click="showLoginDialog"
      >
        Войти
      </div>
      <div v-else>Ильдар Каримов</div>

      <div class="header-nav-button">
        <el-badge :value="3" :max="5" class="item">
          <span>Избранное</span>
        </el-badge>
      </div>
      <div class="header-nav-button">
        <el-badge :value="3" :max="5" class="item" hidden>
          <span>Корзина</span>
        </el-badge>
      </div>
    </div>
  </div>

  <LoginDialog ref="loginDialog" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginDialog from "@/views/LoginDialog.vue";

export default defineComponent({
  name: "Header",
  components: { LoginDialog },
  methods: {
    showLoginDialog() {
      this.$refs.loginDialog.showDialog();
    },
    showCatalog() {
      //
    },
  },
});
</script>

<style>
.header-nav-button {
  @apply py-5 px-4 hover:bg-indigo-900 cursor-pointer;
}
</style>
