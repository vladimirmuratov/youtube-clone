<template>
  <div class="space-y-3 text-black text-sm mt-3">
    <div v-for="(label, index) in categories" :key="label" class="flex items-center">
      <input
          type="radio"
          :value="label"
          :id="`search-prediction-category-${index}`"
          class="h-5 w-5 cursor-pointer"
          v-model="selectedSearchPredictionCategory"
      />
      <label
          :for="`search-prediction-category-${index}`"
          class="pl-4 cursor-pointer flex-grow hover:bg-gray-100"
      >
        {{ label }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    categories: Array,
    category: String
  },

  emits:['update:category'],

  data() {
    return {
      selectedSearchPredictionCategory: this.category
    }
  },

  watch: {
    selectedSearchPredictionCategory() {
      this.$emit('update:category', this.selectedSearchPredictionCategory)
    }
  }
}
</script>
