import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
export default function index({ searchVal, reset }) {
	const [search, setSearch] = useState('');
	const submit = () => {
		// const form = new FormData(e.target);
		searchVal(search);
		setSearch('');
	};
	return (
		// <Form onSubmit={submit}>
		<>
			<Input value={search} name="search" autoComplete="off" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
			<Button type="submit" onClick={submit} disabled={search === '' ? true : false}>
				Search
			</Button>
			<Button color="red" onClick={reset}>
				Reset
			</Button>
		</>
		// </Form>
	);
}
