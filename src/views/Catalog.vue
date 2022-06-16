<template>
  <el-dialog v-model="catalogVisible" fullscreen>
    <template #title>
      <p class="font-bold text-2xl" style="color: #606266">Каталог</p>
    </template>

    <div class="flex flex-wrap">
      <div
        v-for="category of categories"
        :key="category.id"
        @click="showCategoryProducts(category.id)"
        class="flex flex-col px-8 py-4"
      >
        <p class="category">{{ category.name }}</p>
        <span class="sub-category">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
          ullam?
        </span>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import $api from "@/api";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Catalog",
  setup() {
    const router = useRouter();
    const state = reactive({
      catalogVisible: false,
      categories: [],
    });

    const showCatalog = async () => {
      state.catalogVisible = true;
      await $api.get("category").then((res) => (state.categories = res.data));
    };
    const hideCatalog = () => {
      state.catalogVisible = false;
    };

    const showCategoryProducts = (categoryId: number) => {
      hideCatalog();
      router.push({ path: "/product", query: { categoryId } });
    };

    return { ...toRefs(state), showCatalog, hideCatalog, showCategoryProducts };
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
}
</style>
