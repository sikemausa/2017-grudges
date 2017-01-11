<template>
  <div class="jackal-stats">
    <h3>Name: {{ grudge }}</h3>
    <!-- <h3>Offense: {{ unforgivenCount }}</h3>
    <h3>Forgive: {{ forgivenCount }}</h3> -->
  </div>
</template>

<script>

export default {
  props: ['grudge'],
};
</script>

<style scoped>
  li {
    list-style: none;
  }
</style>
