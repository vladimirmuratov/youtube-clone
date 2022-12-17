<template>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem
          :key="menuItem.label"
          v-for="menuItem in menuItems.slice(0, 8)"
          :label="menuItem.label"
          :icon="menuItem.icon"
          :with-sub-menu="menuItem.withSubMenu"
          @click.stop="selectMenu(menuItem)"
      />
    </ul>
  </section>
  <section class="py-2">
    <ul>
      <DropdownSettingsListItem
          :label="menuItems[8].label"
          :icon="menuItems[8].icon"
          :with-sub-menu="menuItems[8].withSubMenu"
          @click.stop="selectMenu(menuItems[8])"
      />
    </ul>
  </section>
</template>

<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";

export default {
  emits: ['select-menu'],
  props: ['menuItems'],
  methods: {
    selectMenu(menuItem) {
      if (menuItem.withSubMenu) {
        this.$emit('select-menu', menuItem)
      }
    }
  },
  components: {DropdownSettingsListItem}
}
</script>
