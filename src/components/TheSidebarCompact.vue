<template>
  <aside :class="classes">
    <section>
      <ul>
        <SidebarCompactNavItem
            :key="navItem.label"
            v-for="navItem in navItems"
            :icon="navItem.icon"
            :label="navItem.label"
            :is-active="navItem.isActive"
        />
      </ul>
    </section>
  </aside>
</template>

<script>
import SidebarCompactNavItem from "./SidebarCompactNavItem.vue";

export default {
  components: {SidebarCompactNavItem},
  data() {
    return {
      navItems: [
        {label: 'Home', icon: 'home', isActive: true},
        {label: 'Trending', icon: 'trending', isActive: false},
        {label: 'Subscriptions', icon: 'subscriptions', isActive: false},
        {label: 'Library', icon: 'library', isActive: false},
        {label: 'History', icon: 'history', isActive: false},
      ]
    }
  },
  computed: {
    classes() {
      return [
        'min-h-screen',
        'overflow-auto',
        'fixed',
        'top-0',
        'pt-14',
        'bg-white',
        'z-20'
      ]
    }
  }
}
</script>
