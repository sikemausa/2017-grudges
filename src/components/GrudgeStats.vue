<template>
  <div class="grudge-stats">
    <h3>Number of wrong doers: {{ offenderCount }}</h3>
    <h3>Number of unforgiven: {{ unforgivenCount }}</h3>
    <h3>Number of forgiven: {{ forgivenCount }}</h3>
  </div>
</template>

<script>

export default {
  props: ['offenderCount', 'unforgivenCount', 'forgivenCount'],
};
</script>

<style scoped>
  li {
    list-style: none;
  }
</style>
