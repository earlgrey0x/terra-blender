import { CoreButton, CoreButtonProps } from "./CoreButton";
import WALLET from "./Images/wallet.svg";

export interface WalletButtonProps extends CoreButtonProps {
  balance?: string;
}

/**
 * WalletButton is a specialization of CoreButton that will focus its focus
 * is to handle the connectivity to the Terra Wallet and exposed the connection
 * to the WalletProvider
 * @param props WalletButtonProps
 * @returns CoreButton specialized version of the CoreButton
 */
export const WalletButton = (props: WalletButtonProps) => {
  return <CoreButton icon={WALLET} {...props} />;
};
