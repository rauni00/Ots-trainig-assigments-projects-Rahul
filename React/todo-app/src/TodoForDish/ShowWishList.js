import React from 'react';
import GlobalContext from './GlobalContext';
export default function ShowWishList() {
	return <div>{React.useContext(GlobalContext)}</div>;
}
