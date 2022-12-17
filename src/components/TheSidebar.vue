<template>
  <aside :class="classes">
    <SidebarContent/>
  </aside>
</template>

<script>
import SidebarNavItem from "./SidebarNavItem.vue";
import BaseIcon from "./BaseIcon.vue";
import ButtonLogin from "./ButtonLogin.vue";
import SidebarSectionHeading from "./SidebarSectionHeading.vue";
import SidebarSection from "./SidebarSection.vue";
import TheFooter from "./TheFooter.vue";
import SidebarContent from "./SidebarContent.vue";

export default {
  data() {
    return {
      sidebarState: null
    }
  },
  mounted() {
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      this.sidebarState = 'compact'
    }
    if (window.innerWidth >= 1280) {
      this.sidebarState = 'normal'
    }
  },
  computed: {
    classes() {
      return [
        'w-64',
        'max-h-screen',
        'overflow-auto',
        'fixed',
        'top-0',
        'pt-12',
        'bg-white',
        'z-20'
      ]
    }
  },
  components: {
    SidebarContent,
    TheFooter,
    SidebarSection,
    SidebarSectionHeading,
    ButtonLogin,
    BaseIcon,
    SidebarNavItem
  }
}
</script>

