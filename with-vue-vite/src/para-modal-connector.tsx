import React from "react";
import { createRoot } from "react-dom/client";
import { CapsuleModal, CapsuleModalProps, OAuthMethod } from "@getpara/react-sdk";
import "@getpara/react-sdk/styles.css";

export const createCapsuleModalConnector = (targetEl: HTMLElement, props: Omit<CapsuleModalProps, "isOpen">) => {
  const root = createRoot(targetEl);

  const state = {
    isOpen: false,
    render: (isOpen: boolean) => {
      state.isOpen = isOpen;
      root.render(
        React.createElement(CapsuleModal, {
          theme: {
            backgroundColor: "#FFF",
            foregroundColor: "#000",
            accentColor: "#FF754A",
            mode: "light",
            font: "Inter",
            ...props.theme,
          },
          para: props.para,
          isOpen,
          onClose: () => {
            state.isOpen = false;
            state.render(false);
            props.onClose();
          },
          appName: props.appName || "Para Modal Example",
          logo: props.logo,
          disableEmailLogin: props.disableEmailLogin,
          disablePhoneLogin: props.disablePhoneLogin,
          oAuthMethods: props.oAuthMethods || Object.values(OAuthMethod),
          onRampTestMode: props.onRampTestMode,
          twoFactorAuthEnabled: props.twoFactorAuthEnabled,
        })
      );
    },
  };

  return {
    open: () => state.render(true),
    close: () => state.render(false),
    isOpen: () => state.isOpen,
    unmount: () => root.unmount(),
  };
};
