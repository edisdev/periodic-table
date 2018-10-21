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
        return {};
      }
    }
  },

  data() {
    return {
      isOpenedModel: false
    };
  },
  methods: {
    closeTrigger() {
      this.$emit("closeModal");
    }
  },
  mounted() {
    window.addEventListener("click", e => {
      const el = e.target.closest(".modal-container");
      if (!el) {
        this.$emit("closeModal");
      }
    });
  }
};
</script>


<style lang="scss">
@import "@/assets/config/variable.scss";

.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  position: relative;
  color: #fff;
  padding: 20px;
}

.modal-body {
  width: 100%;
  height: 100%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  position: relative;
}

.modal-body .info {
  .name_tr,
  .group_name {
    font-size: 2em;
  }
}

.modal-body {
  .info {
    .name_small {
      font-size: 13em;
      text-align: center;
    }
    &.small-size .name_small {
      font-size: 9em;
    }
    .detail {
      display: flex;
    }
  }
  .head {
    display: flex;
    justify-content: space-between;
  }
  .info {
    .detail .number {
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
      &::after {
        content: "";
        position: absolute;
        width: 290px;
        height: 125px;
        transform: rotate(-45deg);
        top: 0;
        right: -2px;
        box-shadow: -1px -1px 10px -2px rgba(0, 0, 0, 0.5);
      }
      &.color-1 {
        color: $non-matel;
        &::after {
          background: $non-matel;
        }
      }
      &.color-2 {
        color: $alkal-metal;
        &::after {
          background: $alkal-metal;
        }
      }
      &.color-3 {
        color: $alkaline-metal;
        &::after {
          background: $alkaline-metal;
        }
      }

      &.color-4 {
        color: $transition-metal;
        &::after {
          background: $transition-metal;
        }
      }

      &.color-5 {
        color: $metaloid;
        &::after {
          background: $metaloid;
        }
      }

      &.color-6 {
        color: $metal;
        &::after {
          background: $metal;
        }
      }

      &.color-7 {
        color: $halojen;
        &::after {
          background: $halojen;
        }
      }

      &.color-8 {
        color: $soygaz;
        &::after {
          background: $soygaz;
        }
      }

      &.color-9 {
        color: $lantanit;
        &::after {
          background: $lantanit;
        }
      }

      &.color-10 {
        color: $actinide;
        &::after {
          background: $actinide;
        }
      }
    }
    &.small-size .detail .number {
      font-size: 1.9em;
    }
  }
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

.modal-container {
  &.color-1 {
    background: $non-matel;
  }
  &.color-2 {
    background: $alkal-metal;
  }

  &.color-3 {
    background: $alkaline-metal;
  }

  &.color-4 {
    background: $transition-metal;
  }

  &.color-5 {
    background: $metaloid;
  }

  &.color-6 {
    background: $metal;
  }

  &.color-7 {
    background: $halojen;
  }

  &.color-8 {
    background: $soygaz;
  }

  &.color-9 {
    background: $lantanit;
  }

  &.color-10 {
    background: $actinide;
  }
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

.modal-default-button {
  &.color-1 {
    color: $non-matel;
  }
  &.color-2 {
    color: $alkal-metal;
  }

  &.color-3 {
    color: $alkaline-metal;
  }

  &.color-4 {
    color: $transition-metal;
  }

  &.color-5 {
    color: $metaloid;
  }

  &.color-6 {
    color: $metal;
  }

  &.color-7 {
    color: $halojen;
  }

  &.color-8 {
    color: $soygaz;
  }

  &.color-9 {
    color: $lantanit;
  }

  &.color-10 {
    color: $actinide;
  }
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

.darkMode {
  .modal-container {
    &.color-1 {
      background: $non-metal-dark;
    }
    &.color-2 {
      background: $alkal-metal-dark;
    }

    &.color-3 {
      background: $alkaline-metal-dark;
    }

    &.color-4 {
      background: $transition-metal-dark;
    }

    &.color-5 {
      background: $metaloid-dark;
    }

    &.color-6 {
      background: $metal-dark;
    }

    &.color-7 {
      background: $halojen-dark;
    }

    &.color-8 {
      background: $soygaz-dark;
    }

    &.color-9 {
      background: $lantanit-dark;
    }

    &.color-10 {
      background: $actinide-dark;
    }
  }

  .info {
    .detail .number {
      &.color-1 {
        color: $non-metal-dark;
        &::after {
          background: $non-metal-dark;
        }
      }
      &.color-2 {
        color: $alkal-metal-dark;
        &::after {
          background: $alkal-metal-dark;
        }
      }
      &.color-3 {
        color: $alkaline-metal-dark;
        &::after {
          background: $alkaline-metal-dark;
        }
      }

      &.color-4 {
        color: $transition-metal-dark;
        &::after {
          background: $transition-metal-dark;
        }
      }

      &.color-5 {
        color: $metaloid-dark;
        &::after {
          background: $metaloid-dark;
        }
      }

      &.color-6 {
        color: $metal-dark;
        &::after {
          background: $metal-dark;
        }
      }

      &.color-7 {
        color: $halojen-dark;
        &::after {
          background: $halojen-dark;
        }
      }

      &.color-8 {
        color: $soygaz-dark;
        &::after {
          background: $soygaz-dark;
        }
      }

      &.color-9 {
        color: $lantanit-dark;
        &::after {
          background: $lantanit-dark;
        }
      }

      &.color-10 {
        color: $actinide-dark;
        &::after {
          background: $actinide-dark;
        }
      }
    }
    &.small-size .detail .number {
      font-size: 1.9em;
    }
  }

  .modal-default-button {
    &.color-1 {
      color: $non-metal-dark;
    }
    &.color-2 {
      color: $alkal-metal-dark;
    }

    &.color-3 {
      color: $alkaline-metal-dark;
    }

    &.color-4 {
      color: $transition-metal-dark;
    }

    &.color-5 {
      color: $metaloid-dark;
    }

    &.color-6 {
      color: $metal-dark;
    }

    &.color-7 {
      color: $halojen-dark;
    }

    &.color-8 {
      color: $soygaz-dark;
    }

    &.color-9 {
      color: $lantanit-dark;
    }

    &.color-10 {
      color: $actinide-dark;
    }
  }

}
</style>
