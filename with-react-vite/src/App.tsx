import { AuthLayout, ParaModal, OAuthMethod } from "@getpara/react-sdk";
import "@getpara/react-sdk/styles.css";
import { useState } from "react";

import { para } from "./client/para";
import Logo from "./assets/para-logo.svg";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Para Modal Starter Template with Next.js</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
        Open Para Modal
      </button>
      <ParaModal
        appName="Para Modal Starter Template"
        authLayout={[AuthLayout.AUTH_FULL]}
        para={para}
        disableEmailLogin={false}
        disablePhoneLogin={false}
        isOpen={isModalOpen}
        logo={Logo}
        oAuthMethods={Object.values(OAuthMethod)}
        onClose={() => setIsModalOpen(false)}
        onRampTestMode={true}
        twoFactorAuthEnabled={false}
      />
    </div>
  );
}
