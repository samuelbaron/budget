<template>
  <h1 class="text-center text-xl pt-10">Welcome</h1>
  <div class="flex flex-col py-8 gap-3">
    <MainButton @click="emitLoginRequest" text="Login" color="bg-primary" />
    <MainButton
      @click="emitRegistrationRequest"
      text="Register"
      color="bg-secondary"
    />
  </div>
</template>
<script lang="ts">
import MainButton from "@/components/ui/buttons/MainButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { MainButton },
  emits: ["login-request", "registration-request"],
  methods: {
    emitLoginRequest() {
      this.$emit("login-request");
    },
    emitRegistrationRequest() {
      this.$emit("registration-request");
    },
  },
});
</script>
