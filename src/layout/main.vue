<template>
  <div v-if="!error">
    <navbar />
    <div class="container p-5">
      <app-main />
    </div>
  </div>
  <Error :error="error" v-else />
</template>

<script>
import { Navbar, AppMain } from "./components";
import { mapGetters } from "vuex";
import Error from "./error.vue";

export default {
  name: "Layout",
  components: {
    Navbar,
    AppMain,
    Error,
  },
  computed: {
    ...mapGetters({
      error: "error",
    }),
  },
};
</script>
