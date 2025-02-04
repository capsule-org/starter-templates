<script lang="ts">
    import { CapsuleModal, OAuthMethod } from "@getpara/react-sdk";
    import "@getpara/react-sdk/styles.css";
    import Logo from "../assets/para-logo.svg";
    import { para } from "../client/para";
    import { sveltify } from "svelte-preprocess-react";
    import "./page.css";

    const react = sveltify({ CapsuleModal });
    let isModalOpen = false;
  </script>
  
  <div class="container">
    <h1>Para Modal Starter Template with Svelte Kit</h1>
    <button on:click={() => isModalOpen = true}>
      Open Para Modal
    </button>
    <react.CapsuleModal
      para={para}
      appName="Para Modal Starter Template"
      logo={Logo}
      disableEmailLogin={false}
      disablePhoneLogin={false}
      oAuthMethods={Object.values(OAuthMethod)}
      isOpen={isModalOpen}
      onClose={() => isModalOpen = false}
      onRampTestMode={true}
      twoFactorAuthEnabled={false}
    />
  </div>
  
  <style>
    .container {
      text-align: center;
      margin-top: 50px;
    }
  
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  </style>

