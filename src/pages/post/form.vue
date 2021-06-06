<template>
  <div>
    <form v-if="!isLoading">
      <fieldset>
        <div class="form-group">
          <label for="title" class="col-sm-2 col-form-label">Заголовок</label>
          <input
            type="text"
            class="form-control"
            id="title"
            aria-describedby="title"
            placeholder="Enter post title"
            v-model="$v.post.title.$model"
          />
        </div>
        <div class="form-group">
          <label for="body" class="form-label mt-4">Текст</label>
          <textarea
            class="form-control"
            id="body"
            rows="10"
            v-model="$v.post.content.$model"
          ></textarea>
        </div>
        <button
          type="button"
          class="btn btn-primary mt-2"
          @click="onClick"
          :disabled="$v.$invalid"
        >
          {{ isEditMode ? "Редактировать" : "Добавить" }}
        </button>
      </fieldset>
    </form>
    <BaseLoader v-else />
  </div>
</template>

<script>
import { getPostById } from "@/api/post";
import { mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";

export default {
  name: "form.vue",
  data() {
    return {
      isEditMode: null,
      post: {
        title: "",
        content: "",
      },
      isLoading: false,
    };
  },
  validations: {
    post: {
      title: {
        required,
      },
      content: {
        required,
      },
    },
  },
  async created() {
    this.isEditMode = this.$route.meta.isEdit;
    if (this.isEditMode) {
      this.isLoading = true;
      const { data } = await getPostById(this.$route.params.id);
      this.isLoading = false;
      this.post = {
        title: data.title,
        content: data.body,
      };
    }
  },
  methods: {
    ...mapActions({
      addPost: "post/addPost",
      updatePost: "post/editPost",
    }),
    async onClick() {
      if (!this.isEditMode) {
        await this.addPost({
          title: this.post.title,
          body: this.post.content,
          userId: 1,
        });
        this.$notification.success("Пост успешно добавлен!");
        this.post = {
          title: "",
          content: "",
        };
      } else {
        await this.updatePost({
          id: this.$route.params.id,
          title: this.post.title,
          body: this.post.content,
          userId: 1,
        });
        this.$notification.success("Пост успешно обновлен!");
        this.$router.push({ name: "posts" });
      }
    },
  },
};
</script>

<style scoped>
</style>
