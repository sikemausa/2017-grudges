<template>
  <div class="add-grudge">
    <form>
      <input type="text" placeholder="Wrongdoer's name">
      <textArea placeholder="Wrongdoer's offense"></textArea>
      <input
        type='datetime-local'
        max = '9999-12-31T23:59:59'>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      dateAdded: null,
      offense: '',
    };
  },
};
</script>

<style scoped>
textarea {
  resize: none;
}
</style>
