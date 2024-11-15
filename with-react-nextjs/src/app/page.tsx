"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthLayout, CapsuleModal, ExternalWallet, OAuthMethod } from "@usecapsule/react-sdk";
import {
  CapsuleEvmProvider,
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
} from "@usecapsule/evm-wallet-connectors";
import "@usecapsule/react-sdk/styles.css";
import { useState } from "react";
import { sepolia } from "wagmi/chains";

import { capsuleClient } from "@/client/capsule";
import Logo from "./capsule-logo.svg";

const queryClient = new QueryClient();

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <CapsuleEvmProvider
        config={{
          appName: "Capsule NextJS Starter Template",
          chains: [sepolia],
          projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "",
          ssr: false,
          wallets: [metaMaskWallet, walletConnectWallet, rainbowWallet],
        }}>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Capsule Modal Starter Template with Next.js</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
            Open Capsule Modal
          </button>
          <CapsuleModal
            appName="Capsule Modal Starter Template"
            authLayout={[AuthLayout.AUTH_FULL, AuthLayout.EXTERNAL_CONDENSED]}
            capsule={capsuleClient}
            disableEmailLogin={false}
            disablePhoneLogin={false}
            externalWallets={[ExternalWallet.METAMASK, ExternalWallet.WALLETCONNECT, ExternalWallet.RAINBOW]}
            isOpen={isModalOpen}
            logo={Logo.src}
            oAuthMethods={Object.values(OAuthMethod)}
            onClose={() => setIsModalOpen(false)}
            onRampTestMode={true}
            twoFactorAuthEnabled={false}
          />
        </div>
      </CapsuleEvmProvider>
    </QueryClientProvider>
  );
}
