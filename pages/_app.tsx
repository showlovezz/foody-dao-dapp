import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import Layout from '../components/Layout';

import '../styles/scss/app.scss';
import '@rainbow-me/rainbowkit/styles.css';

const { chains, provider, webSocketProvider } = configureChains(
	[chain.goerli],
	[
		alchemyProvider({
			// This is Alchemy's default API key.
			// You can get your own at https://dashboard.alchemyapi.io
			apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
		}),
		publicProvider(),
	],
);

const { connectors } = getDefaultWallets({
	appName: 'Foody Dao',
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
	webSocketProvider,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</RainbowKitProvider>
		</WagmiConfig>
	);
};

export default MyApp;
