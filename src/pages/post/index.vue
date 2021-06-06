<template>
  <div class="post-list">
    <div class="post-list__cards" v-if="!isLoading">
      <div class="post-list__content" v-if="renderedPosts.length > 0">
        <BaseCard
          v-for="post in renderedPosts"
          :key="post.id"
          :card="post"
          @deleted="onDeleted(post.id)"
        />
        <BasePagination
          class="d-flex justify-content-center"
          :count="paginationCount"
          :active="activePagination"
        />
      </div>
      <div class="post-list__empty" v-else>Нет постов</div>
    </div>
    <div class="post-list__loading" v-else>
      <BaseLoader />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "index",
  data() {
    return {
      paginationCount: 0,
      paginationPerPage: 10,
      activePagination: 1,
    };
  },
  methods: {
    ...mapActions({
      fetchPosts: "post/fetchPosts",
      deletePost: "post/deletePost",
    }),
    async onDeleted(id) {
      const deletePost = confirm("Вы точно хотите удалить пост ?");
      if (!deletePost) return;
      await this.deletePost(id);
    },
  },
  computed: {
    ...mapGetters({
      isLoading: "post/isLoading",
      posts: "post/posts",
    }),
    renderedPosts() {
      this.paginationCount = Math.ceil(
        this.posts.length / this.paginationPerPage
      );
      let page = Number(this.$route.query.page);

      if (page > 0 && page <= this.paginationCount) {
        this.activePagination = page;
      } else {
        this.activePagination = 1;
      }
      const paginationStart =
        (this.activePagination - 1) * this.paginationPerPage;
      const paginationEnd =
        this.activePagination * this.paginationPerPage > this.posts.length
          ? this.posts.length
          : this.activePagination * this.paginationPerPage;

      return this.posts.slice(paginationStart, paginationEnd);
    },
  },
  async created() {
    await this.fetchPosts();
  },
};
</script>

<style lang="scss" scoped>
.post-list {
  &__empty {
    text-align: center;
    color: rgb(202, 202, 202);
    font-weight: 500;
  }
}
</style>
