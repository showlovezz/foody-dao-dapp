import { useCallback, useEffect, useRef, useState } from 'react';

import { fetchNonce, fetchUserData } from '../../utilities/duck';

export const useFetchNonce = (
	address: string,
	signMessageAsync: ({ message }: { message: string }) => void,
	signatureData: string,
) => {
	const [user, setUser] = useState({
		user_id: 0,
		address: '',
		level: 0,
		auth_token: '',
	});
	const isMounted = useRef(false);

	const fetchData = useCallback(() => {
		return fetchNonce(address)
			.then(({ data }) => {
				if (isMounted.current) {
					signMessageAsync({ message: data.nonce });
				}

				return fetchUserData(address, signatureData);
			})
			.then((response) => {
				setUser(response);
				// eslint-disable-next-line no-console
				console.log(response);
			})
			.catch((error) => {
				new Error(error);
			});
	}, [address, signMessageAsync, signatureData]);

	useEffect(() => {
		isMounted.current = true;

		if (address) {
			fetchData();
		}

		return () => {
			isMounted.current = false;
		};
	}, [fetchData, address]);

	return { user };
};
