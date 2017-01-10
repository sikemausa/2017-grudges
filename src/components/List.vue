<template>
  <div class="grudge-list">
    <add-grudge></add-grudge>
  </div>
</template>

<script>
import AddGrudge from './AddGrudge';

export default {
  components: {
    AddGrudge,
  },
  data() {
    return {
      grudges: [],
    };
  },
};
</script>

<style scoped>
</style>
