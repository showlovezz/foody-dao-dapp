import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Container, Form, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import axios from 'axios';
import type { NextPage } from 'next';
import { useAccount, useSignMessage } from 'wagmi';

import { verifyMessage } from 'ethers/lib/utils';

const Navbar: NextPage = () => {
	// const [nonceData, setNonceData] = useState('');
	// const [message, setMessage] = useState('63844c7e0576a');
	const { address } = useAccount();

	const { data, signMessageAsync } = useSignMessage({
		async onSuccess(data) {
			const nonceData = await axios({
				method: 'post',
				url: 'https://foodydao.yuanpo-design.com/verifySignature',
				headers: { 'content-type': 'multipart/form-data' },
				data: {
					address: address,
					signature: data,
				},
			});

			console.log(nonceData);
		},
	});

	console.log(data);

	const handleGetNonce = useCallback(async () => {
		// const {
		// 	data: {
		// 		data: { nonce },
		// 	},
		// } = await axios({
		// 	method: 'post',
		// 	url: 'https://foodydao.yuanpo-design.com/getNonce',
		// 	headers: { 'content-type': 'multipart/form-data' },
		// 	data: {
		// 		address: address,
		// 	},
		// });

		await signMessageAsync({ message: '6384b8b8907ee' });
		// setMessage('63844c7e0576a');

		// const nonceData = await axios({
		// 	method: 'post',
		// 	url: 'https://foodydao.yuanpo-design.com/verifySignature',
		// 	headers: { 'content-type': 'multipart/form-data' },
		// 	data: {
		// 		address: address,
		// 		signature: data,
		// 	},
		// });

		// console.log(nonceData);
	}, [signMessageAsync]);

	// useEffect(() => {
	// 	if (address) {
	// 		handleGetNonce();
	// 	}
	// }, [handleGetNonce, address]);

	return (
		<BootstrapNavbar bg='light' fixed='top'>
			<Container fluid>
				<BootstrapNavbar.Brand href='#home'>Foddy Dao</BootstrapNavbar.Brand>
				<BootstrapNavbar.Toggle />
				<BootstrapNavbar.Collapse className='justify-content-end'>
					<Form className='d-flex me-2'>
						<Form.Control
							type='search'
							placeholder='Search Restaurant'
							className='me-2'
							aria-label='Search'
						/>
						<Button variant='outline-primary' onClick={() => handleGetNonce()}>
							Search
						</Button>
					</Form>
					<ConnectButton />
				</BootstrapNavbar.Collapse>
			</Container>
		</BootstrapNavbar>
	);
};

export default Navbar;
