<template>
  <section>
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view :key="key"/>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'appmain',
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>
