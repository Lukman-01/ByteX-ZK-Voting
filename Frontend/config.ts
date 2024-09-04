import { http, createConfig } from "wagmi";
import { liskSepolia, sepolia } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

const projectId = "<WALLETCONNECT_PROJECT_ID>";

export const config = createConfig({
  chains: [liskSepolia, sepolia],
  connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
  transports: {
    [liskSepolia.id]: http(),
    [sepolia.id]: http(),
  },
});
