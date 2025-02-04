import { Environment, CapsuleWeb } from "@getpara/react-sdk";

const PARA_API_KEY = import.meta.env.VITE_PARA_API_KEY;

export const para = new CapsuleWeb(Environment.BETA, PARA_API_KEY);
