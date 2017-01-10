<template>
  <div class="grudge-list">

  </div>
</template>

<script>
export default {
  props: ['deleteGrudge', 'grudges'],
  methods: {
  formatDate(date) {
    if (date !== null) return moment(date).format('MMMM Do YYYY, h:mm');
    else return '';
  },
};
</script>

<style scoped>

</style>
