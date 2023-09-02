<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>
<script lang="ts">
import {
  IonApp,
  IonToolbar,
  IonPage,
  IonContent,
  IonRouterOutlet,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonToolbar,
    IonPage,
    IonContent,
    IonRouterOutlet,
  },
});
</script>