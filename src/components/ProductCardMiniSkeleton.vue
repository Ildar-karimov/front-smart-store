<template>
  <div class="">
    <el-skeleton animated>
      <template #template>
        <el-skeleton-item variant="image" style="height: 12rem" />
        <div class="mt-2">
          <el-skeleton-item variant="p" style="width: 50%" />
          <el-skeleton-item variant="p" class="w-full" />
          <el-skeleton-item variant="p" style="width: 50%" />
          <div class="flex">
            <el-skeleton-item variant="button" style="width: 50%" />
            <el-skeleton-item
              variant="button"
              style="width: 50%"
              class="ml-2"
            />
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<script>
export default {
  name: "ProductCardMiniSkeleton",
};
</script>

<style scoped></style>
