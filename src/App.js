import React, { useContext, useState } from "react";
import { TezosContext } from "./context/TezosContext";

function App() {
  const { wallet, tezos } = useContext(TezosContext);
  const [address, setAddress] = useState("");

  async function connectWallet() {
    let walletAddress;

    const active = await wallet.client.getActiveAccount();
    if (active) walletAddress = active;
    else {
      const permissions = await wallet.client.requestPermissions({
        network: {
          type: "mainnet",
        },
      });
      walletAddress = permissions.address;
    }

    setAddress(walletAddress);
  }

  async function disconnectWallet() {
    await wallet.client.clearActiveAccount();
    setAddress("");
  }

  return (
    <div>
      {address.length === 0 ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <button onClick={disconnectWallet}>Disconnect Wallet</button>
      )}
      
    </div>
  );
}

export default App;
