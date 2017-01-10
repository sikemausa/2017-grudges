<template>
  <div class="grudge-list">
    <add-grudge
      :addGrudge = 'addGrudge'
    ></add-grudge>
    <grudge-list
      :grudges = 'grudges'
      :deleteGrudge = 'deleteGrudge'
    ></grudge-list>
  </div>
</template>

<script>
import AddGrudge from './AddGrudge';
import GrudgeList from './GrudgeList';

export default {
  components: {
    AddGrudge,
    GrudgeList,
  },
  data() {
    return {
      grudges: [],
    };
  },
  methods: {
  //   get() {
  //     axios.get('/grudges').then((response) => {
  //       console.log(response);
  //       this.grudges.push(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   },
  //   post(dateAdded, name, offense, e) {
  //     e.preventDefault();
  //     axios.post('/grudges', {
  //       id: md5(name),
  //       dateAdded,
  //       name,
  //       offense,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //     this.get();
  //   },
  // },
    addGrudge(dateAdded, name, offense, e) {
      e.preventDefault();
      this.grudges.push({
        id: Date.now(),
        dateAdded,
        name,
        offense,
        forgiven: false });
      console.log(this.grudges);
    },
    deleteGrudge(id) {
      for (let i = 0; i < this.grudges.length; i++) {
        if (this.grudges[i].id === id) {
          this.grudges.splice(i, 1);
        }
      }
    },
  },
};
</script>

<style scoped>
</style>
