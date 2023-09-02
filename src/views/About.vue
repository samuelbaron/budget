<template>
  <ion-page>
    <ion-toolbar>
      <ion-title>About</ion-title>
    </ion-toolbar>
    <ion-content :fullscreen="true" color="light" class="content-wrapper">
      <ContentWrapper>
        <template v-slot:content> About </template>
      </ContentWrapper>
    </ion-content>
  </ion-page>
</template>

<script>
import ContentWrapper from "@/components/ContentWrapper.vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ContentWrapper,
  },
});
</script>

<style>
.content-wrapper {
  overflow: hidden;
}
</style>