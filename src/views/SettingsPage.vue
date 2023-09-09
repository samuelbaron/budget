<template>
  <ion-page>
    <ion-toolbar></ion-toolbar>
    <ion-content :fullscreen="true" color="light" class="content-wrapper">
      <ContentWrapper>
        <template v-slot:content>
          <ion-toggle>Setting 1</ion-toggle><br /><br />
        </template>
      </ContentWrapper>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import ContentWrapper from "@/components/ui/ContentWrapper.vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonToggle,
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
    IonToggle,
  },
});
</script>
