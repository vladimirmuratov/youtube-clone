<template>
  <div class="relative">
    <div
        class="h-full flex items-center"
        @mouseenter="isShown = true"
        @mouseleave="isShown = false"
        @click="isShown = false"
    >
      <slot/>
    </div>
    <transition
        enter-active-class="duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-75"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div v-show="isShown" :class="classes">{{ text }}</div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    top: Boolean,
    right: Boolean,
    left: Boolean
  },

  data() {
    return {
      isShown: false
    }
  },

  computed: {
    classes() {
      return [
        'transform',
        'bg-gray-600',
        'bg-opacity-80',
        'text-white',
        'text-xs',
        'whitespace-nowrap',
        'p-2',
        'rounded-sm',
        'absolute',
        ...this.getPositionClasses()
      ]
    }
  },

  methods: {
    getPositionClasses() {
      const topClass = this.top ? 'bottom-6' : 'top-10'

      if (this.right) {
        return [topClass, 'left-0']
      }

      if (this.left) {
        return [topClass, 'right-0']
      }

      return [topClass, 'left-1/2', '-translate-x-1/2']
    }
  }
}
</script>
