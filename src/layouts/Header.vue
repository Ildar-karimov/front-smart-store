<template>
  <div class="px-10 flex justify-between items-center h-16 bg-indigo-800">
    <div class="">
      <router-link to="/">
        <img src="../assets/img/logo.png" alt="Smart Store" class="h-12 w-36" />
      </router-link>
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
        v-if="!isAuthorized"
        class="py-5 px-4 cursor-pointer hover:bg-indigo-900"
        @click="showLoginDialog"
      >
        Войти
      </div>
      <el-dropdown v-else trigger="click">
        <div
          class="py-5 px-4 cursor-pointer hover:bg-indigo-900 text-white text-base"
        >
          {{ userShortName }}
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Профиль</el-dropdown-item>
            <el-dropdown-item>Заказы</el-dropdown-item>
            <el-dropdown-item divided>Выйти</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

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
  <Catalog ref="catalog" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginDialog from "@/views/LoginDialog.vue";
import Catalog from "@/views/Catalog.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "Header",
  components: { LoginDialog, Catalog },
  computed: {
    ...mapGetters(["user", "isAuthorized", "userShortName"]),
  },
  methods: {
    showLoginDialog() {
      (this.$refs["loginDialog"] as typeof LoginDialog).showDialog();
    },
    showCatalog() {
      (this.$refs["catalog"] as typeof Catalog).showCatalog();
    },
  },
});
</script>

<style>
.header-nav-button {
  @apply hover:bg-indigo-900 cursor-pointer;
  padding: 1.2rem 1rem;
}
</style>
