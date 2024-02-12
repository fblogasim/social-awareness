import { createContext, useContext } from "react";

export const AccountContext = createContext(null);

export const AccountProvider = AccountContext.Provider;

export function useAccountContext() {
  const context = useContext(AccountContext);

  if (!context) {
    throw Error("Account must be used within a AccountContextProvider");
  }

  return context;
}
