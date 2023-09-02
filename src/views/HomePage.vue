<template>
  <ion-page>
    <ion-toolbar> </ion-toolbar>
    <ion-content :fullscreen="true" color="light" class="content-wrapper">
      <ContentWrapper>
        <template v-slot:content>
          <div class="h-20 w-full bg-primary text-white p-3 rounded-lg">
            Your Funds:
          </div>
          <div class="h-12 w-full bg-secondary text-white p-3 mt-10 rounded-lg">
            Example 1:
          </div>
          <div class="h-12 w-full bg-secondary text-white p-3 mt-2 rounded-lg">
            Example 2:
          </div>
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
