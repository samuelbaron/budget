<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar class="pt-2 border-top border-gray border-3 pb-4">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-label class="font-body-3-black">Home</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="about" href="/tabs/about">
          <ion-label class="font-body-3-black">About</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
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