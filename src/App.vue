<template>
  <div id="app" :class="{'darkMode' : darkMode}">
    <PeriodicTable/>
  </div>
</template>

<script>
import PeriodicTable from './components/PeriodicTable.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    PeriodicTable
  },
  computed: {
    ...mapGetters(['darkMode', 'lang']),
  }
}
</script>

