import type { NextPage } from 'next';

import Footer from '../Footer';
import Navbar from '../Navbar';

interface Props {
	children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
	return (
		<div>
			<Navbar></Navbar>
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
