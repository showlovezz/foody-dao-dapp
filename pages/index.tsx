import { Container } from 'react-bootstrap';
import type { NextPage } from 'next';

import Footer from '../components/Footer';

import styles from './home.module.scss';

// const restaurantData = [
// 	{
// 		created_at: '2022-11-15 16:38:13',
// 		restaurant_address: '106台北市大安區忠孝東路三段300號B2',
// 		restaurant_id: '1',
// 		restaurant_name: '鼎泰豐 復興店',
// 		restaurant_website: 'https://www.dintaifung.com.tw/',
// 		updated_at: '2022-11-15 16:38:13',
// 	},
// 	{
// 		created_at: '2022-11-15 16:38:13',
// 		restaurant_address: '104台北市中山區敬業二路199號5樓',
// 		restaurant_id: '2',
// 		restaurant_name: '大腕燒肉專門店',
// 		restaurant_website: 'https://www.dawan.com.tw/',
// 		updated_at: '2022-11-15 16:38:13',
// 	},
// 	{
// 		created_at: '2022-11-15 16:38:13',
// 		restaurant_address: '106台北市大安區金華街98號',
// 		restaurant_id: '3',
// 		restaurant_name: '廖家牛肉麵',
// 		restaurant_website:
// 			'https://www.facebook.com/pages/%E5%BB%96%E5%AE%B6%E7%89%9B%E8%82%89%E9%BA%B5%E6%96%B0%E5%9D%80/247582235366947',
// 		updated_at: '2022-11-15 16:38:13',
// 	},
// ];

const Home: NextPage = () => {
	// const [data, setData] = useState<RestaurantProps[]>([]);
	// useEffect(() => {
	// 	setData(restaurantData);
	// }, []);

	return (
		<>
			<article className={styles['home-content']}>
				<Container>
					<section>
						{/* <Row>
							<Col md={{ span: 6, offset: 3 }}>
								{data.map((restaurant) => (
									<RestaurantCard key={restaurant.restaurant_id} restaurant={restaurant} />
								))}
							</Col>
						</Row> */}
					</section>
				</Container>
			</article>
			<Footer />
		</>
	);
};

export default Home;
