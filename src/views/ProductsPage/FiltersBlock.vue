<template>
  <div>
    <el-badge
      :hidden="filtersCount === 0"
      :value="filtersCount"
      class="item"
      type="primary"
    >
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
          v-model="params.brandId"
          placeholder="Выберите бренд"
          class="min-w-full"
        >
          <el-option label="Panasonic" value="1" />
          <el-option label="Apple" value="2" />
        </el-select>
      </el-collapse-item>
      <el-collapse-item v-if="false" title="Что-нибудь" name="test">
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
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
  },
  emits: ["update"],
  data: () => ({
    openedFilters: ["price"],
    filters: {
      price: {
        start: null,
        finish: null,
      },
    },
    params: null,
    filtersCount: 0,
  }),
  methods: {
    calcFiltersCount() {
      let count = 0;
      if (this.params.brandId) {
        count++;
      }
      this.filtersCount = count;
    },

    clearFilters() {
      this.filters = {
        price: {
          start: null,
          finish: null,
        },
      };
      this.params.brandId = "";
      this.setFilters();
    },

    setFilters() {
      this.calcFiltersCount();
      this.$emit("update");
    },
  },
  created() {
    this.params = this.modelValue;
  },
  watch: {
    modelValue(value) {
      this.params = value;
    },
  },
});
</script>

<style scoped></style>
