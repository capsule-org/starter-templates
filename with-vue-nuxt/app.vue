<template>
  <div style="text-align: center; margin-top: 50px">
    <h1>Capsule Modal Starter Template with Vue + Vite</h1>
    <button
      @click="openModal"
      style="padding: 10px 20px; font-size: 16px; cursor: pointer">
      Open Capsule Modal
    </button>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from "vue";
  import { createCapsuleModalConnector } from "./capsule-modal-connector.tsx";
  import { capsuleClient } from "./client/para.js";
  import Logo from "./assets/capsule-logo.svg";
  import { OAuthMethod } from "@usecapsule/react-sdk";
  import "./style.css";

  const modalConnector = ref<any>(null);

  onMounted(() => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    modalConnector.value = createCapsuleModalConnector(container, {
      capsule: capsuleClient,
      onClose: () => {
        modalConnector.value?.close();
      },
      appName: "Capsule Modal Starter Template",
      logo: Logo,
      disableEmailLogin: false,
      disablePhoneLogin: false,
      oAuthMethods: Object.values(OAuthMethod),
      onRampTestMode: true,
      twoFactorAuthEnabled: false,
      theme: {
        backgroundColor: "#FFF",
        foregroundColor: "#000",
        accentColor: "#FF754A",
        mode: "light",
        font: "Inter",
      },
    });
  });

  onUnmounted(() => {
    modalConnector.value?.unmount();
  });

  const openModal = () => {
    modalConnector.value?.open();
  };
</script>
