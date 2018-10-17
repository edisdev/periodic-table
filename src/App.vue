<template>
  <div id="app">
    <PeriodicTable/>
  </div>
</template>

<script>
import PeriodicTable from './components/PeriodicTable.vue'

export default {
  name: 'app',
  components: {
    PeriodicTable
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&subset=latin-ext');
@import url('https://fonts.googleapis.com/css?family=Indie+Flower');
:root {
  --element-size: calc((100vw - 92px) / 18);
  --non-matel: #4BC42F;
  --alkal-metal: #E8593D;
  --alkaline-metal: #F2A000;
  --transition-metal: #F2C201;
  --metaloid: #BBC42F;
  --metal: #31BBA0;
  --halojen: #22B6E0;
  --soygaz: #2089FF;
  --lantanit: #D887D9;
  --actinide: #B186D9;
}
button:focus {
  outline: 0;
}
#app {
  font-family: 'Open Sans', sans-serif;
  background: rgba(156, 39, 176, 0.05);
  min-height: 100vh;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0
}

.Loading {
  display: flex;
  height: 88vh;
  justify-content: center;
  align-items: center;
  animation: color-change 20s infinite;
  font-size: 3em;
  font-weight: bold;
  font-family: 'Indie Flower', cursive;
}

@keyframes color-change {
  0% { 
    color: var(--non-matel);
    }
  10% { color: var(--alkal-metal); }
  20% { color: var(--alkaline-metal); }
  30% { color: var(--transition-metal); }
  40% { color: var(--metaloid); }
  50% { 
    color: var(--metal);
  }
  60% { color: var(--halojen); }
  70% { color: var(--soygaz); }
  80% { color: var(--lantanit); }
  90% { color: var(--actinide); }
  100% { color: var(--non-matel); 
  }
}
</style>
