import React from 'react';
import { Button } from 'react-bootstrap';
import { BsGeoAlt, BsStar } from 'react-icons/bs';
import PropTypes from 'prop-types';

import { RestaurantProps } from '../../hooks/useFetchRestaurantList';

import styles from './restaurantCard.module.scss';

const RestaurantCard = ({ restaurant }: { restaurant: RestaurantProps }) => {
	return (
		<div className={styles['restaurant-card']}>
			<div className={styles['card-content']}>
				<div className={styles['card-title']}>{restaurant.restaurant_name}</div>
				<div className={styles['card-comment']}>
					<BsStar className='me-1' />
					<BsStar className='me-1' />
					<BsStar className='me-1' />
					<BsStar className='me-1' />
					<BsStar className='me-2' />
					<span>{Math.floor(Math.random() * 100)} comment</span>
				</div>
				<div className={styles['card-address']}>
					<BsGeoAlt className='me-2' />
					<div>{restaurant.restaurant_address}</div>
				</div>
			</div>
			<div className={styles['card-button']}>
				<Button variant='outline-primary' size='sm'>
					View Comment
				</Button>
				<Button variant='outline-primary' size='sm'>
					Write Comment
				</Button>
			</div>
		</div>
	);
};

RestaurantCard.propTypes = {
	restaurant: PropTypes.object.isRequired,
};

export default RestaurantCard;
