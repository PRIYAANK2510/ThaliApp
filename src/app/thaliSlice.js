import { createSlice } from '@reduxjs/toolkit';

const initialState = {};
export const prices = {
	Chapati: 30,
	Pickle: 60,
	Curd: 75,
	Sweet: 150,
	Daal: 90,
	Paneer: 135,
};

const thaliSlice = createSlice({
	name: 'thali',
	initialState,
	reducers: {
		addContent: (state, action) => {
			state[action.payload] = 1;
		},
		removeContent: (state, action) => {
			delete state[action.payload];
		},
		increaseItemCount: (state, action) => {
			state[action.payload] = state[action.payload] + 1;
		},
		decreaseItemCount: (state, action) => {
			if (state[action.payload] - 1 <= 0) {
				delete state[action.payload];
			} else {
				state[action.payload] = state[action.payload] - 1;
			}
		},
	},
});

export const selectThali = (state) => state.thali;
export const { addContent, removeContent, increaseItemCount, decreaseItemCount } =
	thaliSlice.actions;
export default thaliSlice.reducer;
