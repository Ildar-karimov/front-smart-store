<template>
  <div class="ml-4 border-l-2">
    <div class="flex justify-end items-center">
      <el-dropdown trigger="click">
        <p class="text-blue-500 cursor-pointer hover:bg-blue-50">
          {{ params.orderName }} &darr;&uarr;
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
    <div v-if="!isRowCardType" class="ml-8 mt-4 flex flex-wrap">
      <ProductCardMini
        v-for="i in 10"
        :key="i"
        class="mr-8 mb-4 w-56"
        style="min-width: 14rem"
      />
    </div>
    <div v-else class="ml-8 mt-4 flex flex-wrap">
      <ProductRow v-for="i in 10" :key="i" class="mb-4 w-full" />
    </div>
    <div class="flex justify-center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        class=""
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import row from "../../assets/vector/row.svg";
import card from "../../assets/vector/card.svg";
import ProductCardMini from "@/components/ProductCardMini";
import ProductRow from "@/components/ProductRow";

export default defineComponent({
  name: "ProductsBlock",
  components: {
    ProductCardMini,
    ProductRow,
  },
  props: {
    params: {
      type: Object,
    },
  },
  emits: ["set-sorters"],
  data: () => ({
    isRowCardType: false,
  }),
  computed: {
    rowSvg() {
      return row;
    },
    cardSvg() {
      return card;
    },
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
});
</script>

<style scoped></style>
