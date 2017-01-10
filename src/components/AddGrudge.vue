<template>
  <div class="add-grudge">
    <form>
      <input type="text"
             placeholder="Wrongdoer's name"
             v-model="name">
      <textArea
        placeholder="Wrongdoer's offense"
        v-model='offense'
      ></textArea>
      <input
        type='datetime-local'
        max = '9999-12-31T23:59:59'
        v-model = 'dateAdded'>
      <button v-on:click='addGrudge(dateAdded, name, offense, e)'>
        Damn this person until further notice!
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['addGrudge'],
  data() {
    return {
      dateAdded: null,
      name: '',
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
