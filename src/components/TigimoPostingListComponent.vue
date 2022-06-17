<template>
  <div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
    <div v-for="posting in postings" class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24">
      {{ posting.title }}
    </div>
  </div>
</template>

<script>

export default {
  name: "TigimoPostingListComponent",
  data() {
    return {
      postings: []
    }
  }
}
</script>

<style scoped>

</style>