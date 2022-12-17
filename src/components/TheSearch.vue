<template>
  <div class="flex w-full mr-2">
    <div class="relative flex w-full">
      <TheSearchInput
          v-model:query="query"
          @update:query="updateSearchResults"
          :has-results="!!results.length"
          @change-state="toggleSearchResult"
          @keyup.up="handlePreviousSearchResult"
          @keyup.down="handleNextSearchResult"
          @keydown.up.prevent
          @enter="selectSearchResult"
      />
      <TheSearchResults
          v-show="isSearchResultsShown"
          :results="results"
          :active-result-id="activeSearchResultId"
          @search-result-mouseenter="activeSearchResultId = $event"
          @search-result-mouseleave="activeSearchResultId = null"
          @search-result-click="selectSearchResult"
      />
    </div>

    <TheSearchButton @click.stop="selectSearchResult"/>

  </div>
</template>

<script>
import TheSearchInput from "./TheSearchInput.vue";
import TheSearchButton from "./TheSearchButton.vue";
import TheSearchResults from "./TheSearchResults.vue";

export default {
  data() {
    return {
      results: [],
      query: '',
      activeQuery: '',
      isSearchResultsShown: false,
      activeSearchResultId: null,
      keywords: [
        'new york giants',
        'new york alicia keys',
        'new york giants vs washington football',
        'new york',
        'new york song',
        'new york new york frank sinatra',
        'new york jets',
        'new york city',
        'new york giants live',
        'new york state of mind',
        'new york giants vs washington football live',
        'new york giants injury',
        'new york giants live stream',
        'new york accent'
      ]
    }
  },

  mounted() {
    window.addEventListener('click', this.onClickAndResize)
    window.addEventListener('resize', this.onClickAndResize)
  },

  computed: {
    trimmedQuery() {
      return this.query.replace(/\s+/g, ' ').trim()
    }
  },

  methods: {
    onClickAndResize() {
      this.toggleSearchResult(false)
    },
    updateSearchResults() {
      this.activeSearchResultId = null

      this.activeQuery = this.query

      if (this.query === '') {
        this.results = []
      } else {
        this.results = this.keywords.filter(result => result.includes(this.trimmedQuery))
      }
    },

    toggleSearchResult(isSearchInputActive) {
      this.isSearchResultsShown = isSearchInputActive && this.results.length > 0
    },

    handlePreviousSearchResult() {
      if (this.isSearchResultsShown) {
        this.makePreviousResultActive()
        this.updateQueryWithSearchResult()
      } else {
        this.toggleSearchResult(true)
      }
    },

    handleNextSearchResult() {
      if (this.isSearchResultsShown) {
        this.makeNextResultActive()
        this.updateQueryWithSearchResult()
      } else {
        this.toggleSearchResult(true)
      }
    },

    makeNextResultActive() {
      if (this.activeSearchResultId === null) {
        this.activeSearchResultId = 0
      } else if (this.activeSearchResultId + 1 === this.results.length) {
        this.activeSearchResultId = null
      } else {
        this.activeSearchResultId++
      }
    },

    makePreviousResultActive() {
      if (this.activeSearchResultId === 0) {
        this.activeSearchResultId = null
      } else if (this.activeSearchResultId === null) {
        this.activeSearchResultId = this.results.length - 1
      } else {
        this.activeSearchResultId--
      }
    },

    updateQueryWithSearchResult() {
      const hasActiveSearchResult = this.activeSearchResultId !== null

      this.query = hasActiveSearchResult
          ? this.results[this.activeSearchResultId]
          : this.activeQuery
    },

    selectSearchResult() {
      this.query = this.activeSearchResultId === null
          ? this.query
          : this.results[this.activeSearchResultId]

      this.toggleSearchResult(false)

      this.updateSearchResults()

    }
  },

  components: {TheSearchResults, TheSearchButton, TheSearchInput}
}
</script>
