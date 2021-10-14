import { CoreButton, CoreButtonProps } from "./CoreButton";
import WALLET from "./Images/wallet.svg";

export interface WalletButtonProps extends CoreButtonProps {
  label?: string;
}

export const WalletButton = (props: WalletButtonProps) => {
  return <CoreButton icon={WALLET} {...props} />;
};
