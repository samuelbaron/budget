<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar class="bg-white border h-7">
        <ion-tab-button class="bg-white mt-4" tab="home" href="/tabs/home">
          <ion-icon :icon="homeOutline" size="large"></ion-icon>
        </ion-tab-button>
        <ion-tab-button
          class="bg-white mt-4"
          tab="analyse"
          href="/tabs/analyse"
        >
          <ion-icon :icon="podiumOutline" size="large"></ion-icon>
        </ion-tab-button>
        <ion-tab-button
          class="bg-white mt-4"
          tab="settings"
          href="/tabs/settings"
        >
          <ion-icon :icon="settingsOutline" size="large"></ion-icon>
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
import { homeOutline, settingsOutline, podiumOutline } from "ionicons/icons";
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
  data() {
    return {
      homeOutline,
      settingsOutline,
      podiumOutline,
    };
  },
});
</script>
