import Disk from 'o.disk'

let group = order => 
  (order < 3 ? 'first' :
    (order < 19 ? 'second' :
      (order < 91 ? 'body' : 'bottom')))
export default {
  state: {
    isPeriodLoading: true,
    darkMode: Disk.darkMode,
    lang: Disk.lang||'tr',
    Elements: {
      first: [],
      second: [],
      body: [],
      bottom: []
    }
  },
  getters: {
    types: state => state.types,
    darkMode: state => state.darkMode,
    lang: state => state.lang,
    Elements: state => state.Elements,
    isPeriodLoading: state => state.isPeriodLoading
  },
  mutations: {
    SET_ELEMENTS: (state, data) => {
      data.forEach(el =>
        state.Elements[ group(el.el_order) ]
          .push(el))
    },
    TOGGLE_DARK_MODE: (state) => {
      state.darkMode = Disk.darkMode=!state.darkMode
    },
    LANG_SWITCH(state, data){
      state.lang = this._vm.i18n.locale = data?data:(state.lang=='tr'?'en':'tr')
      Disk.lang = state.lang
      document.title=this._vm.i18n.messages[state.lang].UI.name
    }
    
  },
  actions: {
    getElements: async ({ state, commit }) =>  {
      try {
        let Elems = Disk.Elements
        // Yerel yığınakta var mı?
        if(Elems){
          commit('SET_ELEMENTS', Elems)
        }else{
          await fetch("https://periodic-table-10001.herokuapp.com/api/v1/elements")
            .then(res => res.json())
            .then(res => {
              commit('SET_ELEMENTS', res.data)
              // Yerel yığınağa yaz
              Disk.Elements = res.data
              Disk.expire('Elements',864e5) // 1 gün sonra geçersiz kıl
            })
        }
      } catch (error) {
          /* eslint-disable */
          console.log(error)
          /* eslint-disable-enabled */ 
        }
      finally {
        state.isPeriodLoading = false
      }
    }
  }
}