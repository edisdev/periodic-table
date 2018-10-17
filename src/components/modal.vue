<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container"
             :class="`color-${element.group_id}`">

          <div class="modal-header">
            <button 
            class="modal-default-button"
            :class="`color-${element.group_id}`" 
            @click="$emit('closeModal')">
              x
            </button>
          </div>

          <div class="modal-body">
            <div class="info"
            :class="{'small-size' : element.molar === null }">
              <div class="head">
                <h3 class="name_tr">{{ element.name_tr }}</h3>
                <h3 class="group_name">{{ element.group_name }}</h3>
              </div>
              <h1 class="name_small">{{ element.name_small }}</h1>
              <div class="detail">
                <h5 class="molar">
                  {{ element.molar }}
                  <em> g / mol</em>
                </h5>
                <h5 class="number" 
                :class="`color-${element.group_id}`">
                  {{ element.number }}</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  data() {
    return {
      isOpenedModel: false
    }
  },
  methods: {
    closeTrigger() {
      this.$emit('closeModal')
    }
  },
  mounted() {
    window.addEventListener('click', (e) => {
      const el = e.target.closest('.modal-container')
      if (!el) { this.$emit('closeModal') }
    })
  }
}
</script>


<style>
.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 700px;
  height: 100%;
  max-height: 500px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  position: relative;
  color: #fff;
  padding: 20px;
}

.modal-body {
  width: 100%;
  height: 100%;
  border: 2px solid rgba(255, 255, 255, .5);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  position: relative;
}

.modal-body .info .name_tr , .modal-body .info  .group_name{
  font-size: 2em;
}

.modal-body .info .name_small {
  font-size: 13em;
  text-align: center;
}
.modal-body .info.small-size .name_small{
  font-size: 9em;
}

.modal-body .info .detail {
  display: flex;
}
.modal-body .head {
  display: flex;
  justify-content: space-between;
}
.modal-body .info .detail .number {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 20px;
  background: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 2.5em;
  overflow: hidden;
  width: 170px;
  height: 170px;
}

.modal-body .info.small-size .detail .number{
  font-size: 1.9em;
}


.modal-body .info .detail .number::after {
  content: "";
  position: absolute;
  width: 290px;
  height: 125px;
  transform: rotate(-45deg);
  top: 0;
  right: -2px;
  box-shadow: -1px -1px 10px -2px rgba(0,0,0,0.5);
}

.modal-body .info .detail .number.color-1::after {
  background: var(--non-matel);
}

.modal-body .info .detail .number.color-2::after {
  background: var(--alkal-metal);
}

.modal-body .info .detail .number.color-3::after {
  background: var(--alkaline-metal);
}

.modal-body .info .detail .number.color-4::after {
  background: var(--transition-metal);
}

.modal-body .info .detail .number.color-5::after {
  background: var(--metaloid);
}

.modal-body .info .detail .number.color-6::after {
  background: var(--metal);
}

.modal-body .info .detail .number.color-7::after {
  background: var(--halojen);
}

.modal-body .info .detail .number.color-8::after {
  background: var(--soygaz);
}

.modal-body .info .detail .number.color-9::after {
  background: var(--lantanit);
}

.modal-body .info .detail .number.color-10::after {
  background: var(--actinide);
}

.modal-body .info .detail .number.color-1 {
  color: var(--non-matel);
}

.modal-body .info .detail .number.color-2  {
  color: var(--alkal-metal);
}

.modal-body .info .detail .number.color-3 {
  color: var(--alkaline-metal);
}

.modal-body .info .detail .number.color-4 {
  color: var(--transition-metal);
}

.modal-body .info .detail .number.color-5 {
  color: var(--metaloid);
}

.modal-body .info .detail .number.color-6 {
  color: var(--metal);
}

.modal-body .info .detail .number.color-7 {
  color: var(--halojen);
}

.modal-body .info .detail .number.color-8 {
  color: var(--soygaz);
}

.modal-body .info .detail .number.color-9 {
  color: var(--lantanit);
}

.modal-body .info .detail .number.color-10 {
  color: var(--actinide);
}


.modal-body .info .detail .molar {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 20px;
  font-size: 2.5em;
}
.modal-body .info .detail .molar em {
  font-size: 15px;
}

.modal-container.color-1 {
  background: var(--non-matel);
}

.modal-container.color-2  {
  background: var(--alkal-metal);
}

.modal-container.color-3 {
  background: var(--alkaline-metal);
}

.modal-container.color-4 {
  background: var(--transition-metal);
}

.modal-container.color-5 {
  background: var(--metaloid);
}

.modal-container.color-6 {
  background: var(--metal);
}

.modal-container.color-7 {
  background: var(--halojen);
}

.modal-container.color-8 {
  background: var(--soygaz);
}

.modal-container.color-9 {
  background: var(--lantanit);
}

.modal-container.color-10 {
  background: var(--actinide);
}


.modal-default-button {
  position: absolute;
  top: -50px;
  right: -25px;
  font-weight: bold;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  border: 2px solid currentColor;
}

.modal-default-button.color-1 {
  color: var(--non-matel);
}

.modal-default-button.color-2  {
  color: var(--alkal-metal);
}

.modal-default-button.color-3 {
  color: var(--alkaline-metal);
}

.modal-default-button.color-4 {
  color: var(--transition-metal);
}

.modal-default-button.color-5 {
  color: var(--metaloid);
}

.modal-default-button.color-6 {
  color: var(--metal);
}

.modal-default-button.color-7 {
  color: var(--halojen);
}

.modal-default-button.color-8 {
  color: var(--soygaz);
}

.modal-default-button.color-9 {
  color: var(--lantanit);
}

.modal-default-button.color-10 {
  color: var(--actinide);
}

.modal-default-button:hover {
  color: #b92b24;  
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
