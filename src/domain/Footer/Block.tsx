import { useWallet } from "@terra-money/wallet-provider";

export interface BlockProps {
  block?: number | unknown;
}

export const Block = ({ block = "" }: BlockProps) => {
  const { network } = useWallet();

  return (
    <div>
      <a
        href={`https://finder.terra.money/${network.chainID}/blocks/${block}`}
        target="_blank"
        rel="noreferrer"
      >
        Latest Block: {block}
      </a>
    </div>
  );
};
