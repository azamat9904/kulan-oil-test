<template>
  <div>
    <navbar/>
    <div class="container p-5">
      <app-main/>
    </div>
  </div>
</template>

<script>
import {Navbar, AppMain} from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain
  }
}
</script>
