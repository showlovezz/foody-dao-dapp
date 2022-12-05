import type { NextPage } from 'next';

import styles from './footer.module.scss';

const Footer: NextPage = () => {
	return (
		<footer className={styles['footer-container']}>
			<div>This Demo is made by Po and Vita</div>
		</footer>
	);
};

export default Footer;
