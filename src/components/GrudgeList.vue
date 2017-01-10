<template>
  <div class="grudge-list">
    <li v-for='grudge in grudges'>
      <h3 class='reminder-title'>{{ grudge.name }}</h3>
      <!-- <span class='date-button'>
        <span class='reminder-dates'>
          <span class='due'>
            {{ formatDate(reminder.due) }}
          </span><br />
          <span class='due2'>
            {{ formatDate(reminder.alternateNotification) }}
          </span>
        </span>
        <button
          v-on:click='deleteReminder(reminder.id)'
          class='remove-button'
        >✖️</button>
      </span> -->
    </li>
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

</style>
