<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar class="bg-white border h-7">
        <ion-tab-button class="bg-white mt-4" tab="home" href="/tabs/home">
          <ion-label class="text-base text-primary">Home</ion-label>
        </ion-tab-button>
        <ion-tab-button
          class="bg-white mt-4"
          tab="settings"
          href="/tabs/settings"
        >
          <ion-label class="text-base text-primary">Settings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonLabel,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
});
</script>