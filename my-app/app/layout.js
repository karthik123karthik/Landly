"use client";

import { ToastContainer, toast } from "react-toastify";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Navbar from "../components/Navbar";
import styles from "./home.module.css";

const { chains, provider } = configureChains(
  [chain.polygonMumbai, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const metadata = {
  title: "Landly",
  description: "It is about the registration on blockchain",
  keyword: "solidity, ethereum, land, registration, Blockchain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.container}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <Navbar />
            {children}
            <ToastContainer
              theme="dark"
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
