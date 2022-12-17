<template>
  <button class="uppercase text-sm font-medium tracking-wider py-2.5 px-4 focus:outline-none" :disabled="disabled">
    <slot/>
  </button>
</template>

<script>
export default {
props: {
  disabled: Boolean
}
}
</script>
