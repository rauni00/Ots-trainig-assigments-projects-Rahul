import React from 'react';
import { List } from 'semantic-ui-react';

export default function ListItem({ item }) {
	return <List style={{ marginTop: 5 }} items={[item.name]}></List>;
}
