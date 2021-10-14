import { useWallet, useConnectedWallet } from "@terra-money/wallet-provider";
import React, { useEffect, useMemo, useState } from "react";

import { LCDClient } from "@terra-money/terra.js";
import { isConstructorDeclaration } from "typescript";
import { Block } from "./Block";

export const Footer = () => {
  const { status, network, wallets } = useWallet();
  const connectedWallet = useConnectedWallet();

  const [bank, setBank] = useState<null | string>();
  const [lastBlock, setLastBlock] = useState<number | unknown>();

  const lcd = useMemo(() => {
    if (!connectedWallet) {
      return null;
    }

    return new LCDClient({
      URL: connectedWallet.network.lcd,
      chainID: connectedWallet.network.chainID,
    });
  }, [connectedWallet]);

  useEffect(() => {
    if (connectedWallet && lcd) {
      lcd.bank.balance(connectedWallet.walletAddress).then((coins) => {
        setBank(coins.toString());
      });

      lcd.tendermint.blockInfo().then((block) => {
        setLastBlock(block?.block?.last_commit.height);
      });
    } else {
      setBank(null);
    }
  }, [connectedWallet, lcd]);

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
      <section>
        <pre>
          {JSON.stringify(
            {
              status,
              network,
              wallets,
            },
            null,
            2
          )}
        </pre>
        {bank && <pre>{bank}</pre>}
        <Block block={lastBlock} />
      </section>
    </div>
  );
};
