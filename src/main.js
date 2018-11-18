import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import store from './Store/store'
import '@/assets/index.scss';
import dil from '@/dil'
import Disk from 'o.disk'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: Disk.lang|| 'tr',
  messages: dil
})

Vue.prototype.i18n = i18n

new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
