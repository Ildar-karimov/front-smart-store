<template>
  <div class="">
    <el-breadcrumb class="p-8 pb-4 bg-gray-100">
      <el-breadcrumb-item :to="{ path: '/' }" class="text-base">
        Главная
      </el-breadcrumb-item>
      <el-breadcrumb-item class="text-base">
        {{ isUserAdmin ? "" : "Мои " }}Заказы
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="flex justify-center px-8 pt-4 pb-8 bg-white">
      <el-empty v-if="orders.length === 0" description="Заказов нет" />
      <div v-else class="ml-8 w-full mt-4 flex flex-col">
        <div
          v-for="order in orders"
          :key="order.id"
          class="flex rounded border mb-2 p-2"
        >
          <div class="">
            <p>Заказ №{{ order.id }}</p>
            <p
              class="font-bold"
              :class="{
                'text-green-500': order.status === 3,
                'text-yellow-500': order.status === 1,
                'text-blue-500': order.status === 2,
              }"
            >
              Статус: {{ getOrderStatusName(order.status) }}
            </p>
            <p>Товаров: {{ order.products.length }}</p>
            <el-button
              v-if="order.status === 1 && isUserAdmin"
              @click="changeOrderStatus(order.id, 2)"
              type="primary"
            >
              Готов к выдаче
            </el-button>
            <el-button
              v-if="order.status === 2 && isUserAdmin"
              @click="changeOrderStatus(order.id, 3)"
              type="success"
            >
              Завершить заказ
            </el-button>
          </div>
          <div class="flex ml-4">
            <ProductCardMini
              v-for="product in order.products"
              :key="product.id"
              :product="product"
              disable-panel
              class="mr-4 w-40"
              style="min-width: 10rem"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { userRoles } from "@/store/types";
import { BasketActions } from "@/store/modules/basket/actions";
import ProductCardMini from "@/components/ProductCardMini";
import { ElMessage } from "element-plus";

export default defineComponent({
  name: "Orders",
  components: {
    ProductCardMini,
  },
  data: () => ({
    orders: [],
  }),
  computed: {
    isUserAdmin() {
      return this.$store.getters.isGranted(userRoles.ADMIN);
    },
  },
  methods: {
    getOrderStatusName(code) {
      if (code === 1) return "Обрабатывается";
      if (code === 2) return "Готов к выдаче";
      if (code === 3) return "Завершен";
      return "не известен";
    },

    changeOrderStatus(orderId, statusCode) {
      this.$store
        .dispatch(BasketActions.CHANGE_ORDER_STATUS, {
          orderId,
          statusCode,
        })
        .then(() => {
          ElMessage("Статус изменен");
          this.updateOrders();
        });
    },

    updateOrders() {
      if (this.isUserAdmin) {
        this.$store
          .dispatch(BasketActions.GET_ALL_ORDERS)
          .then(
            (res) =>
              (this.orders = res.data.sort((a, b) => a.status - b.status))
          );
      } else
        this.$store
          .dispatch(BasketActions.GET_USER_ORDERS)
          .then(
            (res) =>
              (this.orders = res.data.sort((a, b) => a.status - b.status))
          );
    },
  },
  mounted() {
    this.updateOrders();
  },
});
</script>

<style scoped></style>
