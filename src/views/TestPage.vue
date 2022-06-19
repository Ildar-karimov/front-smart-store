<template>
  <div class="">
    <el-breadcrumb class="p-8 pb-4 bg-gray-100">
      <el-breadcrumb-item :to="{ path: '/' }" class="text-base">
        Главная
      </el-breadcrumb-item>
      <el-breadcrumb-item class="text-base">Тест</el-breadcrumb-item>
    </el-breadcrumb>
    <p class="px-8 pt-2 -mb-1 text-sm text-gray-500">
      Данный тест позволит нам лучше подбирать подходящие для вас товары
    </p>
    <div class="flex justify-center px-8 pt-4 pb-8 bg-white">
      <el-form
        label-position="top"
        :model="testData"
        class="w-1/2 box-border p-4 border-blue-500 border rounded"
      >
        <el-form-item label="Ваш пол">
          <el-radio-group v-model="testData.sex">
            <el-radio :label="0" size="large" border>Женский</el-radio>
            <el-radio :label="1" size="large" border>Мужской</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="Ваш возраст">
          <el-radio-group v-model="testData.age">
            <el-radio :label="0" size="large" border>до 16</el-radio>
            <el-radio :label="1" size="large" border>17-25</el-radio>
            <el-radio :label="2" size="large" border>26-35</el-radio>
            <el-radio :label="3" size="large" border>36+</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item
          label="Какая категория вас больше всего заинтересовала в магазине?"
        >
          <el-select
            v-model="testData.categoryId"
            placeholder="Выберите"
            size="large"
          >
            <el-option label="Никакой" :value="0" />
            <el-option
              v-for="category in categories"
              :key="category.id"
              :label="category.name"
              :value="category.id"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="Какой бренд вам нравится?">
          <el-select v-model="testData.r2" placeholder="Выберите" size="large">
            <el-option label="Никакой" :value="0" />
            <el-option
              v-for="brand in brands"
              :key="brand.id"
              :label="brand.name"
              :value="brand.id"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="Для какой цели вы рассматриваете умные девайсы?">
          <el-radio-group v-model="testData.r3">
            <el-radio-button :label="0" size="small">
              Затрудняюсь ответить
            </el-radio-button>
            <el-radio-button :label="1" size="small"
              >Хочу умный дом
            </el-radio-button>
            <el-radio-button :label="2" size="small"
              >Автоматизировать бытовые дела
            </el-radio-button>
            <el-radio-button :label="3" size="small"
              >Хочу быть в тренде
            </el-radio-button>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="Есть ли у вас умный девайс?">
          <el-radio-group v-model="testData.r4">
            <el-radio :label="0" size="large" border>Да</el-radio>
            <el-radio :label="1" size="large" border>Нет</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="Чем вы занимаетесь?">
          <el-radio-group v-model="testData.r5">
            <el-radio :label="0" size="large" border>Учусь</el-radio>
            <el-radio :label="1" size="large" border>Безработный</el-radio>
            <el-radio :label="2" size="large" border>Работаю</el-radio>
            <el-radio :label="3" size="large" border>Другое</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="Какой вариант вам больше подходит?">
          <el-radio-group v-model="testData.r6">
            <el-radio-button :label="0" size="small">
              Сделаю дело, как сам знаю
            </el-radio-button>
            <el-radio-button :label="1" size="small">
              Изучу дело и сделаю как советуют
            </el-radio-button>
            <el-radio-button :label="2" size="small">
              Не буду делать ничего
            </el-radio-button>
            <el-radio-button :label="3" size="small">Другое</el-radio-button>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="Часто ли вы убираетесь?">
          <el-radio-group v-model="testData.r7">
            <el-radio :label="0" size="small" border> Да</el-radio>
            <el-radio :label="1" size="small" border>
              Нет, умные девайсы убираются
            </el-radio>
            <el-radio :label="2" size="small" border> Редко</el-radio>
            <el-radio :label="3" size="small" border> Нет</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="Есть ли у вас домашнее животное?">
          <el-radio-group v-model="testData.r8">
            <el-radio :label="0" size="large" border> Да</el-radio>
            <el-radio :label="1" size="large" border>Нет</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item class="mt-4">
          <el-button type="primary" @click="sendTestResult" size="large">
            Отправить ответы
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import $api from "@/api";

export default defineComponent({
  name: "TestDialog",
  setup() {
    const state = reactive({
      categories: [],
      brands: [],

      testVisible: false,
      testData: {
        sex: null,
        age: null,
        categoryId: null,
        r2: null,
        r3: null,
        r4: null,
        r5: null,
        r6: null,
        r7: null,
        r8: null,
      },
    });

    const showTest = async () => {
      state.testVisible = true;
      await $api.get("category").then((res) => (state.categories = res.data));
      await $api.get("brand").then((res) => (state.brands = res.data));
    };
    const hideTest = () => {
      state.testVisible = false;
    };

    const sendTestResult = () => {
      console.log(123);
    };

    return { ...toRefs(state), showTest, hideTest, sendTestResult };
  },
});
</script>

<style scoped></style>
