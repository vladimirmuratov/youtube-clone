<template>
  <sidebar-section>
    <ul>
      <SidebarNavItem label="Home" icon="home" is-active/>
      <SidebarNavItem label="Trending" icon="trending"/>
      <SidebarNavItem label="Subscriptions" icon="subscriptions"/>
    </ul>
  </sidebar-section>
  <sidebar-section>
    <ul>
      <SidebarNavItem label="Library" icon="library"/>
      <SidebarNavItem label="History" icon="history"/>
    </ul>
  </sidebar-section>
  <sidebar-section class="px-8 py-4 font-medium leading-5 border-b">
      <span class="text-sm">
        Sign in to like videos, comment, and subscribe.
      </span>
    <ButtonLogin
        class="focus:outline-none flex items-center px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"/>
  </sidebar-section>
  <sidebar-section>
    <SidebarSectionHeading title="Best of YouTube"/>
    <ul>
      <SidebarNavItem label="Music" icon="music"/>
      <SidebarNavItem label="Sports" icon="sports"/>
      <SidebarNavItem label="Gaming" icon="gaming"/>
      <SidebarNavItem label="Movies" icon="movies"/>
      <SidebarNavItem label="News" icon="news"/>
      <SidebarNavItem label="Live" icon="live"/>
      <SidebarNavItem label="360&deg; Video" icon="video360"/>
    </ul>
  </sidebar-section>
  <sidebar-section>
    <ul>
      <SidebarNavItem label="Browse channels" icon="browse"/>
    </ul>
  </sidebar-section>
  <sidebar-section>
    <SidebarSectionHeading title="More from YouTube"/>
    <ul>
      <SidebarNavItem label="YouTube Premium" icon="youtube"/>
      <SidebarNavItem label="Live" icon="live"/>
    </ul>
  </sidebar-section>
  <sidebar-section>
    <ul>
      <SidebarNavItem label="Settings" icon="settings"/>
      <SidebarNavItem label="Report history" icon="report"/>
      <SidebarNavItem label="Help" icon="help"/>
      <SidebarNavItem label="Send feedback" icon="feedback"/>
    </ul>
  </sidebar-section>
  <sidebar-section class="px-6 py-4 text-xs font-semibold space-y-4">
    <TheFooter/>
  </sidebar-section>
</template>

<script>
import SidebarNavItem from "./SidebarNavItem.vue";
import ButtonLogin from "./ButtonLogin.vue";
import SidebarSectionHeading from "./SidebarSectionHeading.vue";
import TheFooter from "./TheFooter.vue";
import SidebarSection from "./SidebarSection.vue";
export default {
  components: {SidebarSection, SidebarNavItem, ButtonLogin, SidebarSectionHeading, TheFooter}
}
</script>

