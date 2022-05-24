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

        <p>Характеристики</p>
        <div class="mb-4 w-full flex justify-between border-b-4 border-dotted">
          <p class="text-gray-500">Название</p>
          <p class="font-medium">Значение</p>
        </div>
        <div
          v-for="(infoRow, index) in newProduct.info"
          :key="index"
          class="flex justify-between mb-4"
        >
          <el-input v-model="infoRow.title" class="mr-40" />
          <el-input v-model="infoRow.description" />
        </div>
        <el-button @click="addInfoRow" circle class="mt-4 p-3">+</el-button>

        <el-form-item label="Сопутствующие товары" class="mt-4">
          <el-select
            v-model="newProduct.additionalProducts"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="Введите для поиска товара"
            :remote-method="() => {}"
            class="w-1/2"
          >
            <el-option label="Умная розетка" :value="1" />
          </el-select>
        </el-form-item>

        <el-form-item class="mt-4">
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
import { ElMessage } from "element-plus";

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
    addInfoRow() {
      this.newProduct.info.push({ title: "", description: "" });
    },

    setImg(uploadFile) {
      this.newProduct.img = uploadFile.raw;
    },

    createProduct() {
      this.$store
        .dispatch(ProductActions.CREATE_PRODUCT, this.newProduct)
        .then(() => {
          ElMessage({
            message: "Добавлено в избранное!",
            type: "success",
          });
        });
    },
  },
  mounted() {
    this.$store.dispatch(BrandActions.GET_ALL_BRANDS);
  },
});
</script>

<style scoped></style>
