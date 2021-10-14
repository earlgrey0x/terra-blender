import {
  ConnectType,
  useWallet,
  WalletStatus,
} from "@terra-money/wallet-provider";
import { useCallback } from "react";
import { WalletButton } from "../../components/Button/WalletButton";
import LOGO from "./Images/logo.png";

/**
 * Main function is to orchestrate the identity, navigation and wallet connection.
 *
 * It will first try to connect to Chrome Extension by default and in case of not available
 * will try mobile and finally allow manual connection to a wallet address.
 *
 * In case of connect to testnet it is necessary select the network in the chrome extension.
 * @returns Component Header
 */
export const Header = () => {
  const { connect, disconnect, availableConnectTypes, status } = useWallet();

  const connectWallet = useCallback(() => {
    if (availableConnectTypes.includes(ConnectType.CHROME_EXTENSION)) {
      return connect(ConnectType.CHROME_EXTENSION);
    }

    if (availableConnectTypes.includes(ConnectType.WALLETCONNECT)) {
      return connect(ConnectType.WALLETCONNECT);
    }

    connect(ConnectType.READONLY);
  }, [availableConnectTypes, connect]);

  const disconnectWallet = useCallback(() => {
    disconnect();
  }, [disconnect]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: "20%",
        marginLeft: "20%",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img src={LOGO} alt="Blendr" style={{ height: 30, width: 30 }} />
        <p>Blendr</p>
      </div>
      <WalletButton
        label={
          status === WalletStatus.WALLET_CONNECTED
            ? "Disconnect"
            : "Connect Wallet"
        }
        onClick={
          status === WalletStatus.WALLET_CONNECTED
            ? disconnectWallet
            : connectWallet
        }
      />
    </div>
  );
};
