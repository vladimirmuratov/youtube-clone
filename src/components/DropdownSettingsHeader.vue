<template>
  <section class="flex border-b border-gray-200 text-black">
    <button @click.stop="$emit('back')" class="px-3 focus:outline-none">
      <BaseIcon name="arrowLeft"/>
    </button>
    <span class="py-3">{{ title }}</span>
  </section>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  emits: ['back'],
  props: ['title'],
  components: {BaseIcon}
}
</script>
