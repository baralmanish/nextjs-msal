import { msalInstance } from "../config/authConfig";

const useMsalAuth = () => {
  const accounts = msalInstance.getAllAccounts();
  return (
    accounts.find(
      (a) => a.tenantId === process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID
    ) || null
  );
};

export default useMsalAuth;
