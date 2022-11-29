import { Container } from 'react-bootstrap';
import type { NextPage } from 'next';

import styles from './home.module.scss';

const Home: NextPage = () => {
	return (
		<article className={styles['home-container']}>
			<section>
				<Container></Container>
			</section>
		</article>
	);
};

export default Home;
