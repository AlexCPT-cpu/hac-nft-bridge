import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { WagmiConfig, createClient } from "wagmi";
import {
  ConnectKitProvider,
  getDefaultClient,
} from "connectkit";

const alchemyId = 
import.meta.env.VITE_ALCHEMY_ID

const client = createClient(
  getDefaultClient({
    appName: "NFT BRIDGE",
    alchemyId,
  })
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
