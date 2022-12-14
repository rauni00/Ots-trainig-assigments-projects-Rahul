import React, { useState } from 'react';
// import { Tab } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

import Demo from './Demo';
import FormExampleForm from './FormExampleForm';
import Home from './Home';

const Header = () => {
	const [about, setAbout] = useState(false);
	const [home, setHome] = useState(false);
	const [demo, setDemo] = useState(false);

	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'end', margin: 10 }}>
				<Button
					primary
					onClick={() => {
						setHome(!home);
					}}
				>
					Home
				</Button>
				<Button
					secondary
					onClick={() => {
						setHome(!home);
						setAbout(!about);
					}}
				>
					About Us
				</Button>
				<Button
					onClick={() => {
						setDemo(!demo);
						setAbout(!about);
					}}
				>
					Contact Us
				</Button>
			</div>
			{home && <Home />}
			{about && <FormExampleForm />}
			{demo && <Demo />}
		</>
	);
};

export default Header;
