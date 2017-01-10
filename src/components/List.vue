<template>
  <div class="grudge-list">
    <add-grudge
      :addGrudge = 'addGrudge'
    ></add-grudge>
  </div>
</template>

<script>
import AddGrudge from './AddGrudge';

export default {
  components: {
    AddGrudge,
  },
  created() {
    
  },
  data() {
    return {
      grudges: [],
    };
  },
  // addGrudge(dateAdded, name, offense, e) {
  //     e.preventDefault();
  //     database('reminders').insert({
  //       dateAdded, name, offense })
  //       .catch(error => console.log(error));
  //   },
};
</script>

<style scoped>
</style>
