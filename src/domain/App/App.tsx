import React from "react";
import { Header } from "../Header/Header";
import "./App.css";
import { Footer } from "../Footer/Footer";
import { useChainOptions, WalletProvider } from "@terra-money/wallet-provider";

export function App() {
  const chainOptions = useChainOptions();

  return (
    chainOptions && (
      <WalletProvider {...chainOptions}>
        <div>
          <Header />
          <Footer />
        </div>
      </WalletProvider>
    )
  );
}
