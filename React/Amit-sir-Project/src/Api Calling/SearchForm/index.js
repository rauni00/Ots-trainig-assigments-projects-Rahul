import React from 'react';
import { Input, Form, Button } from 'semantic-ui-react';
export default function index() {
	return (
		<Form>
			<Input placeholder="Search..." />
			<Button type="submit">Submit</Button>
			<Button color="red">Reset</Button>
		</Form>
	);
}
