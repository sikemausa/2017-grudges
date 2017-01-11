<template>
  <div class="grudge-list">
    <ul>
      <li v-for='grudge in grudges'
        <h3 class='grudge-name'>
          <router-link
            :grudge="grudge"
            :to="{ name: 'jackal', params: {id: grudge.name } }">
            {{grudge.name}}
          </router-link>
        </h3>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['deleteGrudge', 'grudges'],
};
</script>

<style scoped>
  li {
    list-style: none;
  }
</style>
