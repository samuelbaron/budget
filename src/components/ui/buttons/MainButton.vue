<template>
  <button :class="computedClass">{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ButtonColor } from "@/mixins/types";
export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String as () => ButtonColor,
      required: true,
    },
  },
  computed: {
    computedClass() {
      return [this.color, "rounded-lg", "p-3", "text-white", "font-medium"];
    },
  },
});
</script>
