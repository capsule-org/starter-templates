<template>
  <div style="text-align: center; margin-top: 50px">
    <h1>Para Modal Starter Template with Vue + Vite</h1>
    <button
      @click="openModal"
      style="padding: 10px 20px; font-size: 16px; cursor: pointer">
      Open Para Modal
    </button>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from "vue";
  import { createCapsuleModalConnector } from "./para-modal-connector.tsx";
  import { para } from "./client/para";
  import Logo from "./assets/para-logo.svg";
  import { OAuthMethod } from "@getpara/react-sdk";

  const modalConnector = ref<any>(null);

  onMounted(() => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    modalConnector.value = createCapsuleModalConnector(container, {
      para: para,
      onClose: () => {
        modalConnector.value?.close();
      },
      appName: "Para Modal Starter Template",
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
