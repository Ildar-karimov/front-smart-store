<template>
  <div class="flex justify-between py-2 px-6 rounded border-2 shadow">
    <el-skeleton animated>
      <template #template>
        <div class="flex">
          <el-skeleton-item
            variant="image"
            style="height: 14rem; width: 14rem"
          />
          <div class="ml-8">
            <el-skeleton-item variant="p" style="width: 8rem" />
            <el-skeleton-item variant="p" style="width: 8rem" />
          </div>
        </div>
        <div class="flex flex-col justify-between">
          <el-skeleton-item variant="p" style="width: 8rem" />
          <div class="flex mb-4">
            <el-skeleton-item variant="button" style="width: 10rem" />
            <el-skeleton-item
              variant="button"
              class="ml-4"
              style="width: 10rem"
            />
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<script>
export default {
  name: "ProductRowSceleton",
};
</script>

<style scoped></style>
