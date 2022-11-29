import { Button, Container, Form, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Axios from 'axios';
import type { NextPage } from 'next';
import { useAccount, useSignMessage } from 'wagmi';

import { useFetchNonce } from './useFetchNonce';

const Navbar: NextPage = () => {
	const { address } = useAccount();
	// const { data: signatureData, signMessageAsync } = useSignMessage({
	// 	async onSuccess(data) {
	// 		const nonceData = await Axios({
	// 			method: 'post',
	// 			url: 'https://foodydao.yuanpo-design.com/verifySignature',
	// 			headers: { 'content-type': 'multipart/form-data' },
	// 			data: {
	// 				address: address,
	// 				signature: data,
	// 			},
	// 		});

	// 		console.log(nonceData);
	// 	},
	// });

	const { data: signatureData, signMessageAsync } = useSignMessage();

	const user = useFetchNonce(address ?? '', signMessageAsync, signatureData ?? '');

	console.log(user);

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
						<Button variant='outline-primary'>Search</Button>
					</Form>
					<ConnectButton />
				</BootstrapNavbar.Collapse>
			</Container>
		</BootstrapNavbar>
	);
};

export default Navbar;
