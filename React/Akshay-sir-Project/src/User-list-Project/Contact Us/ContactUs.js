import React from 'react';
import { Button, Grid, Image, Form, Segment } from 'semantic-ui-react';

const ContactUs = () => {
	return (
		<Segment>
			<h1>Contact Us</h1>
			<Grid columns={2} padded>
				<Grid.Column>
					<Image
						src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/contact-us-pages-sej-5f63d4f927b04-760x400.png"
						style={{ borderRadius: 10 }}
					/>
				</Grid.Column>
				<Grid.Column>
					<Segment inverted>
						<Form inverted style={{ height: 305, borderRadius: 10 }}>
							<Form.Group unstackable widths={2}>
								<Form.Input label="First name" placeholder="First name" />
								<Form.Input label="Last name" placeholder="Last name" />
							</Form.Group>
							<Form.Group widths={2}>
								<Form.Input label="Address" placeholder="Address" />
								<Form.Input label="Phone" placeholder="Phone" />
							</Form.Group>
							<Button type="submit">Submit</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
		</Segment>
	);
};

export default ContactUs;
