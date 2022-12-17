<template>
  <BaseModal class="md:w-4/5 max-w-2xl">
    <template v-slot:default>
      <p class="text-base text-black tracking-wide">Report search predictions</p>
      <TheSearchPredictionsList v-model="selectedSearchPredictions" :search-predictions="searchPredictions"/>

      <p class="text-gray-600 text-xs mt-5">The selected predictions are:</p>

      <TheSearchPredictionCategories :categories="searchPredictionsCategories"
                                     v-model:category="selectedSearchPredictionCategory"/>

      <div class="text-black text-sm mt-6">
        <BaseTextarea v-model:text="searchPredictionDetails" :limit="500"/>
      </div>
    </template>

    <template v-slot:footer="slotProps">
      <BaseButton @click="slotProps.close" class="ml-auto mr-1">
        Cancel
      </BaseButton>

      <BaseButton @click="slotProps.close" class="mx-1 text-gray-400 cursor-auto" disabled>
        Report
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "./BaseModal.vue";
import TheSearchPredictionsList from "./TheSearchPredictionsList.vue";
import BaseButton from "./BaseButton.vue";
import TheSearchPredictionCategories from "./TheSearchPredictionCategories.vue";
import BaseTextarea from "./BaseTextarea.vue";

export default {
  props: {
    searchPredictions: Array
  },
  data() {
    return {
      selectedSearchPredictions: [],
      selectedSearchPredictionCategory: null,
      searchPredictionDetails: '',
      searchPredictionsCategories: [
        'Hateful',
        'Sexually Explicit',
        'Violent',
        'Dangerous and harmful activity',
        'Other'
      ]
    }
  },
  components: {BaseTextarea, TheSearchPredictionCategories, BaseButton, TheSearchPredictionsList, BaseModal}
}
</script>
