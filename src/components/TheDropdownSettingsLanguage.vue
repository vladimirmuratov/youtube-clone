<template>
  <DropdownSettingsHeader
      title="Choose your language"
      @back="$emit('close')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
          :key="languageId"
          v-for="(languageName, languageId) in languages"
          :label="languageName"
          :active="languageId === selectedOptions.language.id"
          @click="selectOption({id: languageId, text: languageName})"
      />
    </ul>
  </section>
</template>

<script>
import dropdownSubmenu from "../mixins/dropdownSubmenu.js";

export default {
  mixins: [dropdownSubmenu],
  data() {
    return {
      optionName: 'language',
      languages: ['Russian', 'English', 'French', 'Japan']
    }
  }
}
</script>
