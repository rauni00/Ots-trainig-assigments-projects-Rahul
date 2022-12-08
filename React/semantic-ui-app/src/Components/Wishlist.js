import React, { useState } from 'react';
import { Grid, Image, Icon } from 'semantic-ui-react';
// import { Card, Icon } from 'semantic-ui-react';
import Data from './Data';

const Wishlist = () => {
	const [heart, setHeart] = useState(false);
	console.log(Data);
	let icon = (
		<>
			<Icon
				style={{ color: heart ? 'red' : 'black' }}
				name="heart"
				onClick={() => {
					setHeart(!heart);
				}}
			/>
		</>
	);
	return (
		<div style={{ margin: 20 }}>
			<Grid columns={3} divided>
				{Data.map((item) => (
					<>
						<Grid.Row>
							<Grid.Column>
								<Image
									style={{ width: 150, height: 'auto' }}
									src={item.image}
								/>
							</Grid.Column>
							<Grid.Column>
								<span style={{ color: 'green', fontSize: 15 }}>
									{item.name}
								</span>
								<ul>
									<li>6 GB RAM 128 GB ROM Expandable Upto 1 TB</li>
									<li>
										16.76 cm (6.6 inch) Full HD+ Display 50MP + 8MP
										16MP
									</li>
									<li>Front Camera 5000 mAh</li>
									<li>
										Lithium-ion Polymer Battery Mediatek Dimensity 810
										Processor
									</li>
								</ul>
							</Grid.Column>
							<Grid.Column>
								<span style={{ fontSize: 20 }}>
									{'\u20B9'}
									{item.price}
								</span>
							</Grid.Column>
						</Grid.Row>
					</>
				))}
			</Grid>
		</div>
	);
};

export default Wishlist;
