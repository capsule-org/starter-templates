import { Environment, CapsuleWeb } from "@usecapsule/react-sdk";

const PARA_API_KEY = import.meta.env.VITE_PARA_API_KEY;

export const capsuleClient = new CapsuleWeb(Environment.BETA, PARA_API_KEY);
