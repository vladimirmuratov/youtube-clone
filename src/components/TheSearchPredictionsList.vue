<template>
  <div class="space-y-2 text-black text-sm mt-5">
    <div v-for="(label, index) in searchPredictions" :key="label" class="flex items-center">
      <input
          type="checkbox"
          class="h-5 w-5 cursor-pointer"
          v-model="selectedSearchPredictions"
          :id="`search-prediction-${index}`"
          :value="label"
      />
      <label :for="index" class="pl-4 cursor-pointer flex-grow hover:bg-gray-100 truncate">{{ label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchPredictions: Array,
    modelValue: Array
  },

  emits: ['update:modelValue'],

  data() {
    return {
      selectedSearchPredictions: this.modelValue
    }
  },

  watch: {
    selectedSearchPredictions() {
      this.$emit('update:modelValue', this.selectedSearchPredictions)
    }
  }
}
</script>
