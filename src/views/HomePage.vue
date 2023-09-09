<template>
  <ion-page>
    <ion-toolbar></ion-toolbar>
    <ion-content :fullscreen="true" color="light" class="content-wrapper">
      <ContentWrapper>
        <template v-slot:content>
          <div class="flex flex-col w-full relative">
            <h1 class="my-2 text-lg">Hello Sam</h1>
            <ion-segment value="default" class="">
              <ion-segment-button value="default">
                <ion-label>Week</ion-label>
              </ion-segment-button>
              <ion-segment-button value="segment">
                <ion-label>Month</ion-label>
              </ion-segment-button>
            </ion-segment>
            <ion-modal
              trigger="open-modal"
              :initial-breakpoint="1"
              :breakpoints="[0, 1]"
            >
              <div class="block">Add New Expense</div>
            </ion-modal>
            <div class="h-20 w-full bg-primary text-white p-3 rounded-lg mt-4">
              Your Expenses: 210 zł
            </div>
            <ion-list class="mt-8 rounded-lg">
              <ion-item
                class=""
                v-for="(expense, index) in expenses"
                :key="index"
              >
                <ion-label class="py-1">{{ expense.text }}</ion-label>
                <ion-chip size="small" color="secondary">
                  <ion-icon :icon="homeOutline" color="primary"></ion-icon>
                  <ion-label class="text-sm">Home</ion-label>
                </ion-chip>
              </ion-item>
            </ion-list>
            <div class="flex justify-end w-full mt-8">
              <ion-fab>
                <ion-fab-button id="open-modal">
                  <ion-icon :icon="add"></ion-icon>
                </ion-fab-button>
              </ion-fab>
            </div>
          </div>
        </template>
      </ContentWrapper>
    </ion-content>
  </ion-page>
</template>

<script>
import ContentWrapper from "@/components/ui/ContentWrapper.vue";
import { homeOutline } from "ionicons/icons";
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonList,
  IonSegmentButton,
  IonSegment,
  IonModal,
} from "@ionic/vue";
import { add } from "ionicons/icons";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

export default {
  data() {
    return {
      add,
      homeOutline,
      expenses: [
        { text: "10 zł" },
        { text: "23 zł" },
        { text: "81 zł" },
        { text: "4 zł" },
      ],
    };
  },
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ContentWrapper,
    IonFab,
    IonFabButton,
    IonIcon,
    IonList,
    IonSegmentButton,
    IonSegment,
    IonModal,
  },
};
</script>

<style scoped>
.block {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

ion-modal {
  --height: auto;
}
</style>
