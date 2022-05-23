<template>
  <div class="">
    <el-breadcrumb class="p-8 pb-4 bg-gray-100">
      <el-breadcrumb-item :to="{ path: '/' }" class="text-base">
        Главная
      </el-breadcrumb-item>
      <el-breadcrumb-item class="text-base"> Создать товар</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="flex justify-center px-8 pt-4 pb-8 bg-white">
      <el-form label-position="top" :model="newProduct" class="w-1/2">
        <el-form-item label="Название">
          <el-input v-model="newProduct.name" />
        </el-form-item>
        <el-form-item label="Цена(₽)">
          <el-input v-model.number="newProduct.price" />
        </el-form-item>
        <el-form-item label="Количество">
          <el-input v-model.number="newProduct.count" />
        </el-form-item>
        <el-form-item label="Бренд">
          <el-select
            v-model="newProduct.brandId"
            placeholder="Выберите бренд"
            class="min-w-full"
          >
            <el-option
              v-for="brand in brands"
              :key="brand.id"
              :label="brand.name"
              :value="brand.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Загрузите изображение">
          <el-upload
            ref="uploadImg"
            :on-change="setImg"
            class="avatar-uploader"
            :auto-upload="false"
            list-type="picture-card"
            :limit="1"
          >
            <div class="">+</div>
          </el-upload>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="createProduct">
            Создать товар
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { BrandActions } from "@/store/modules/brand/actions";
import { ProductActions } from "@/store/modules/product/actions";

export default defineComponent({
  name: "CreateProductPage",
  data: () => ({
    newProduct: {
      name: "",
      price: null,
      count: null,
      brandId: "",
      img: null,
      info: [],
      additionalProducts: [],
    },
  }),
  computed: {
    ...mapGetters(["brands"]),
  },
  methods: {
    setImg(uploadFile) {
      this.newProduct.img = uploadFile.raw;
    },

    createProduct() {
      this.$store.dispatch(ProductActions.CREATE_PRODUCT, this.newProduct);
    },
  },
  mounted() {
    this.$store.dispatch(BrandActions.GET_ALL_BRANDS);
  },
});
</script>

<style scoped></style>
