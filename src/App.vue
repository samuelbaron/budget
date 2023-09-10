<template>
  <ion-app v-if="authenticatedUser">
    <ion-router-outlet />
  </ion-app>
  <div v-else>
    <ContentWrapper>
      <template v-slot:content>
        <WelcomeView
          v-if="showWelcomeView"
          @login-request="(showLoginForm = true), (showWelcomeView = false)"
          @registration-request="
            (showRegistrationForm = true), (showWelcomeView = false)
          "
        />
        <LoginForm v-if="showLoginForm" />
        <RegistrationForm v-if="showRegistrationForm" />
      </template>
    </ContentWrapper>
  </div>
</template>
<script lang="ts">
import {
  IonApp,
  IonToolbar,
  IonPage,
  IonContent,
  IonRouterOutlet,
} from "@ionic/vue";
import WelcomeView from "@/components/authentication/WelcomeView.vue";
import LoginForm from "@/components/authentication/LoginForm.vue";
import ContentWrapper from "@/components/ui/ContentWrapper.vue";
import RegistrationForm from "@/components/authentication/RegistrationForm.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonApp,
    IonToolbar,
    IonPage,
    IonContent,
    IonRouterOutlet,
    WelcomeView,
    LoginForm,
    RegistrationForm,
    ContentWrapper,
  },
  data() {
    return {
      authenticatedUser: false,
      showWelcomeView: true,
      showLoginForm: false,
      showRegistrationForm: false,
    };
  },
  name: "App",
});
</script>
