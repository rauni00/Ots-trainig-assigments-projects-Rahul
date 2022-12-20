import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const MenuBar = () => {
	const [active, setActive] = useState('Home');
	return (
		<div>
			<Menu inverted size="large">
				<Menu.Item active={active === 'Home' ? active : !active} as={Link} name="Home" to="/" onClick={() => setActive('Home')}>
					Home
				</Menu.Item>
				<Menu.Item
					active={active === 'Services' ? active : !active}
					as={Link}
					name="Services"
					to="services"
					onClick={() => setActive('Services')}
				>
					Services
				</Menu.Item>
				<Menu.Item
					active={active === 'contactus' ? active : !active}
					as={Link}
					name="contactus"
					to="contactus"
					onClick={() => setActive('contactus')}
				>
					Contact Us
				</Menu.Item>
				<Menu.Item
					active={active === 'Trainees' ? active : !active}
					as={Link}
					name="profile"
					to="trainees"
					onClick={() => setActive('Trainees')}
				>
					Trainees
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default MenuBar;
