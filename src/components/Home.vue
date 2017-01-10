<template>
  <div class="home">
    <h1>Hello!</h1>
    <h2>{{ msg }}</h2>
    <button><router-link to="/List">PropogHate</router-link></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello! This sordid application is designed to propogate hate by enahncing your recall of acts that have wronged you. Proceed by clicking the sinister button below.',
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 3em;
  color: #42b983;
  text-align: center;
}
h2 {
  text-align: center;
}
</style>
