"use client";
import { useMemo, useState } from "react";
import { capsuleClient } from "@/client/capsule";
import { CapsuleModal, OAuthMethod } from "@usecapsule/react-sdk";
import "@usecapsule/react-sdk/styles.css";
import Logo from "./capsul-logo.svg";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Capsule Modal Starter Template with Next.js</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
        Open Capsule Modal
      </button>
      <CapsuleModal
        capsule={capsuleClient}
        appName="Capsule Modal Starter Template"
        logo={Logo.src}
        disableEmailLogin={false}
        disablePhoneLogin={false}
        oAuthMethods={Object.values(OAuthMethod)}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRampTestMode={true}
        twoFactorAuthEnabled={false}
      />
    </div>
  );
}
