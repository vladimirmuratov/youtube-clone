<template>
  <div class="relative w-full">
    <input
        type="text"
        placeholder="Search"
        :class="classes"
        :value="query"
        ref="input"
        @input="updateQuery($event.target.value)"
        @focus="setState(true)"
        @keyup.esc="handleEsc"
        @click.stop="setState(true)"
        @keydown.enter="handleEnter"
    />
    <button
        v-show="query"
        @click="clear"
        class="absolute top-0 right-0 h-full px-3 focus:outline-none"
    >
      <BaseIcon name="x" class="w-5 h-5"/>
    </button>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  props: ['query', 'hasResults'],
  emits: ['update:query', 'change-state', 'enter'],
  inject: ['isMobileSearchActive'],
  components: {BaseIcon},
  data() {
    return {
      isActive: false,
      classes: [
        'w-full',
        'h-full',
        'px-3',
        'shadow-inner',
        'rounded-bl-sm',
        'rounded-tl-sm',
        'border',
        'border-gray-300',
        'focus:border-blue-700',
        'focus:outline-none'
      ]
    }
  },
  watch: {
    'isMobileSearchActive.value'(isMobileSearchActive) {
      if (isMobileSearchActive) {
        this.$nextTick(() => this.$refs.input.focus())
      }
    }
  },
  mounted() {
    if (window.innerWidth < 640) {
      this.$refs.input.focus()
    }

    document.addEventListener('keydown', this.onKeydown)
  },

  methods: {
    handleEnter() {
      this.setState(false)

      this.$refs.input.blur()

      this.$emit('enter')
    },

    updateQuery(query) {
      this.$emit('update:query', query)
      this.setState(this.isActive)
    },

    clear() {
      this.$refs.input.focus()
      this.updateQuery('')
    },

    setState(isActive) {
      this.isActive = isActive
      this.$emit('change-state', isActive)
    },

    handleEsc() {
      this.removeSelection()

      if (this.isActive && this.hasResults) {

        this.setState(false)

      } else {

        this.$refs.input.blur()

      }
    },

    removeSelection() {
      const end = this.$refs.input.value.length
      this.$refs.input.setSelectionRange(end, end)
    },

    onKeydown(event) {
      const isInputFocused = this.$refs.input === document.activeElement
      if (event.code === 'Slash' && !isInputFocused) {
        event.preventDefault()
        this.$refs.input.focus()
      }
    }
  }
}
</script>
