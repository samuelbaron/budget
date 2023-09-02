<template>
  <ion-page>
    <ion-toolbar></ion-toolbar>
    <ion-content :fullscreen="true" color="light" class="content-wrapper">
      <ContentWrapper>
        <template v-slot:content>
          <p>It's currently empty</p>
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
