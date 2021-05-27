<template>
  <div>
    <form>
      <fieldset>
        <div class="form-group">
          <label for="title" class="col-sm-2 col-form-label">Title</label>
          <input type="text" class="form-control" id="title" aria-describedby="title" placeholder="Enter post title">
        </div>
        <div class="form-group">
          <label for="body" class="form-label mt-4">Body</label>
          <textarea class="form-control" id="body" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary mt-2">Submit</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: "form.vue"
}
</script>

<style scoped>

</style>
