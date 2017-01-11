<template>
  <div class="grudge-list">
    <add-grudge
      :addGrudge = 'addGrudge'
    ></add-grudge>
    <grudge-stats
      :offenderCount = 'offenderCount'
      :unforgivenCount = 'unforgivenCount'
      :forgivenCount = 'forgivenCount'
    ></grudge-stats>
    <grudge-list
      :grudges = 'grudges'
      :deleteGrudge = 'deleteGrudge'
    ></grudge-list>
  </div>
</template>

<script>
import AddGrudge from './AddGrudge';
import GrudgeList from './GrudgeList';
import GrudgeStats from './GrudgeStats';

export default {
  onCreated() {
    this.getGrudgeStats();
  },
  components: {
    AddGrudge,
    GrudgeList,
    GrudgeStats,
  },
  data() {
    return {
      grudges: [],
      offenderCount: null,
      unforgivenCount: null,
      forgivenCount: null,
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
      this.getGrudgeStats();
    },
    deleteGrudge(id) {
      for (let i = 0; i < this.grudges.length; i++) {
        if (this.grudges[i].id === id) {
          this.grudges.splice(i, 1);
        }
      }
      this.getGrudgeStats();
    },
    getGrudgeStats() {
      let unforgivenCount = null;
      for (let i = 0; i < this.grudges.length; i++) {
        if (this.grudges[i].forgiven === false) {
          unforgivenCount++;
        }
      }
      this.unforgivenCount = unforgivenCount;
      this.offenderCount = this.grudges.length;
      this.forgivenCount = this.grudges.length - unforgivenCount;
    },
  },
};
</script>

<style scoped>
</style>
