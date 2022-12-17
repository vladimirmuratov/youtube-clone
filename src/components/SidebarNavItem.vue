<template>
  <li>
    <a href="#" :class="classes">
      <BaseIcon :name="icon" :class="iconClasses"/>
<!--      <svg class="w-6 h-6 mr-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
      </svg>-->
      <span>{{ label }}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  components: {BaseIcon},
  props: {
    label: String,
    icon: String,
    isActive: Boolean
  },
  computed: {
    classes() {
      const classes = ['flex', 'items-center', 'px-6', 'py-2', 'text-sm']
      return this.isActive
          ? [...classes, 'font-medium', 'text-gray-800', 'bg-gray-200', 'hover:bg-gray-300']
          : [...classes, 'hover:bg-gray-100']
    },
    iconClasses() {
      const classes = ['w-6', 'h-6','mr-6']
      return this.isActive
          ? [...classes, 'text-red-500']
          : [...classes]
    }
  }
}
</script>

