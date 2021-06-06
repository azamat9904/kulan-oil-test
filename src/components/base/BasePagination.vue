<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li
        class="page-item"
        v-for="(paginationItem, index) in count"
        :class="{ active: active == index + 1 }"
        :key="index"
      >
        <router-link
          class="page-link"
          :to="{ name: 'posts', query: { page: index + 1 } }"
        >
          {{ paginationItem }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    count: {
      type: Number,
      required: true,
    },
    active: {
      type: Number,
      default: 1,
    },
  },
};
</script>