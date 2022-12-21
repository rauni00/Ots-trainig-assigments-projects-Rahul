import React from 'react';
import { Card, Icon, Image, Container } from 'semantic-ui-react';
export default function Service() {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<Container>
			<div style={{ display: 'flex', justifyContent: 'normal' }}>
				{arr.map((item) => (
					<Card>
						<Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
						<Card.Content>
							<Card.Header>Matthew</Card.Header>
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
		</Container>
	);
}
