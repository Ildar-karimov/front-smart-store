<template>
  <div>
    <el-badge :value="1" class="item" type="primary">
      <h4>Фильтры</h4>
    </el-badge>

    <el-collapse v-model="openedFilters" class="my-6">
      <el-collapse-item title="Цена" name="price">
        <el-input v-model="filters.price.start" class="">
          <template #prepend>
            <span class="w-4">От</span>
          </template>
        </el-input>
        <div class="py-1" />
        <el-input v-model="filters.price.finish">
          <template #prepend>
            <span class="w-4">До</span>
          </template>
        </el-input>
      </el-collapse-item>
      <el-collapse-item title="Бренд" name="brand">
        <el-select
          v-model="filters.brands"
          multiple
          collapse-tags
          placeholder="Выберите бренд"
          class="min-w-full"
        >
          <el-option label="Panasonic" value="1" />
          <el-option label="Apple" value="2" />
        </el-select>
      </el-collapse-item>
      <el-collapse-item title="Что-нибудь" name="test">
        <div>TEST</div>
      </el-collapse-item>
    </el-collapse>

    <div class="flex justify-end">
      <el-button @click="clearFilters">Очистить</el-button>
      <el-button type="primary" @click="setFilters">Применить</el-button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FiltersBlock",
  data: () => ({
    openedFilters: ["price"],
    filters: {
      price: {
        start: null,
        finish: null,
      },
      brands: [],
    },
  }),
  methods: {
    clearFilters() {
      this.filters = {
        price: {
          start: null,
          finish: null,
        },
        brands: [],
      };
    },

    setFilters() {
      console.log("at work..");
    },
  },
});
</script>

<style scoped></style>
