<template>
  <div class="ml-4 border-l-2">
    <div class="flex justify-end items-center">
      <el-dropdown trigger="click">
        <p class="text-blue-500 cursor-pointer hover:bg-blue-50">
          {{ sortDropdown.orderName }} &darr;&uarr;
        </p>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="setSort(popular)"
              >Сначала популярные
            </el-dropdown-item>
            <el-dropdown-item @click="setSort(priceAsc)"
              >Сначала подешевле
            </el-dropdown-item>
            <el-dropdown-item @click="setSort(priceDesc)"
              >Сначала подороже
            </el-dropdown-item>
            <el-dropdown-item @click="setSort(rateDesc)"
              >Сначала с высоким рейтингом
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
    <div v-show="!isRowCardType" class="ml-8 mt-4 flex flex-wrap">
      <ProductCardMini
        v-for="product in products"
        :key="product.id"
        :product="product"
        class="mr-8 mb-4 w-56"
        style="min-width: 14rem"
      />
    </div>
    <div v-show="isRowCardType" class="ml-8 mt-4 flex flex-wrap">
      <ProductRow
        v-for="product in products"
        :key="product.id"
        :product="product"
        class="mb-4 w-full"
      />
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
import ProductRow from "@/components/ProductRow";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "ProductsBlock",
  components: {
    ProductCardMini,
    ProductRow,
  },
  props: {
    modelValue: {
      type: Object,
    },
    sortDropdown: {
      type: Object,
    },
  },
  emits: ["set-sorters", "update"],
  data: () => ({
    isRowCardType: false,
    params: null,
  }),
  computed: {
    ...mapGetters(["products", "allRowsCount"]),
    popular() {
      return {
        orderName: "Сначала популярные",
        orderBy: "popular",
        order: "DECS",
      };
    },
    priceDesc() {
      return {
        orderName: "Сначала подороже",
        orderBy: "price",
        order: "DECS",
      };
    },
    priceAsc() {
      return {
        orderName: "Сначала подешевле",
        orderBy: "price",
        order: "ASC",
      };
    },
    rateDesc() {
      return {
        orderName: "Сначала с высоким рейтингом",
        orderBy: "rate",
        order: "DESC",
      };
    },
  },
  methods: {
    setSort(sort) {
      this.$emit("set-sorters", sort);
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
