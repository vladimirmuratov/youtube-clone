<template>
  <div class="flex items-start mt-3">
    <img :src="`https://picsum.photos/seed/avatar${index}/68`" class="mr-3 rounded-full w-9 h-9" alt="">
    <div class="text-sm">
      <span class="font-semibold text-gray-800">Video title {{ index }}</span>
      <div class="mt-1 flex">
        <BaseTooltip :text="chanelName" top>
          <span>{{ chanelName }}</span>
        </BaseTooltip>
        <BaseTooltip text="Verified" top>
          <BaseIcon name="checkCircle" class="w-3.5 h-3.5 ml-1"/>
        </BaseTooltip>
      </div>
      <div>
        <span>{{ index }}K views</span>
        &middot;
        <span>{{ index }} {{ summary }} ago</span>
      </div>
    </div>
    <VideoItemDropdown/>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
import VideoItemDropdown from "./VideoItemDropdown.vue";
import BaseTooltip from "./BaseTooltip.vue";

export default {
  props: ['index'],
  data() {
    return {
      chanelName: `Chanel name ${this.index}`
    }
  },
  components: {BaseTooltip, VideoItemDropdown, BaseIcon},
  computed: {
    summary() {
      return this.index === 1 ? 'day' : 'days'
    }
  }
}
</script>

