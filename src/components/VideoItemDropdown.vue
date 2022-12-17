<template>
  <div class="relative -mt-1 ml-auto">
    <button
        @click="toggle"
        :class="buttonClasses">
      <BaseIcon name="dotsVertical"/>
    </button>
    <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transition opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
    >
      <div
          v-show="isOpen"
          @keydown.esc="isOpen = false"
          tabindex="-1"
          ref="dropdown"
          :class="dropdownClasses">
        <section class="py-2">
          <ul>
            <VideoItemDropDownListItem label="Add to queue" icon="menuAlt3"/>
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";
import VideoItemDropDownListItem from "./VideoItemDropdownListItem.vue";

export default {
  data() {
    return {
      isOpen: false,
      positionClasses: []
    }
  },
  mounted() {
    window.addEventListener('click', event => {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false
      }
    })
  },
  watch: {
    isOpen() {
      // document.body.classList.toggle('overflow-hidden')
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus())
    }
  },
  computed: {
    buttonClasses() {
      return [
        'p-1',
        'text-gray-500',
        'hover:text-gray-700',
        'focus:outline-none',
        'group-hover:opacity-100',
        this.isOpen ? 'opacity-100' : 'opacity-0',
      ]
    },
    dropdownClasses() {
      return [
        'z-30',
        'absolute',
        'bg-white',
        'w-48',
        'rounded',
        'shadow',
        'outline-none',
        ...this.positionClasses
      ]
    }
  },
  methods: {
    toggle(event) {
      this.isOpen = !this.isOpen

      if (this.isOpen) {
        this.$nextTick(() => {
          this.positionClasses = this.getPositionClasses(event)
        })
      }
    },
    getPositionClasses(event) {
      return [
        this.getTopClass(event),
        this.getRightClass(event),
        this.getLeftClass(event),
        this.getBottomClass(event)
      ]
    },
    getTopClass(event) {
      const clickCordY = event.clientY
      const buttonHeight = event.currentTarget.offsetHeight
      const dropdownHeight = this.$refs.dropdown.offsetHeight

      if (window.innerHeight - clickCordY < dropdownHeight) {
        return '-top-auto'
      }

      if (window.innerHeight - clickCordY < dropdownHeight + buttonHeight) {
        return 'top-0'
      }

      return 'top-8'
    },
    getRightClass(event) {
      const clickCordX = event.clientX
      const clickCordY = event.clientY
      const dropdownWidth = this.$refs.dropdown.offsetWidth
      const dropdownHeight = this.$refs.dropdown.offsetHeight
      const buttonHeight = event.currentTarget.offsetHeight

      if (window.innerWidth - clickCordX > dropdownWidth) {
        return 'right-auto'
      }

      if (window.innerHeight - clickCordY > dropdownHeight + buttonHeight) {
        return 'right-0'
      }

      if (window.innerWidth - clickCordY > dropdownHeight) {
        return 'right-0'
      }

      return 'right-0'
    },
    getLeftClass(event) {
      const clickCordX = event.clientX
      const clickCordY = event.clientY
      const dropdownWidth = this.$refs.dropdown.offsetWidth
      const dropdownHeight = this.$refs.dropdown.offsetHeight
      const buttonHeight = event.currentTarget.offsetHeight

      if (window.innerWidth - clickCordX < dropdownWidth) {
        return 'left-auto'
      }

      if (window.innerHeight - clickCordY > dropdownHeight + buttonHeight) {
        return 'left-auto'
      }

      if (window.innerHeight - clickCordY > dropdownHeight + buttonHeight) {
        return 'left-auto'
      }

      return 'left-0'
    },
    getBottomClass(event) {
      const clickCordY = event.clientY
      const dropdownHeight = this.$refs.dropdown.offsetHeight

      if (window.innerHeight - clickCordY < dropdownHeight) {
        return 'bottom-9'
      }

      return 'bottom-auto'
    }
  },
  components: {VideoItemDropDownListItem, BaseIcon},
}
</script>
