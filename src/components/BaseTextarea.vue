<template>
  <div class="relative">
  <textarea
      ref="textarea"
      :maxlength="limit"
      @input="adjustHeight"
      v-model="searchPredictionDetails"
      placeholder="Provide additional detail (optional)"
      class="border rounded-sm pt-2 pb-8 px-2 resize-none w-full focus:outline-none overflow-hidden"
  />
    <div class="absolute bottom-2 right-2 text-xs text-gray-600">{{ counter }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    limit: Number
  },

  emits: ['update:text'],

  data() {
    return {
      searchPredictionDetails: this.text
    }
  },

  watch: {
    searchPredictionDetails() {
      this.$emit('update:text', this.searchPredictionDetails)
    }
  },

  computed:{
    counter() {
      return `${this.searchPredictionDetails.length} / ${this.limit}`
    }
  },

  mounted() {
    this.adjustHeight()
  },

  methods: {
    adjustHeight() {
      this.$refs.textarea.style.height = 'auto'
      this.$refs.textarea.style.height = `${this.$refs.textarea.scrollHeight}px`
    }
  }
}
</script>
