import type { NextPage } from 'next';

import styles from './layout.module.scss';

import Navbar from '../Navbar';

interface Props {
	children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
	return (
		<main className={styles['layout-content']}>
			<Navbar />
			{children}
		</main>
	);
};

export default Layout;
