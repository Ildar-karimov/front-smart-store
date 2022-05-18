<template>
  <div class="ml-4 border-l-2">
    <div class="flex justify-end items-center">
      <el-dropdown trigger="click">
        <p class="text-blue-500 cursor-pointer hover:bg-blue-50">
          {{ selectedSortName }} &darr;&uarr;
        </p>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="(sorter, index) in sorters"
              :key="index"
              @click="setSort(sorter)"
            >
              {{ sorter.orderName }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-switch
        v-model="isRowCardType"
        class="ml-6"
        active-text="строка"
        inactive-text="карточки"
      />
    </div>
    <div v-show="!isRowCardType">
      <div v-if="productsLoading !== 2" class="ml-8 mt-4 flex flex-wrap">
        <ProductCardMiniSkeleton
          v-for="i in 4"
          :key="i"
          class="mr-8 mb-4 w-56"
          style="min-width: 14rem"
        />
      </div>
      <el-empty
        v-else-if="productsLoading === 2 && products.length === 0"
        description="По вашему запросу ничего не найдено"
      />
      <div v-else class="ml-8 mt-4 flex flex-wrap">
        <ProductCardMini
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="mr-8 mb-4 w-56"
          style="min-width: 14rem"
        />
      </div>
    </div>
    <div v-show="isRowCardType">
      <el-skeleton v-if="productsLoading !== 2" :rows="20" animated />
      <el-empty
        v-else-if="productsLoading === 2 && products.length === 0"
        description="По вашему запросу ничего не найдено"
      />
      <div v-else class="ml-8 mt-4 flex flex-wrap">
        <ProductRow
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="mb-4 w-full"
        />
      </div>
    </div>
    <div v-if="allRowsCount" class="flex justify-center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="allRowsCount"
        v-model:current-page="params.currentPage"
        @current-change="$emit('update')"
        hide-on-single-page
        :page-size="params.rowsOnPageCount"
        class=""
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ProductCardMini from "@/components/ProductCardMini";
import ProductCardMiniSkeleton from "@/components/ProductCardMiniSkeleton";
import ProductRow from "@/components/ProductRow";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "ProductsBlock",
  components: {
    ProductCardMini,
    ProductRow,
    ProductCardMiniSkeleton,
  },
  props: {
    modelValue: {
      type: Object,
    },
  },
  emits: ["update"],
  data: () => ({
    isRowCardType: false,
    params: null,

    selectedSortName: "Сначала подешевле",
  }),
  computed: {
    ...mapGetters(["products", "allRowsCount", "productsLoading"]),
    sorters() {
      return [
        // {
        //   orderName: "Сначала популярные",
        //   orderBy: "popular",
        //   order: "DESC",
        // },
        {
          orderName: "Сначала подороже",
          orderBy: "price",
          order: "DESC",
        },
        {
          orderName: "Сначала подешевле",
          orderBy: "price",
          order: "ASC",
        },
        // {
        //   orderName: "Сначала с высоким рейтингом",
        //   orderBy: "rate",
        //   order: "DESC",
        // },
      ];
    },
  },
  methods: {
    setSort(sort) {
      this.params.order = sort.order;
      this.params.orderBy = sort.orderBy;

      this.selectedSortName = sort.orderName;
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
