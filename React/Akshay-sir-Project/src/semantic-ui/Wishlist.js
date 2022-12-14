import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Data from './Data';
import Like from './Like';
const Wishlist = () => {
	return (
		<div style={{ margin: 20 }}>
			<Grid columns={3} divided>
				{Data.map((item) => (
					<>
						<Grid.Row>
							<Grid.Column>
								<Like />
								<Image style={{ width: 150, height: 'auto' }} src={item.image} />
							</Grid.Column>
							<Grid.Column>
								<span style={{ color: 'green', fontSize: 20 }}>{item.name}</span>
								<ul>
									<li>6 GB RAM 128 GB ROM Expandable Upto 1 TB</li>
									<li>16.76 cm (6.6 inch) Full HD+ Display 50MP + 8MP 16MP</li>
									<li>Front Camera 5000 mAh</li>
									<li>Lithium-ion Polymer Battery Mediatek Dimensity 810 Processor</li>
								</ul>
							</Grid.Column>
							<Grid.Column>
								<span style={{ fontSize: 20 }}>
									{'\u20B9'}
									{item.price} <sup style={{ color: 'green', fontSize: 12 }}>2000 off</sup>
									<div style={{ fontSize: 15 }}>
										<strike>
											{'\u20B9'}
											{item.price - 2000}
										</strike>
									</div>
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
