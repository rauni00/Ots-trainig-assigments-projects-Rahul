import React from 'react';
import { Card, Icon, Image, Container } from 'semantic-ui-react';
export default function Service() {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	return (
		<div>
			{arr.map((item) => (
				<Card className="effect" style={{ display: 'inline-flex', margin: 5 }}>
					<Image
						src="https://otssolutions-my.sharepoint.com/personal/rahul_rauniyar_otssolutions_com/Documents/Microsoft%20Teams%20Chat%20Files/Redux.gif?csf=1&web=1&CT=1672032479127&OR=OWA-NT&CID=4cb4e2ab-aa2a-8e6f-045a-8d7c6636bec3"
						wrapped
					/>
					<Card.Content>
						<Card.Header>Redux</Card.Header>
						<Card.Meta>
							<span className="date">Joined in 2015</span>
						</Card.Meta>
						<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<a>
							<Icon name="user" />
							22 Friends
						</a>
					</Card.Content>
				</Card>
			))}
		</div>
	);
}
