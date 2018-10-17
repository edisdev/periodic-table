<template>
  <section class="home">
    <div class="Loading" v-if="isLoading"> 
      PERİODİK Tablo Hazırlanıyor ... 
    </div>
    <template v-else>
      <div class="description">
        <div v-for="i in types" 
            :key="i.name"
            class="item"
            :class="`color-${i.id}`">
            {{ i.name }}
        </div>
      </div>
      <div class="periodictable">
        <button class="item"
        v-for="el in  Elements.first" 
        :key="el.name_small"
         @click="openModal(el)"
        :class="`color-${el.group_id}`">
          {{ el.name_small }}
          <span class="el_number">{{ el.number }}</span>
        </button>
    </div>
     <div class="periodictable">
        <button 
        type="button"
        class="item"
        v-for="el in  Elements.second" 
        :key="el.name_small"
        @click="openModal(el)"
        :class="[{'second': el.column === 1 }, `color-${el.group_id}`]">
          {{ el.name_small }}
          <span class="el_number">{{ el.number }}</span>
        </button>
     </div>
     <div class="periodictable">
        <button 
        type="button"
        class="item"
        @click="openModal(el)"
        v-for="el in  Elements.body" 
        :key="el.name_small"
        :class="`color-${el.group_id}`">
          {{ el.name_small }}
          <span class="el_number">{{ el.number }}</span>
        </button>
     </div>
     <div class="periodictable footer">
        <button 
        type="button"
        class="item" 
        v-for="el in  Elements.bottom"
        @click="openModal(el)"
        :key="el.name_small"
        :class="[{'x2' : el.column === 2, 'x': el.column === 16 }, `color-${el.group_id}`]">
          {{ el.name_small }}
          <span class="el_number">{{ el.number }}</span>
        </button>
     </div>
    </template>
    <footer class="footer" v-if="!isLoading">
       <div class="text">
          Periodic Table (v.0.1) By <a href="https://github.com/edisdev" target="_blank">#edisdev</a>
       </div>
    </footer>
    <modal :element="ModalData"
           v-if="showModal"
           @closeModal="closeModal"/>
  </section>
</template>

<script>
import Modal from './modal';

export default {
  name: "PeriodicTable",
  data() {
    return {
      showModal: false,
      Elements: {
        first: [],
        second: [],
        body: [],
        bottom: [],
        ModalData: []
      },
      types: [{
        id: 1,
        name: 'Ametal'
      },
      {
        id: 2,
        name: 'Alkali Metal'
      },
      {
        id: 3,
        name: 'Alkali Toprak Metal'
      },
      {
         id: 4,
        name: 'Geçiş Metali'
      },
      {
        id: 5,
        name: 'Metal'
      },
      {
        id: 6,
        name: 'Yarı Metal'
      },
      {
        id: 7,
        name: 'Halojen'
      }, 
      {
        id: 8,
        name: 'Soygaz'
      },
      {
        id: 9,
        name: 'Lantanit'
      },
      {
        id: 10,
        name: 'Actinide'
      }],
      isLoading: false
    };
  },
  components: {
    Modal
  },
  methods: {
    getElements() {
      this.isLoading = true;
      fetch("https://periodic-table-10001.herokuapp.com/api/v1/elements")
        .then(response => response.json())
        .then(res => {
          this.Elements.first = res.data.filter(item => item.el_order < 3);
          this.Elements.second = res.data.filter(
            item => item.el_order > 2 && item.el_order < 19
          );
          this.Elements.body = res.data.filter(
            item => item.el_order > 18 && item.el_order < 91
          );
          this.Elements.bottom = res.data.filter(item => item.el_order > 90);
          this.isLoading = false;
        });
    },
    openModal(element) {
      this.ModalData = element
      this.showModal = true
    },
    closeModal() {
      this.ModalData = []
      this.showModal = false
    }
  },
  async mounted() {
    this.getElements();
  }
};
</script>

<style>

.home {
  padding: 20px;
}
.periodictable.title {
 margin-bottom: 50px;
 justify-content: center;
 transform: translateX(-10%);
}
.periodictable {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 100vw;
  position: relative;
  justify-content: space-between;
}


.periodictable .item {
  width: var(--element-size);
  height: var(--element-size);
  margin: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0;
  border: 0;
  cursor: pointer;
  font-size: .9em;
  font-weight: bold;
  position: relative;
  color: #fff;
}

.periodictable .item .el_number {
  display: block;
  font-size: .6em;
  margin-top: 5px;
}

.description {
  position: absolute;
  left: calc(((var(--element-size) + 3px) * 2) + 30px);
  top: calc(((var(--element-size) + 2px)*2) - 30px);
  font-weight: bold;
  width: 100%;
  max-width: calc((var(--element-size) + 2px) * 10);
  display: flex;
  flex-wrap: wrap;
  z-index: 99;
}

.description .item {
  display: flex;
  align-items: center;
  width: 25%;
  margin-bottom: 10px;
  font-size: 10px;
}
.description .item::before {
  content: '';
  display: inline-block;
  width: 30px;
  height: 20px;
  margin-right: 5px;
}

.description .item.color-1::before {
  background: var(--non-matel);
}

.description .item.color-2::before {
  background: var(--alkal-metal)
}

.description .item.color-3::before {
  background: var(--alkaline-metal)
}

.description .item.color-4::before {
  background: var(--transition-metal);
}

.description .item.color-5::before {
  background: var(--metaloid);
}

.description .item.color-6::before {
  background: var(--metal);
}

.description .item.color-7::before {
  background: var(--halojen);
}

.description .item.color-8::before {
  background: var(--soygaz);
}

.description .item.color-9::before {
  background: var(--lantanit);
}

.description .item.color-10::before {
  background: var(--actinide);
}

/* //  */
.periodictable .item.color-1 {
  background: var(--non-matel);
}

.periodictable .item.color-2  {
  background: var(--alkal-metal);
}

.periodictable .item.color-3 {
  background: var(--alkaline-metal);
}

.periodictable .item.color-4 {
  background: var(--transition-metal);
}

.periodictable .item.color-5 {
  background: var(--metaloid);
}

.periodictable .item.color-6 {
  background: var(--metal);
}

.periodictable .item.color-7 {
  background: var(--halojen);
}

.periodictable .item.color-8 {
  background: var(--soygaz);
}

.periodictable .item.color-9 {
  background: var(--lantanit);
}

.periodictable .item.color-10 {
  background: var(--actinide);
}

.periodictable .item:focus {
  outline: 0;
}

.periodictable .item:hover {
  background: linear-gradient(to bottom, #b5bdc8 0%,#828c95 36%,#28343b 100%);
  transform-origin: center;
  transform: scale(1.5); 
  z-index: 9999;
  color: #fff;

}


.periodictable .item.second{
  margin-right: calc((var(--element-size) + 3px) * 10);
}

.periodictable.footer {
  margin-top: 20px;
}

.periodictable.footer .item.x2 {
  margin-left: calc((var(--element-size) + 2px) * 2);
}

.periodictable.footer .item.x {
  margin-right: calc((var(--element-size) + 2px));
}

.footer {
  margin-top: 12px;
  text-align: center;
}
.footer .text  {
  font-size: 15px
}

.footer .text a {
  color: #000;
  font-weight: bold;
}

</style>
