import Axios from 'axios';

export const getServerSideProps = async (address: string) => {
	const response = await Axios({
		method: 'post',
		url: 'https://foodydao.yuanpo-design.com/getNonce',
		headers: { 'content-type': 'multipart/form-data' },
		data: {
			address: address,
		},
	});

	return {
		props: { nonce: response.data.data.nonce },
	};
};
