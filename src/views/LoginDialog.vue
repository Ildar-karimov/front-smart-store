<template>
  <el-dialog
    v-model="dialogVisible"
    title="Вход"
    width="40%"
    @close="hideDialog"
  >
    <div v-if="!userRegistration" class="login-body">
      <el-input
        v-model="authorization.email"
        placeholder="Email"
        class="mb-4 h-10"
      />
      <el-input
        v-model="authorization.password"
        type="password"
        placeholder="Пароль"
        class="h-10"
        show-password
      />
      <el-button type="text" @click="showRegistration()">Регистрация</el-button>
    </div>
    <div v-else>
      <el-input
        v-model="registration.name"
        placeholder="Имя"
        class="mb-4 h-10"
      />
      <el-input
        v-model="registration.surname"
        placeholder="Фамилия"
        class="mb-4 h-10"
      />
      <el-input
        v-model="registration.email"
        placeholder="Email"
        class="mb-4 h-10"
        autocomplete="edada"
      />
      <el-input
        v-model="registration.password"
        type="password"
        placeholder="Пароль"
        class="h-10"
        autocomplete="new-password"
        show-password
      />
    </div>
    <template #footer>
      <span v-if="!userRegistration" class="dialog-footer">
        <el-button @click="hideDialog">Отмена</el-button>
        <el-button type="primary" @click="login"> Войти </el-button>
      </span>
      <span v-else class="dialog-footer">
        <el-button @click="hideRegistration">Назад</el-button>
        <el-button type="primary" @click="registrUser"> Регистрация </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AuthActions } from "@/store/auth/actions";
import { ElMessage } from "element-plus";

export default defineComponent({
  name: "LoginDialog",
  data: () => ({
    dialogVisible: false,
    userRegistration: false,

    authorization: {
      email: "",
      password: "",
    },
    registration: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
  }),
  methods: {
    hideDialog() {
      this.dialogVisible = false;
      this.userRegistration = false;
    },
    showDialog() {
      this.dialogVisible = true;
    },
    login() {
      this.$store
        .dispatch(AuthActions.LOGIN, this.authorization)
        .then(() => {
          ElMessage({
            message: "Добро пожаловать!",
            type: "success",
          });
          this.hideDialog();
        })
        .catch(() => {
          ElMessage({
            message: "Неверный логин или пароль",
            type: "error",
          });
        });
    },

    showRegistration() {
      this.userRegistration = true;
    },
    hideRegistration() {
      this.userRegistration = false;
    },
    registrUser() {
      this.$store
        .dispatch(AuthActions.REGISTRATION, this.registration)
        .then(() => {
          ElMessage({
            message: "Вы успешно зарегистрировались!",
            type: "success",
          });
          this.hideDialog();
        })
        .catch(() => {
          ElMessage({
            message: "Проверьте поля",
            type: "error",
          });
        });
    },
  },
});
</script>

<style scoped>
.login-body {
}
</style>
