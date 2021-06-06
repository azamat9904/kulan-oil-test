<template>
  <div class="container mt-3">
    <div class="alert alert-danger">{{ error }}</div>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: String,
      default: "Случилась какая та ошибка",
    },
  },
};
</script>