import { Button, Container, Form, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Link from 'next/link';

const Navbar: NextPage = () => {
	return (
		<BootstrapNavbar bg='light' fixed='top'>
			<Container>
				<BootstrapNavbar.Brand href='/'>Foddy Dao</BootstrapNavbar.Brand>
				<BootstrapNavbar.Toggle />
				<BootstrapNavbar.Collapse className='justify-content-end'>
					<Form className='d-flex me-2'>
						<Form.Control
							type='search'
							placeholder='Search Restaurant'
							className='me-2'
							aria-label='Search'
						/>
						<Link href='/restaurants'>
							<Button variant='outline-primary'>Search</Button>
						</Link>
					</Form>
					<ConnectButton />
				</BootstrapNavbar.Collapse>
			</Container>
		</BootstrapNavbar>
	);
};

export default Navbar;
