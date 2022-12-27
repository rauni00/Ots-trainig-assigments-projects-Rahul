import { createSlice, current } from '@reduxjs/toolkit';

// const initialState = { data: { cartItem: { id: { item: {}, count: 0 } } } };
// const initialState = { data: { cartItem: [{ id: null, item: {}, count: 0 }] } };
const initialState = { data: { cartItem: { 0: { item: {}, count: 0 } } } };

// cartItem: {
//    1:{item: {id: 1, name:'Smart Tv', price:'200$'}, count:5}
//    2:{item: {id: 2, name:'Smart Tv', price:'200$'}, count:2}
//    3:{item: {id: 3, name:'Smart Tv', price:'200$'}, count:1}
//}

// {id: 1, name:'Smart Tv', price:'200$'}

// action.payload = {id: 1, name:'Smart Tv', price:'200$'}
// action.payload.id = 1
// if 1 is present in cartItem as a key them increase count
// else create a key 1 and assign action.payload as a value to id

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCart: (state, action) => {
			if (state.data.cartItem[0] === action.payload.id) {
				state.data = { cartItem: { ...state.data.cartItem, count: state.data.cartItem[0].count + 1 } };
			} else {
				state.data = { cartItem: { [action.payload.id]: { item: { ...action.payload }, count: 0 } } };
			}
			console.log(state.data);
			// const item = state.data.cartItem;
			// const pre = item.map((item) => {
			// 	if (item.id === action.payload.id) {
			// 		return { item, ...item, count: item.count + 1 };
			// 		// console.log(item);
			// 	} else {
			// 		return { item, id: action.payload.id, item: { ...action.payload }, count: 0 };
			// 		// console.log(item);
			// 		// state.data={cartItem}
			// 	}
			// });
			// console.log(pre);
			// const obj = { [action.payload.id]: { item: { ...action.payload }, count: state.data.cartItem } };
			// state.data.cartItem.push({});
			// let id = state.data.id;
			// if (id === action.payload.id) {
			// 	let count = state.data.count;
			// 	state.data = { id: action.payload.id, cartItem: { ...action.payload }, count: count + 1 };
			// } else if (id !== action.payload.id) {
			// 	// state.data = { [id]: { ...current(state.data) }, id: action.payload.id, cartItem: { ...action.payload }, count: 0 };
			// 	const data = {};
			// 	state.data = { [id]: { ...current(state.data) }, id: action.payload.id, cartItem: { ...action.payload }, count: 0 };
			// }
			// console.log(state.data);
		},
		removeFromCart: (state, action) => {
			const newArray = state.data.cartItem.filter((item, index) => index !== action.payload);
			state.data = { cartItem: newArray };
		},
		removeAll: () => {},
	},
});

export const { addCart, removeFromCart } = cartSlice.actions;

export default cartSlice;
