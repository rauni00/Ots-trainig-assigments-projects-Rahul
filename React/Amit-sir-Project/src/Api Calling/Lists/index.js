import React from 'react';
import ListItem from './ListItem';
export default function index({ data }) {
	return <div>{data && data.length > 0 ? data.map((item, i) => <ListItem key={i} item={item} />) : <div>Not fount</div>}</div>;
}
