<template>
  <div class="grudge-list">
    <ul>
      <li v-for='grudge in grudges'>
        <h3 class='offender-name'>{{ grudge.name }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: ['deleteGrudge', 'grudges'],
  methods: {
    formatDate(date) {
      if (date !== null) return moment(date).format('MMMM Do YYYY, h:mm');
      return '';
    },
  },
};
</script>

<style scoped>
  li {
    list-style: none;
  }
</style>
