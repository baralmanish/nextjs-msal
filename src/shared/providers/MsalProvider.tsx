import { PublicClientApplication } from "@azure/msal-browser";
// import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "@/shared/config/authConfig";

export const msalInstance = new PublicClientApplication(msalConfig);
