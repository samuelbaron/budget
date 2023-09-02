<template>
  <div :class="padding">
    <slot name="content"></slot>
  </div>
</template>
  
  <script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    reducePadding: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    padding() {
      return this.reducePadding ? "px-2 py-2" : "px-4 py-2";
    },
  },
});
</script>