export default {
  state: {
    types: [{
      id: 1,
      name: 'Ametal',
      totalElements: 0
    },
    {
      id: 2,
      name: 'Alkali Metal',
      totalElements: 0
    },
    {
      id: 3,
      name: 'Alkali Toprak Metal',
      totalElements: 0
    },
    {
      id: 4,
      name: 'Geçiş Metali',
      totalElements: 0
    },
    {
      id: 5,
      name: 'Metal',
      totalElements: 0
    },
    {
      id: 6,
      name: 'Yarı Metal',
      totalElements: 0
    },
    {
      id: 7,
      name: 'Halojen',
      totalElements: 0
    },
    {
      id: 8,
      name: 'Soygaz',
      totalElements: 0
    },
    {
      id: 9,
      name: 'Lantanit',
      totalElements: 0
    },
    {
      id: 10,
      name: 'Actinide',
      totalElements: 0
    }],
    isPeriodLoading: true,
    darkMode: true,
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
    Elements: state => state.Elements,
    isPeriodLoading: state => state.isPeriodLoading
  },
  mutations: {
    SET_ELEMENTS: (state, data) => {
      state.Elements.first = data.filter(item => item.el_order < 3);
      state.Elements.second = data.filter(item => item.el_order > 2 && item.el_order < 19);
      state.Elements.body = data.filter(item => item.el_order > 18 && item.el_order < 91);
      state.Elements.bottom = data.filter(item => item.el_order > 90);
    },
    TOGGLE_DARK_MODE: (state) => {
      state.darkMode = !state.darkMode
    }
  },
  actions: {
    getElements: async ({ state, commit }) =>  {
      try {
        await fetch("https://periodic-table-10001.herokuapp.com/api/v1/elements")
        .then(res => res.json())
        .then(res => {
          commit('SET_ELEMENTS', res.data)
        })
        .then(() => {
          state.types.map(group => {
            Object.keys(state.Elements).filter(key => {
              const countOfElements = state.Elements[key].filter(el => el.group_id === group.id).length;
              group.totalElements += countOfElements;
            });

            if (group.id === 9 || group.id === 10)
              group.totalElements--;
          });
        })
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