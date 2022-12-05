import Axios from 'axios';

// export async function getServerSideProps(context) {
// 	return {
// 		props: {}, // will be passed to the page component as props
// 	};
// }

export const fetchNonce = (address: string) => {
	if (!address) return Promise.reject(new Error('miss_options'));

	const headers = { 'Content-Type': 'multipart/form-data' };
	const url = 'https://foodydao.yuanpo-design.com/getNonce';

	return Axios.post(url, { address }, { headers }).then(({ data }) => {
		if (!data) {
			return Promise.reject(new Error('fetch_error'));
		}

		return data;
	});
};

export const fetchUserData = (address: string, signature: string) => {
	if (!address || !signature) return Promise.reject(new Error('miss_options'));

	const headers = { 'Content-Type': 'multipart/form-data' };
	const url = 'https://foodydao.yuanpo-design.com/verifySignatureSimple';

	return Axios.post(url, { address, signature }, { headers }).then(({ data }) => {
		if (!data) {
			return Promise.reject(new Error('fetch_error'));
		}

		return data;
	});
};
