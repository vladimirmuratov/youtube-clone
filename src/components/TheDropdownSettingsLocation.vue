<template>
  <DropdownSettingsHeader
      title="Choose your location"
      @back="$emit('close')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
          :key="locationId"
          v-for="(locationName, locationId) in locations"
          :label="locationName"
          :active="locationId === selectedOptions.location.id"
          @click="selectOption({id: locationId, text: locationName})"
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
      optionName: 'location',
      locations: ['Russia', 'USA', 'GB', 'France', 'China']
    }
  }
}
</script>
