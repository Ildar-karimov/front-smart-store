<template>
  <el-dialog v-model="catalogVisible" title="Каталог" fullscreen>
    <div class="flex flex-wrap">
      <div
        v-for="category of [1, 2, 3]"
        :key="category"
        class="flex flex-col px-8 py-4"
      >
        <p class="category">Основная категория {{ category }}</p>
        <span
          v-for="subCategory of [1, 2, 3]"
          :key="subCategory"
          class="sub-category"
        >
          Подкатегория {{ subCategory }}
        </span>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Catalog",
  setup() {
    const state = reactive({
      catalogVisible: false,
    });

    const showCatalog = () => {
      state.catalogVisible = true;
    };
    const hideCatalog = () => {
      state.catalogVisible = false;
    };

    return { ...toRefs(state), showCatalog, hideCatalog };
  },
});
</script>

<style scoped>
.category {
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}

.category:hover {
  color: darkblue;
}

.sub-category {
  padding-top: 0.5rem;
  font-size: 18px;
  cursor: pointer;
}

.sub-category:hover {
  color: darkblue;
}
</style>
